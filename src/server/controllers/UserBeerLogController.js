module.exports = {
  get: (req, res) => {
    res.json('beerlog controller get request')
  },
  post: (req, res) => {
    res.json('beerlog controller post request')
  },
  put: (req, res) => {
    res.json('beerlog controller put request')
  },
  delete: (req, res) => {
    res.json('beerlog controller delete request')
  }
}