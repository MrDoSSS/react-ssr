'use strict';

var register = require('./register-939ee7cc.js');
var path = require('path');
var fse = require('fs-extra');
require('react');
require('slash');
require('lz-string');
require('urlsafe-base64');
var fs = require('fs');
require('recursive-readdir');
var helpers = require('./helpers-913307b0.js');
var MemoryFileSystem = require('memory-fs');
var webpack = require('webpack');
require('webpack-merge');
require('mini-css-extract-plugin');
require('optimize-css-assets-webpack-plugin');
require('terser-webpack-plugin');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var path__default = /*#__PURE__*/_interopDefaultLegacy(path);
var fse__default = /*#__PURE__*/_interopDefaultLegacy(fse);
var fs__default = /*#__PURE__*/_interopDefaultLegacy(fs);
var MemoryFileSystem__default = /*#__PURE__*/_interopDefaultLegacy(MemoryFileSystem);
var webpack__default = /*#__PURE__*/_interopDefaultLegacy(webpack);

var cwd = process.cwd();

var ufs = require('unionfs').ufs;

var memfs = new MemoryFileSystem__default['default']();
ufs.use(fs__default['default']).use(memfs);
var production = /*#__PURE__*/(function () {
  var _ref = register.asyncToGenerator( /*#__PURE__*/register.regenerator.mark(function _callee(app) {
    var _yield$getEntry, _yield$getEntry2, entry, entryPages, webpackConfig, compiler;

    return register.regenerator.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            fse__default['default'].removeSync(path__default['default'].join(cwd, register.ssrConfig.distDir));
            _context.next = 3;
            return helpers.getEntry(memfs);

          case 3:
            _yield$getEntry = _context.sent;
            _yield$getEntry2 = helpers.slicedToArray(_yield$getEntry, 2);
            entry = _yield$getEntry2[0];
            entryPages = _yield$getEntry2[1];
            webpackConfig = helpers.configureWebpack(entry);
            compiler = webpack__default['default'](webpackConfig);
            compiler.inputFileSystem = ufs;
            _context.next = 12;
            return new helpers.promise(function (resolve, reject) {
              compiler.run(function (err, stats) {
                err && reject(err.stack || err);
                stats.hasErrors() && reject(stats.toString());

                var _loop = function _loop(i) {
                  var page = entryPages[i];
                  var pageId = register.getPageId(page, '_');
                  app.use("/_react-ssr/".concat(pageId, ".css"), function (req, res) {
                    var filename = path__default['default'].join(cwd, register.ssrConfig.distDir, "".concat(pageId, ".css"));
                    var style = register.existsSync(filename) ? fs__default['default'].readFileSync(filename).toString() : '';
                    res.writeHead(200, {
                      'Content-Type': 'text/css'
                    });
                    res.end(style, 'utf-8');
                  });
                  app.use("/_react-ssr/".concat(pageId, ".js"), function (req, res) {
                    var filename = path__default['default'].join(cwd, register.ssrConfig.distDir, "".concat(pageId, ".js"));
                    var script = fs__default['default'].readFileSync(filename).toString();
                    res.status(200).type('.js').send(script);
                  });
                };

                for (var i = 0; i < entryPages.length; i++) {
                  _loop(i);
                }

                resolve();
              });
            });

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
})();

exports.default = production;
