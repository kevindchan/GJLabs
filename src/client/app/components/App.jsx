var axios = require('axios');
import React, {Component} from 'react';
import { browserHistory } from 'react-router';
import NavBar from './NavBar.jsx';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: [],
      recommendation: [],
      beerlog: [],
      userId: ''
    }
  }

  componentDidMount() {
    this.updateBeerLog();
    axios.get('/static/beers.json')
    .then((response) => {
      this.setState({beers: response.data});
    })
  }

  updateBeerLog() {
    const userId = localStorage.userId;
    axios.get('/api/users/' + userId + '/beers')
    .then((beerlog) => {
      this.setState({
        beerlog: beerlog.data.results
      })
      console.log(this.state)
    })
  }

  likeHandler(e) {
    const userId = localStorage.userId;
    const liked = e.target;
    const styleFamily = JSON.stringify($(liked).data('style-family'));
    const beer = {
      beerId: $(liked).val(),
      iconUrl: $(liked).data('icon-url'),
      breweryName: $(liked).data('brewery-name'),
      beerName: $(liked).data('beer-name'),
      styleFamily: styleFamily,
      styleFamilyId: $(liked).data('style-family-id'),
      styleId: $(liked).data('style-id'),
      abv: $(liked).data('abv'),
      ibu: $(liked).data('ibu'),
      srm: $(liked).data('srm')
    }
    axios.post('/api/users/' + userId + '/beers', beer)
    .then((response) => {
      this.updateBeerLog();
    })
    .catch((err) => {
      console.log('Error posting like.')
    })
  }

  submitHandler(e) {
    e.preventDefault();
    $("#preloader").addClass('active');
    var selectedBeers = $("input:checkbox:checked").map(function(){
      return $(this).val();
    }).get();
    axios.post('/api/suggestion', {
      beers: selectedBeers
    })
    .then((response) => {
      this.setState({recommendation: response.data})
      browserHistory.push(`/results`); // take user to results page on successful post request
    })
    .catch((error) => {
      console.log(error);
    })
  }

  submitHandlerStart(e) {
    var data = function(formId) {
      return $('#' + formId).serializeArray().reduce(function(obj, item) {
          obj[item.name] = item.value;
          return obj;
      }, {});
    }
    var route = e.target.action.split('/');
    e.preventDefault();
    $("#preloader").addClass('active');
    axios.post(route[route.length - 1], data(e.target.id))
    .then((response) => { 
      const userId = response.data.results;
      localStorage.token = 'authorized';
      localStorage.userId = userId; // hacky solution. encountered problem storing userId in state.
      this.setState({userId: userId}); 
      browserHistory.push(`/`); // take user to 'dashboard' (aka '/') page on successful post request
    })
    .catch((error) => {
      console.log(error);
    })
  }

  logoutHandler() {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    browserHistory.push(`/start`);
  }

  render() {
    const children = React.Children.map(this.props.children, function (child) {
      return React.cloneElement(child, {
        userId: this.state.userId,
        beers: this.state.beers,
        beer: this.state.recommendation,
        beerlog: this.state.beerlog,
        submitHandler: this.submitHandler.bind(this),
        submitHandlerStart: this.submitHandlerStart.bind(this),
        likeHandler: this.likeHandler.bind(this)
      })
    }.bind(this))
    return (
      <div>
        <NavBar logoutHandler={this.logoutHandler.bind(this)} />
        <div className='container'>
          { children }
        </div>
      </div>
    )
  }
}