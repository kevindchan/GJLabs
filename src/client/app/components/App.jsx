var axios = require('axios');
require('promise.prototype.finally');
import React, {Component} from 'react';
import NavBar from './NavBar.jsx';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: [],
      recommendation: []
    }
  }

  componentDidMount() {
    axios.get('/static/beers.json')
    .then((response) => {
      console.log('success!');
      this.setState({beers: response.data});
    })
  }

  submitHandler(e) {
    e.preventDefault();
    var selectedBeers = $("input:checkbox:checked").map(function(){
      return $(this).val();
    }).get();
    axios.post('/api/suggestion', {
      beers: selectedBeers
    })
    .then((response) => {
      console.log(response);
      // browserHistory.push(`/results`); // take user to results page on successful post request
    })
    .catch((error) => {
      console.log(error);
    })
    .finally((res) => {
      console.log('ok')
    })
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