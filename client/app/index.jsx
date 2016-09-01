import React, {Component} from 'react';
import {render} from 'react-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: 'bar'
    };
  }
  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper">
            <a href="#" className="brand-logo">Bru</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><a href="#">One</a></li>
              <li><a href="#">Two</a></li>
              <li><a href="#">Three</a></li>
            </ul>
          </div>
        </nav>
        <div className='container'>
          <div className='row'>
            <div className="col s4"><img src="http://placehold.it/150x150" /></div>
            <div className="col s4"><img src="http://placehold.it/150x150" /></div>
            <div className="col s4"><img src="http://placehold.it/150x150" /></div>
            <div className="col s4"><img src="http://placehold.it/150x150" /></div>
            <div className="col s4"><img src="http://placehold.it/150x150" /></div>
            <div className="col s4"><img src="http://placehold.it/150x150" /></div>
            <div className="col s4"><img src="http://placehold.it/150x150" /></div>
            <div className="col s4"><img src="http://placehold.it/150x150" /></div>
            <div className="col s4"><img src="http://placehold.it/150x150" /></div>
          </div>
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));