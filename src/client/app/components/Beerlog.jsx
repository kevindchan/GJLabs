import React, {Component} from 'react';
import BeerlogEntry from './BeerlogEntry.jsx';

export default ({beers}) => {
  return (
    <ul className="collection">
      {beers.map((beer) => {
        return <BeerlogEntry key={beer.id} beer={beer} />
      })}
    </ul>    
  )
}