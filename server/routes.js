var controllers = require('./controllers/controllers.js')

module.exports = function (app, express) {
  // Handles getting all users and creating a single new user 
  app.get('/', controllers.get);
//   app.post('/users', controllers.__________);


// ////////////// OLD EXAMPLES ////////////////////////////////
//   app.post('/api/users/signin', userController.signin);
//   app.post('/api/users/signup', userController.signup);
//   app.get('/api/users/signedin', userController.checkAuth);

//   // authentication middleware used to decode token and made available on the request
//   // app.use('/api/links', helpers.decode);
//   app.get('/api/links/', linksController.allLinks);
//   app.post('/api/links/', linksController.newLink);

//   // If a request is sent somewhere other than the routes above,
//   // send it through our custom error handler
//   app.use(helpers.errorLogger);
//   app.use(helpers.errorHandler);
};



// ROUTES LIST 

'/user' 
// get: Gets all users (db)
// post: Creates a new user (db)

'/user/:id'
// get: Gets one user model (db)
// post: TBD (???)

'/user/:id/profile'
// get: Gets users specific taste profile (past beer history) (db)
// post: Creates/changes a users taste profile (db)

'/user/:id/suggestion'
// get: Gets all suggestions following a request to db/algorithm (db)
// post: Creates a new user (db)

'/user/:id/suggestion/:suggestionCategory'
// -> Categories: new, similar, stay away, default 
// get: Gets all users (db)
// post: Creates a new user (db)



