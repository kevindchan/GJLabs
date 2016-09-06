import React, {Component} from 'react';
import BeerEntry from './BeerEntry.jsx';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: [1,2,3,4,5,6,7,8,9]
    }
  }
  render() {
    return (
      <div className='row'>
        {this.state.beers.map((beer) => {
          return <BeerEntry key={beer} beer={beer} />;
        })}
      </div>
    )
  }
}