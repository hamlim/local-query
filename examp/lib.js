'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CONTENT = exports.NAME = undefined;

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var NAME = exports.NAME = 'name';
var CONTENT = exports.CONTENT = 'content';

var defaultConfig = {
  path: './',
  extension: ''
};

exports.default = function (keys) {
  var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultConfig;

  var allFiles = _fs2.default.readdirSync(config.path);
  var targetFiles = allFiles.filter(function (f) {
    return f.includes(config.extension);
  });
  var result = targetFiles.reduce(function (res, file) {
    var temp = res;
    keys.forEach(function (key) {
      switch (key) {
        case NAME:
          return Object.assign(res, {
            data: Object.assign({}, res.data, _defineProperty({}, NAME, [].concat(_toConsumableArray((res.data || {})[NAME] || []), [file])))
          });
          break;
        case CONTENT:
          return Object.assign(res, {
            data: Object.assign({}, res.data, _defineProperty({}, CONTENT, [].concat(_toConsumableArray((res.data || {})[CONTENT] || []), [_fs2.default.readFileSync(require.resolve(_path2.default.join(config.path, file)), { encoding: 'utf-8' })])))
          });
          break;
      }
    });
    return temp;
  }, {});

  return result;
};