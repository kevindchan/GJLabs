var axios = require('axios');

import React, {Component} from 'react';
import NavBar from './NavBar.jsx';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: [1,2,3,4,5,6,7,8,9],
      recommendation: []
    }
  }
  submitHandler(e) {
    e.preventDefault();
    var selectedBeers = $("input:checkbox:checked").map(function(){
      return $(this).val();
    }).get();
    axios.post('/api/suggestion', {
      beers: selectedBeers
    })
    .then(function (response) {
      console.log(response);
      // browserHistory.push(`/results`); // take user to results page on successful post request
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  render() {
    const children = React.Children.map(this.props.children, function (child) {
      return React.cloneElement(child, {
        beers: this.state.beers,
        recommendation: this.state.recommendation,
        submitHandler: this.submitHandler
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