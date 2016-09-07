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
    console.log('submited:', e.target);
    $.ajax({
      url: '/api/suggestion',
      type: 'POST',
      dataType: 'json'
    })
    .done((res) => {
      console.log('success', res);
    })
    .fail((err) => {
      console.log('error:', err);
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