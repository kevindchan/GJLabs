import React, {Component} from 'react';
import BeerlogEntry from './BeerlogEntry.jsx';

export default ({likeHandler, beers}) => {
  return (
    <ul className="collection with-header">
      <li className="collection-header" style={{backgroundColor: "#578fb4", color: "white"}}><h5 className="center">Beerlog</h5></li>
      {beers.map((beer) => {
        return <BeerlogEntry key={beer.id} beer={beer} likeHandler={likeHandler} />
      })}
    </ul>    
  )
}