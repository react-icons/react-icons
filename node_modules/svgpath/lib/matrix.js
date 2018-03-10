'use strict';

// combine 2 matrixes
// m1, m2 - [a, b, c, d, e, g]
//
function combine(m1, m2) {
  return [
    m1[0] * m2[0] + m1[2] * m2[1],
    m1[1] * m2[0] + m1[3] * m2[1],
    m1[0] * m2[2] + m1[2] * m2[3],
    m1[1] * m2[2] + m1[3] * m2[3],
    m1[0] * m2[4] + m1[2] * m2[5] + m1[4],
    m1[1] * m2[4] + m1[3] * m2[5] + m1[5]
  ];
}


function Matrix() {
  this.queue = []; // list of matrixes to apply
  this.cache = []; // combined matrix (cache)
}


// params = [a, b, c, d, e, f]
Matrix.prototype.matrix = function(params) {
  this.cache = [];
  this.queue.push(params);
};

// params = [angle <, x, y>]
Matrix.prototype.rotate = function(params) {
  var alpha = params[0] * Math.PI / 180;
  var cosa = Math.cos(alpha);
  var sina = Math.sin(alpha);

  this.cache = [];

  if (params.length === 3) {
    // Rotation about point ( params[1], params[2])
    this.translate([ params[1], params[2] ]);
    this.queue.push([ cosa, sina, -sina, cosa, 0, 0 ]);
    this.translate([ -params[1], -params[2] ]);

  } else {
    // Rotation around (0, 0)
    this.queue.push([ cosa, sina, -sina, cosa, 0, 0 ]);
  }
};

// params = [x <, y>]
Matrix.prototype.scale = function(params) {
  this.cache = [];
  this.queue.push([ params[0], 0, 0, params.length === 2 ? params[1] : params[0], 0, 0 ]);
};

// params = [angle]
Matrix.prototype.skewX = function(params) {
  this.cache = [];
  this.queue.push([ 1, 0, Math.tan(params[0] * Math.PI / 180), 1, 0, 0 ]);
};

// params = [angle]
Matrix.prototype.skewY = function(params) {
  this.cache = [];
  this.queue.push([ 1, Math.tan(params[0] * Math.PI / 180), 0, 1, 0, 0 ]);
};

// params = [x <, y>]
Matrix.prototype.translate = function(params) {
  this.cache = [];
  this.queue.push([ 1, 0, 0, 1, params[0], (params.length === 2 ? params[1] : 0) ]);
};


// Apply list of matrixes to X,Y point. If isRelative set,
// then `translate` skipped
//
Matrix.prototype.calc = function(x, y, isRelative) {
  var newXY = [ x, y ],
      combined = this.cache,
      i, len;

  // Don't change point on empty transforms queue
  if (!this.queue.length) { return newXY; }

  // Calculate final matrix, if not exists
  // NB. if you deside to apply transforms to point one-by-one,
  // they should be taken in reverse order
  if (!combined.length) {
    combined = this.queue[0];
    for (i = 1, len = this.queue.length; i < len; i++) {
      combined = combine(combined, this.queue[i]);
    }
    this.cache = combined;
  }

  // Apply matrix to point
  newXY = [
    newXY[0] * combined[0] + newXY[1] * combined[2] + (isRelative ? 0 : combined[4]),
    newXY[0] * combined[1] + newXY[1] * combined[3] + (isRelative ? 0 : combined[5])
  ];

  return newXY;
};


module.exports = Matrix;
