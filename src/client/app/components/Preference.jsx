import React, {Component} from 'react';
import BeerEntry from './BeerEntry.jsx';

export default ({updateBeerLog, preferenceSubmitHandler, beers}) => {
  return (
    <div className='container'>
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
          <div id="preloader" className="preloader-wrapper small">
            <div className="spinner-layer spinner-green-only">
              <div className="circle-clipper left">
                <div className="circle"></div>
              </div>
              <div className="gap-patch">
                <div className="circle"></div>
              </div>
              <div className="circle-clipper right">
                <div className="circle"></div>
              </div>
            </div>
          </div>
        </form>
      </div>    
    </div>
  )
}
