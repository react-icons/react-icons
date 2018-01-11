module.exports = SVGTranslator;

var SvgPath = require('svgpath');
var sax = require("sax");
var SVGOptim = require('svgo');
var Q = require('q');


function SVGTranslator(options) {

    if (typeof options !== 'object') {
        throw new Error('options need an object');
    }

    this.noSvgo = !!options.noSvgo;

    this.options = options;
    this.scale = options.scale || 1;
    this.baseSize = null;
    this.dx = 0;
    this.dy = 0;
}


SVGTranslator.prototype.svgModify = function (svgSrcString) {

    var self = this;
    var parser = sax.parser(true); // set to false for html-mode
    var deferred = Q.defer();

    var svgDestString = '';

    parser.onerror = function (e) {
        console.log(e);
    };

    parser.onopentag = function (node) {
        self.translate(node);
        svgDestString += self._echoOpenTag(node);
    };

    parser.onclosetag = function (nodeName) {
        svgDestString += self._echoCloseTag(nodeName);
    };

    parser.onend = function () {
        // need this for windows issue
        deferred.resolve('<?xml version="1.0"?>' + svgDestString);
    };

    // start process
    parser.write(svgSrcString).close();

    return deferred.promise;
};

SVGTranslator.prototype._echoOpenTag = function (node) {

    var stringArr = [];

    stringArr.push('<');
    stringArr.push(node.name);

    Object.keys(node.attributes).forEach(function (key) {
        stringArr.push(' ');
        stringArr.push(key);
        stringArr.push('=\"');
        stringArr.push(String(node.attributes[key]).replace('"', '&quot;'));
        stringArr.push('\"');
    });

    stringArr.push('>');

    return stringArr.join('');
};

SVGTranslator.prototype._echoCloseTag = function (nodeName) {
    return ['</', nodeName, '>'].join('');
};

SVGTranslator.prototype.parser = function (svgSrcString) {
    var self = this;
    var deferred = Q.defer();

    if (this.noSvgo) {
        self.svgModify(svgSrcString)
            .then(function (result) {
                deferred.resolve(result);
            });
    } else {
        self.svgo(svgSrcString)
            .then(function (data) {
                self.svgModify(data).then(function (result) {
                    deferred.resolve(result);
                });
            })
    }
    return deferred.promise;
};

SVGTranslator.prototype.svgo = function (svgSrcString) {

    var deferred = Q.defer();

    (new SVGOptim()).optimize(svgSrcString, function (result) {
        deferred.resolve(result.data);
    });

    return deferred.promise;
};

SVGTranslator.prototype.translate = function (node) {


    switch (node.name) {
        case 'svg':
            this.svgCenterScale(node);
            break;
        case 'path':

            node.attributes.d = new SvgPath(node.attributes.d)
                .translate(this.dx, this.dy)
                .scale(this.scale)
                .abs()
                .round(1) // Here the real rounding happens
                .rel()
                .round(1) // Fix js floating point error/garbage after rel()
                .toString();

            break;
        case 'rect':
        case 'line':
        case 'circle':
        case 'ellipse':
            this.nodeBaseShapeScale(node);

            break;
        case 'polyline':
        case 'polygon':

            this.nodePointsShapeScale(node);

            break;

    }
};

SVGTranslator.prototype.svgCenterScale = function (node) {


    if (!node.attributes.height && node.attributes.viewBox) {
        node.attributes.height = node.attributes.viewBox.split(' ')[3];
    }
    if (!node.attributes.width && node.attributes.viewBox) {
        node.attributes.width = node.attributes.viewBox.split(' ')[2];
    }

    node.attributes.width = parseFloat(node.attributes.width);
    node.attributes.height = parseFloat(node.attributes.height);
    this.dx = 0;
    this.dy = 0;

    if (this.options.width) {
        this.baseSize = this.options.width;

        if (node.attributes.width >= node.attributes.height) {
            this.scale = this.options.width / node.attributes.width;
            this.dy = (node.attributes.width - node.attributes.height) / 2;


        } else {
            this.scale = this.options.width / node.attributes.height;
            this.dx = (node.attributes.height - node.attributes.width) / 2;
        }

        node.attributes.width = this.baseSize;
        node.attributes.height = this.baseSize;

    } else {
        node.attributes.width = node.attributes.width * this.scale;
        node.attributes.height = node.attributes.height * this.scale;
    }


    node.attributes.viewBox = [0, 0, node.attributes.width, node.attributes.height].join(' ');
};

SVGTranslator.prototype.nodeBaseShapeScale = function (node) {

    var self = this;

    var dxAttrs = ['cx', 'x', 'x1', 'x2'];
    var dyAttrs = ['cy', 'y', 'y1', 'y2'];

    var scaleAttrs = ['width', 'height', 'rx', 'ry', 'r'].concat(dxAttrs).concat(dyAttrs);

    if (!node.attributes) {
        throw new Error('not attributes');
    }

    Object.keys(node.attributes).forEach(function (attrKey) {
        if (scaleAttrs.indexOf(attrKey) > -1) {
            node.attributes[attrKey] *= self.scale;
        }
        if (dxAttrs.indexOf(attrKey) > -1) {
            node.attributes[attrKey] += self.dx;
        }
        if (dyAttrs.indexOf(attrKey) > -1) {
            node.attributes[attrKey] += self.dy;
        }
    })


};

SVGTranslator.prototype.nodePointsShapeScale = function (node) {

    var self = this;
    var pair = null;

    if (!node.attributes.points) {
        throw new Error('not points');
    }

    node.attributes.points = node.attributes.points
        .replace(/(^\s*)|(\s*$)/g, "") // trim
        .split(/\s+/).map(function (point) {
            pair = point.split(',');
            pair[0] = pair[0] * self.scale + self.dx;
            pair[1] = pair[1] * self.scale + self.dy;
            return pair.join(',');
        }).join(' ');

};




