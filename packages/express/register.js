const register = async app => {
  await require('react-ssr/packages/core/src/register')(app)
}

module.exports = register
module.exports.default = register
