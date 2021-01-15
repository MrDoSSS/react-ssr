'use strict';

var register = require('./register-939ee7cc.js');
var path = require('path');
var fse = require('fs-extra');
var slash = require('slash');
var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
var OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
var TerserPlugin = require('terser-webpack-plugin');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var path__default = /*#__PURE__*/_interopDefaultLegacy(path);
var fse__default = /*#__PURE__*/_interopDefaultLegacy(fse);
var slash__default = /*#__PURE__*/_interopDefaultLegacy(slash);
var webpack__default = /*#__PURE__*/_interopDefaultLegacy(webpack);
var MiniCssExtractPlugin__default = /*#__PURE__*/_interopDefaultLegacy(MiniCssExtractPlugin);
var OptimizeCSSAssetsPlugin__default = /*#__PURE__*/_interopDefaultLegacy(OptimizeCSSAssetsPlugin);
var TerserPlugin__default = /*#__PURE__*/_interopDefaultLegacy(TerserPlugin);

var promise = register.promise;

var promise$1 = promise;

var getIterator = function (it) {
  var iteratorMethod = register.getIteratorMethod(it);
  if (typeof iteratorMethod != 'function') {
    throw TypeError(String(it) + ' is not iterable');
  } return register.anObject(iteratorMethod.call(it));
};

var getIterator_1 = getIterator;

var getIterator$1 = getIterator_1;

function _iterableToArrayLimit(arr, i) {
  if (typeof register.symbol === "undefined" || !register.isIterable(Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = getIterator$1(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

var iterableToArrayLimit = _iterableToArrayLimit;

function _slicedToArray(arr, i) {
  return register.arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || register.unsupportedIterableToArray(arr, i) || register.nonIterableRest();
}

var slicedToArray = _slicedToArray;

var cwd = process.cwd();

var getBabelrc = function getBabelrc() {
  if (register.existsSync(path__default['default'].join(cwd, '.babelrc'))) return path__default['default'].join(cwd, '.babelrc');
  if (register.existsSync(path__default['default'].join(cwd, '.babelrc.js'))) return path__default['default'].join(cwd, '.babelrc.js');
  if (register.existsSync(path__default['default'].join(cwd, 'babel.config.js'))) return path__default['default'].join(cwd, 'babel.config.js');
  return path__default['default'].join(__dirname, '../../lib/babel.js');
};

var prodConfig = {
  performance: {
    hints: 'warning'
  },
  output: {
    pathinfo: false
  },
  optimization: {
    nodeEnv: 'production',
    namedModules: false,
    namedChunks: false,
    flagIncludedChunks: true,
    occurrenceOrder: true,
    sideEffects: true,
    usedExports: true,
    concatenateModules: false,
    splitChunks: {
      minSize: 30000,
      maxAsyncRequests: 5,
      maxInitialRequests: 3
    },
    minimize: true,
    minimizer: [new OptimizeCSSAssetsPlugin__default['default'](), new TerserPlugin__default['default']()]
  },
  plugins: [new webpack__default['default'].DefinePlugin({
    'process.env.NODE_ENV': register.stringify('production')
  })]
};
var configureWebpack = function configureWebpack(entry) {
  var config = {
    mode: 'development',
    devtool: register.isProd() ? false : 'eval-source-map',
    entry: entry,
    output: {
      path: path__default['default'].join(cwd, register.ssrConfig.distDir),
      filename: '[name].js'
    },
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx']
    },
    module: {
      rules: [{
        test: /\.(js|ts)x?$/i,
        exclude: /node_modules/,
        use: {
          loader: require.resolve('babel-loader'),
          options: {
            cacheDirectory: true,
            "extends": getBabelrc()
          }
        }
      }, {
        test: /\.css$/i,
        use: [{
          loader: MiniCssExtractPlugin__default['default'].loader,
          options: {
            publicPath: path__default['default'].join(cwd, register.ssrConfig.distDir),
            hmr: !register.isProd(),
            reloadAll: true
          }
        }, {
          loader: require.resolve('css-loader')
        }]
      }, {
        test: /\.scss$/i,
        use: [{
          loader: MiniCssExtractPlugin__default['default'].loader,
          options: {
            publicPath: path__default['default'].join(cwd, register.ssrConfig.distDir),
            hmr: !register.isProd(),
            reloadAll: true
          }
        }, {
          loader: require.resolve('css-loader')
        }, {
          loader: require.resolve('sass-loader'),
          options: {
            sourceMap: !register.isProd()
          }
        }]
      }]
    },
    plugins: [new MiniCssExtractPlugin__default['default']({
      filename: '[name].css',
      chunkFilename: '[id].css',
      ignoreOrder: true
    })]
  };

  if (register.isProd()) {
    config = webpackMerge.smart(config, prodConfig);
  }

  if (register.ssrConfig.webpack) {
    if (typeof register.ssrConfig.webpack === 'function') {
      config = register.ssrConfig.webpack(config, register.isProd() ? 'production' : 'development');
    } else {
      console.warn('[ warn ] ssr.config.js#webpack must be a function');
    }
  }

  return config;
};

var cwd$1 = process.cwd();
var ext = '.' + register.getEngine();
var getEntry = /*#__PURE__*/function () {
  var _ref = register.asyncToGenerator( /*#__PURE__*/register.regenerator.mark(function _callee(memfs) {
    var entry, entryPages, entryPath, template, appPath, i, _context, _context2, _context3, page, pageId, dir, name;

    return register.regenerator.wrap(function _callee$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            entry = {};
            _context4.next = 3;
            return register.getPages();

          case 3:
            entryPages = _context4.sent;
            entryPath = path__default['default'].resolve(__dirname, "../../lib/webpack/".concat(register.ssrConfig.id, ".js"));
            template = fse__default['default'].readFileSync(entryPath).toString();
            appPath = path__default['default'].join(__dirname, 'app.js');

            if (fse__default['default'].existsSync(path__default['default'].join(cwd$1, register.ssrConfig.viewsDir, "_app".concat(ext)))) {
              appPath = path__default['default'].join(cwd$1, register.ssrConfig.viewsDir, "_app".concat(ext));
            }

            memfs.mkdirpSync(path__default['default'].join(cwd$1, 'react-ssr-src'));

            for (i = 0; i < entryPages.length; i++) {
              page = entryPages[i];
              pageId = register.getPageId(page, '/');
              dir = path__default['default'].dirname(pageId);
              name = path__default['default'].basename(pageId);

              if (dir !== '.') {
                memfs.mkdirpSync(path__default['default'].join(cwd$1, 'react-ssr-src', dir));
              }

              memfs.writeFileSync(path__default['default'].join(cwd$1, 'react-ssr-src', dir, register.concat(_context = "entry-".concat(name)).call(_context, ext)), template.replace('__REACT_SSR_APP__', slash__default['default'](appPath)).replace('__REACT_SSR_PAGE__', slash__default['default'](page)));
              entry[register.getPageId(page, '_')] = register.concat(_context2 = register.concat(_context3 = "./react-ssr-src/".concat(slash__default['default'](dir), "/entry-")).call(_context3, name)).call(_context2, ext);
            }

            return _context4.abrupt("return", [entry, entryPages]);

          case 11:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee);
  }));

  return function getEntry(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.configureWebpack = configureWebpack;
exports.getEntry = getEntry;
exports.promise = promise$1;
exports.slicedToArray = slicedToArray;
