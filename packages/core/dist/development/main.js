'use strict';

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var DocumentContext = require('./document-context');

var Main = function Main() {
  return /*#__PURE__*/React__default['default'].createElement(DocumentContext.Consumer, null, function (children) {
    return children;
  });
};

module.exports = Main;
