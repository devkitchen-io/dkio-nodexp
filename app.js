/*
   ____         __        __
  /  _/__  ____/ /_ _____/ /__ ___
 _/ // _ \/ __/ / // / _  / -_|_-<
/___/_//_/\__/_/\_,_/\_,_/\__/___/

*/
const createError = require('http-errors')
const express = require('express')
const session = require('express-session')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const expressLayouts = require('express-ejs-layouts')
const compression = require('compression')
/////////// Custom modules
const router = require('./app/router')
const flash = require('./app/helpers/flash')
const seo = require('./app/helpers/seo')

//const uploader = require('./app/helpers/uploader')

// До лучших времён
//global._ = require('./config/paths')
//console.log(_.controllers)

/*
   ___               _      _ __
  / _ | ___  ___    (_)__  (_) /_
 / __ |/ _ \/ _ \  / / _ \/ / __/
/_/ |_/ .__/ .__/ /_/_//_/_/\__/
     /_/  /_/

*/
const app = express()
app.use(compression())
app.use(seo)

/////////// EJS View Engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

/////////// EJS Layouts
app.use(expressLayouts)
app.set('layout', 'layouts/main')
app.set("layout extractScripts", true)
app.set("layout extractStyles", true)

/////////// Assets
app.use(express.static(path.join(__dirname, 'public')))

/////////// Mongoose
app.set('mongoose', require('mongoose'))

/////////// Cookies
app.use(cookieParser())

/////////// Sessions
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(session({secret: 'secret12345',saveUninitialized: true,resave: true}))
/////////// Flash message helper
app.use(flash())

/////////// Logger
app.use(logger('dev'))

/////////// DB Connection
require('./config/db').connect()
app.set('config',require('./config/base'))
/////////// Router
router(app)



/*
   ____                   __                ____
  / __/__________  ____  / /  ___ ____  ___/ / /__ _______
 / _// __/ __/ _ \/ __/ / _ \/ _ `/ _ \/ _  / / -_) __(_-<
/___/_/ /_/  \___/_/   /_//_/\_,_/_//_/\_,_/_/\__/_/ /___/

*/

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404))
})

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
