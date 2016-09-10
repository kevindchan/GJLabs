import React, {Component} from 'react';
import BeerlogEntry from './BeerlogEntry.jsx';

export default ({beerlog}) => {
  return (
    <ul className="collection with-header">
      <li className="collection-header" style={{backgroundColor: "#578fb4", color: "white"}}><h5 className="center">Beerlog</h5></li>
      {beerlog.map((beer) => {
        return <BeerlogEntry key={beer.beerId} beer={beer} />
      })}
    </ul>    
  )
}