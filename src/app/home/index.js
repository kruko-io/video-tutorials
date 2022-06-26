const express = require('express')

function createHandlers() {
  function home(req, res, next) {
    const viewData = {}

    res.render('home/templates/home', viewData)

    // function
  }

  return {
    home
  }
}

function createHome() {
  const handlers = createHandlers()

  const router = express.Router()
  router.route('/').get(handlers.home)

  return {
    handlers,
    router
  }
}

module.exports = createHome
