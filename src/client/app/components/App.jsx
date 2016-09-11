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
    .catch((err) => {
      console.log('Error loading beer data:', err);
    })
  }

  updateBeerLog() {
    const userId = localStorage.userId;
    axios.get('/api/users/' + userId + '/beers')
    .then((beerlog) => {
      this.setState({
        beerlog: beerlog.data.results
      })
    })
  }

  moreBeersClickHandler(e) {
    e.preventDefault();
    const userId = localStorage.userId;
    axios.get('/api/user/moreSuggestions/' + userId)
    .then((response) => {
      this.setState({beers: response});
      browserHistory.push(`/results`);
    })
    .catch((err) => {
      console.log('error in getting more suggestions: ', err);
    });
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
        updateBeerLog: this.updateBeerLog.bind(this),
        moreBeersClickHandler: this.moreBeersClickHandler.bind(this)
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