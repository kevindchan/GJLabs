var User = require('../models/models.js').User;
var Beer = require('../models/models.js').Beer;
var BeerLog = require('../models/models.js').BeerLog;

module.exports = {
  get: (req, res) => {
    const data = req.body;
    const userId = req.params.userId;
    User.findById(userId)
    .then((user) => {
      user.getBeers()
      .then((beers) => {
        res.json({results: beers, message: 'Fetched resource.'})
      })
      .catch((err) => {
        res.json({results: err, message: 'Error fetching resource.'})
      })
    })
    .catch((err) => {
      res.json({results: err, message: 'Error fetching resouce.'})
    })
  },
  post: (req, res) => {
    const data = req.body;
    const userId = req.params.userId;
    Beer.findOne({
      where: {
        beerId: data.beerId
      }
    })
    .then((beer) => {
      if (!beer) {
        return Beer.create({
          beerId: data.beerId,
          ibu: data.ibu,
          srm: data.srm,
          abv: data.abv
        })
        .then((beer) => {
          return beer;
        })
      } else {
        return beer;
      }
    })
    .then((beer) => {
      User.findById(userId)
      .then((user) => {
        user.addBeers(beer, 
        	{
            liked: 1,
        		// liked: data.liked, // extend functionality to unlike beers
        		rating: data.rating
        	}
        )
        return beer;
      })
      .then((beer) => {
        res.json({results: beer, message: 'Resource created.'});
      })
      .catch((err) => {
        res.json({results: err, message: 'Error creating resource'});
      })
    })
    .catch((err) => {
      res.json({results: err, message: 'Resource not created'})
    })
  },
  put: (req, res) => {
    const data = req.body;
    const userId = req.params.userId;
    User.findById(userId)
    .then((user) => {
      return user.getBeers({
        where: {
          beerId: data.beerId
        }
      })
      .then((beer) => {
        if (!beer.length) {
          return res.json({results: null, message: 'Beer not found in beer log.'})
        } else {
          const beerLogId = beer[0].dataValues.beerlog.id;
          BeerLog.update({
            liked: data.liked,
            rating: data.rating
          }, {
            where: {
              id: beerLogId
            }
          })
          .then((beer) => {
            return beer;
          })
          return res.json({results: beer, message: 'Beer updated in beer log.'})
        }
      })
    })
    .catch((err) => {
      res.json({results: err, message: 'Error retrieving resource.'})
    })
  },
  delete: (req, res) => {
  	const beerId = req.params.beerId;
  	const userId = req.params.userId;
  	User.findById(userId)
  	.then((user) => {
  		return user.getBeers({
        where: {
          beerId: beerId
        }
      })
  		.then((beer) => {
        if (!beer.length) {
          return res.json({results: null, message: 'Beer not found in beer log.'})
        } else {
          const beerLogId = beer[0].dataValues.beerlog.id;
          BeerLog.destroy({
            where: {
              id: beerLogId
            }
          })
          .then((beer) => {
            return beer;
          })
          return res.json({results: beer, message: 'Beer removed from beer log.'})
        }
  		})
  	})
    .catch((err) => {
      res.json({results: err, message: 'Error retrieving resource.'})
    })
  }
}