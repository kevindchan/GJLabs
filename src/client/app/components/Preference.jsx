import React, {Component} from 'react';
import BeerEntry from './BeerEntry.jsx';

export default ({submitHandler, beers}) => {
  return (
    <div className='row'>
    <form onSubmit={submitHandler}>
      {beers.map((beer) => {
        return <BeerEntry key={beer.id} beer={beer} />;
      })}
    <button className="btn waves-effect waves-light" type="submit" name="action">Submit
      <i className="material-icons right">send</i>
    </button>
    <div id="preloader" className="preloader-wrapper small">
      <div className="spinner-layer spinner-green-only">
        <div className="circle-clipper left">
          <div className="circle"></div>
        </div><div className="gap-patch">
          <div className="circle"></div>
        </div><div className="circle-clipper right">
          <div className="circle"></div>
        </div>
      </div> 
    </div>
    </form>
    </div>    
  )
}
