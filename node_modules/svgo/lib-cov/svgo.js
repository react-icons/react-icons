"use strict";
var __cov_8xxFdBTcL$PXr_FoGTQe0A = (Function('return this'))();
if (!__cov_8xxFdBTcL$PXr_FoGTQe0A.global.__coverage__) { __cov_8xxFdBTcL$PXr_FoGTQe0A.global.__coverage__ = {}; }
__cov_8xxFdBTcL$PXr_FoGTQe0A = __cov_8xxFdBTcL$PXr_FoGTQe0A.global.__coverage__;
if (!(__cov_8xxFdBTcL$PXr_FoGTQe0A['/Users/levsun/Documents/svgo/lib/svgo.js'])) {
   __cov_8xxFdBTcL$PXr_FoGTQe0A['/Users/levsun/Documents/svgo/lib/svgo.js'] = {"path":"/Users/levsun/Documents/svgo/lib/svgo.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0},"b":{"1":[0,0]},"f":{"1":0,"2":0,"3":0},"fnMap":{"1":{"name":"(anonymous_1)","line":18,"loc":{"start":{"line":18,"column":28},"end":{"line":18,"column":45}}},"2":{"name":"(anonymous_2)","line":24,"loc":{"start":{"line":24,"column":26},"end":{"line":24,"column":53}}},"3":{"name":"(anonymous_3)","line":28,"loc":{"start":{"line":28,"column":19},"end":{"line":28,"column":35}}}},"statementMap":{"1":{"start":{"line":13,"column":0},"end":{"line":16,"column":38}},"2":{"start":{"line":18,"column":0},"end":{"line":22,"column":2}},"3":{"start":{"line":20,"column":4},"end":{"line":20,"column":33}},"4":{"start":{"line":24,"column":0},"end":{"line":41,"column":2}},"5":{"start":{"line":26,"column":4},"end":{"line":26,"column":29}},"6":{"start":{"line":28,"column":4},"end":{"line":39,"column":7}},"7":{"start":{"line":30,"column":8},"end":{"line":33,"column":9}},"8":{"start":{"line":31,"column":12},"end":{"line":31,"column":28}},"9":{"start":{"line":32,"column":12},"end":{"line":32,"column":19}},"10":{"start":{"line":35,"column":8},"end":{"line":35,"column":47}},"11":{"start":{"line":37,"column":8},"end":{"line":37,"column":47}}},"branchMap":{"1":{"line":30,"type":"if","locations":[{"start":{"line":30,"column":8},"end":{"line":30,"column":8}},{"start":{"line":30,"column":8},"end":{"line":30,"column":8}}]}}};
}
__cov_8xxFdBTcL$PXr_FoGTQe0A = __cov_8xxFdBTcL$PXr_FoGTQe0A['/Users/levsun/Documents/svgo/lib/svgo.js'];
__cov_8xxFdBTcL$PXr_FoGTQe0A.s['1']++;
var CONFIG = require('./svgo/config'), SVG2JS = require('./svgo/svg2js'), PLUGINS = require('./svgo/plugins'), JS2SVG = require('./svgo/js2svg');
__cov_8xxFdBTcL$PXr_FoGTQe0A.s['2']++;
var SVGO = module.exports = function (config) {
        __cov_8xxFdBTcL$PXr_FoGTQe0A.f['1']++;
        __cov_8xxFdBTcL$PXr_FoGTQe0A.s['3']++;
        this.config = CONFIG(config);
    };
__cov_8xxFdBTcL$PXr_FoGTQe0A.s['4']++;
SVGO.prototype.optimize = function (svgstr, callback) {
    __cov_8xxFdBTcL$PXr_FoGTQe0A.f['2']++;
    __cov_8xxFdBTcL$PXr_FoGTQe0A.s['5']++;
    var config = this.config;
    __cov_8xxFdBTcL$PXr_FoGTQe0A.s['6']++;
    SVG2JS(svgstr, function (svgjs) {
        __cov_8xxFdBTcL$PXr_FoGTQe0A.f['3']++;
        __cov_8xxFdBTcL$PXr_FoGTQe0A.s['7']++;
        if (svgjs.error) {
            __cov_8xxFdBTcL$PXr_FoGTQe0A.b['1'][0]++;
            __cov_8xxFdBTcL$PXr_FoGTQe0A.s['8']++;
            callback(svgjs);
            __cov_8xxFdBTcL$PXr_FoGTQe0A.s['9']++;
            return;
        } else {
            __cov_8xxFdBTcL$PXr_FoGTQe0A.b['1'][1]++;
        }
        __cov_8xxFdBTcL$PXr_FoGTQe0A.s['10']++;
        svgjs = PLUGINS(svgjs, config.plugins);
        __cov_8xxFdBTcL$PXr_FoGTQe0A.s['11']++;
        callback(JS2SVG(svgjs, config.js2svg));
    });
};
