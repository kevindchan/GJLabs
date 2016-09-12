import React, {Component} from 'react';
import BeerEntry from './BeerEntry.jsx';
import Preloader from './Preloader.jsx';

export default ({updateBeerLog, preferenceSubmitHandler, beers}) => {
  return (
    <div className='row'>
      <div>
        <ul className="collection with-header">
          <li className="collection-header" style={{backgroundColor: "#578fb4", color: "white"}}>
            <h5 className="center">Choose Your Prefered Beers</h5>
          </li>
        </ul>
      </div>
      <form onSubmit={preferenceSubmitHandler}>
        {beers.map((beer) => {
        return <BeerEntry key={beer.id} beer={beer} updateBeerLog={updateBeerLog} />;
        })}
        <button className="btn waves-effect waves-light" type="submit" name="action">Submit
          <i className="material-icons right">send</i>
        </button>
        <Preloader />
      </form>
    </div>    
  )
}
