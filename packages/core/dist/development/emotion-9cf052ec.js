'use strict';

var register = require('./register-939ee7cc.js');
require('path');
require('fs-extra');
var React = require('react');
require('slash');
require('lz-string');
require('urlsafe-base64');
require('fs');
require('recursive-readdir');
var helpers = require('./helpers-b636836d.js');
require('stream');
var cheerio = require('cheerio');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var cheerio__default = /*#__PURE__*/_interopDefaultLegacy(cheerio);

var Head = require('./head');

var _require = require('@emotion/core'),
    CacheProvider = _require.CacheProvider;

var emotionCache = require('@emotion/cache');

var emotionServer = require('create-emotion-server');

var createCache = emotionCache["default"] || emotionCache;
var createEmotionServer = emotionServer["default"] || emotionServer;
var cache = createCache();

var _createEmotionServer = createEmotionServer(cache),
    extractCritical = _createEmotionServer.extractCritical;

var emotion = (function (app, pageId, props) {
  var _context, _context2, _context3, _context4, _context5, _context6, _context7, _context8, _context9, _context10, _context11;

  var _extractCritical = extractCritical(helpers.server.renderToString( /*#__PURE__*/React__default['default'].createElement(CacheProvider, {
    value: cache
  }, app))),
      html = _extractCritical.html,
      css = _extractCritical.css,
      ids = _extractCritical.ids;

  var $ = cheerio__default['default'].load(html);
  var scriptTags = $.html($('body script'));
  var bodyWithoutScriptTags = ($('body').html() || '').replace(scriptTags, '');
  return register.concat(_context = register.concat(_context2 = register.concat(_context3 = register.concat(_context4 = register.concat(_context5 = register.concat(_context6 = register.concat(_context7 = register.concat(_context8 = register.concat(_context9 = register.concat(_context10 = register.concat(_context11 = "<!DOCTYPE html><html".concat(helpers.convertAttrToString($('html').attr()), "><head>")).call(_context11, helpers.getHeadHtml(Head.rewind()), "<link rel=\"preload\" href=\"/_react-ssr/")).call(_context10, pageId, ".js\" as=\"script\"><link rel=\"preload\" href=\"/_react-ssr/")).call(_context9, pageId, ".css\" as=\"style\"><link rel=\"stylesheet\" href=\"/_react-ssr/")).call(_context8, pageId, ".css\"><style data-emotion-css=\"")).call(_context7, ids.join(' '), "\">")).call(_context6, css, "</style></head><body")).call(_context5, helpers.convertAttrToString($('body').attr()), "><div id=\"react-ssr-root\">")).call(_context4, bodyWithoutScriptTags, "</div><script id=\"react-ssr-script\" src=\"/_react-ssr/")).call(_context3, pageId, ".js\" data-props=\"")).call(_context2, props, "\" defer></script>")).call(_context, scriptTags, "</body></html>");
});

exports.default = emotion;
