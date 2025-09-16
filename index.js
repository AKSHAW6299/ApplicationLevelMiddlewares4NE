import express from 'express'
const app = express()
const port = 3000

// A) APPLICATION LAVEL MIDDLEWARE [app.use]
// 1) In built middleware
// Loading middleware [express.json()] into our app
app.use(express.json())


// B) Creating 3 custom middlewares [Application lavel]
// 1)
const loggingMiddleware = function(req, res, next) {
  console.log('loging krra hu...');
  next()    // next(), donates the next middleware
}
// 2)
const authMiddleware = function(req, res, next) {
  console.log('auth krra hu....');
  next()
}
// Middlewares can directly end the request-response cycle!
// const authMiddleware = function(req, res, next) {
//      res.send('Hello World!')
// //   next()
// }
// 3)
const validationMiddleware = function(req, res, next) {
  console.log('validation krra hu...');
  next()
}
// Loading the created middleware to our application
// Here order matters.
app.use(loggingMiddleware)  // This middleware will runs first
app.use(authMiddleware)   // This middleware will runs second
app.use(validationMiddleware)   // This middleware will runs third


// This is route handler => [We should always write middlewares above any route handler]
// Router middleware runs when all middlewares completed running
app.get('/', (req, res) => {
  console.log(req.body);    // Now we can get any desired data from [req.body] from postman!
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
