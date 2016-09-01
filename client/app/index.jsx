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
      <div><p>Hello world!!!</p></div>
    );
  }
}

render(<App />, document.getElementById('app'));