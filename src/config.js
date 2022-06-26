const createHomeApp = require('./app/home')

function createConfig({ env }) {
  const homeApp = createHomeApp()

  return {
    env,
    homeApp
  }
}

module.exports = createConfig
