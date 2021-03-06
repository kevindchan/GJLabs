var path = require('path');
var controllers = require('./controllers/controllers.js');
var UserController = require('./controllers/UserController.js');
var UsersController = require('./controllers/UsersController.js');

module.exports = function (app, express) {
  // Handles getting all users and creating a single new user 
  // app.get('/', controllers.get);
  app.post('/api/suggestion', controllers.post);

  app.post('/api/user/suggestion', controllers.algorithmPost); 
  app.get('/api/user/suggestion', controllers.algorithmPost);
//   app.post('/users', controllers.__________);


  app.get('/api/users', UsersController.get);
  app.post('/api/users', UsersController.post);

  app.get('/api/users/:id', UserController.get);
  app.post('/api/users/:id', UserController.post);
  app.put('/api/users/:id', UserController.put);

  app.get('/api/users/:id/beerlog', UserController.get);
  app.post('/api/users/:id/beerlog', UserController.post);
  app.put('/api/users/:id/beerlog', UserController.put);


  // Catch all to ensure manually entered urls still render app
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'client', 'index.html'));
  })

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



// // DB ROUTES LIST 

// '/user' 
// // get: Gets all users (db)
// // post: Creates a new user (db)

// '/user/:id'
// // get: Gets one user model (db)
// // post: TBD (???)

// '/user/:id/profile'
// // get: Gets users specific taste profile (past beer history) (db)
// // post: Creates/changes a users taste profile (db)

// '/user/:id/suggestion'
// // get: Gets all suggestions following a request to db/algorithm (db)
// // post: Creates a new user (db)

// '/user/:id/suggestion/:suggestionCategory'
// // -> Categories: new, similar, stay away, default 
// // get: Gets all users (db)
// // post: Creates a new user (db)

'api/suggestion'

/*
1. POST request - 'api/suggestion'
// -> we respond with our suggestions, front=end renders 

2/3. POST request - creating user profile and taste profile
     GET request - On profile component page mount, request the users taste profile from our db
*/
