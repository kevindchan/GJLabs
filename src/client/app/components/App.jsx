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
      userId: ''
    }
  }

  componentDidMount() {
    axios.get('/static/beers.json')
    .then((response) => {
      this.setState({beers: response.data});
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
    axios.post('/api/' + route[route.length - 1], data(e.target.id))
    .then((response) => { 
      console.log(response.data.results.id);
      this.setState({userId: response.data.results.id}); 
      browserHistory.push(`/`); // take user to 'dashboard' (aka '/') page on successful post request
    })
    .catch((error) => {
      console.log(error);
    })
  }

  render() {
    const children = React.Children.map(this.props.children, function (child) {
      return React.cloneElement(child, {
        beers: this.state.beers,
        recommendation: this.state.recommendation,
        submitHandler: this.submitHandler.bind(this),
        submitHandlerStart: this.submitHandlerStart.bind(this)
      })
    }.bind(this))
    return (
      <div>
        <NavBar />
        <div className='container'>
          { children }
        </div>
      </div>
    )
  }
}