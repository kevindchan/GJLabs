import React, {Component} from 'react';
import BeerEntry from './BeerEntry.jsx';

export default ({submitHandler, beers}) => {
  return (
    <div className='row'>
    <form onSubmit={submitHandler}>
      {beers.map((beer) => {
        return <BeerEntry key={beer} beer={beer} />;
      })}
      <input type='submit' value='Submit' />
    </form>
    </div>    
  )
}
