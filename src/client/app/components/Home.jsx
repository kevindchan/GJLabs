import React, {Component} from 'react';
import BeerEntry from './BeerEntry.jsx';

export default ({submitHandler, beers}) => {
  return (
    <div className='row'>
    <form onSubmit={submitHandler}>
      {beers.map((beer) => {
        return <BeerEntry key={beer} beer={beer} />;
      })}
     <button className="btn waves-effect waves-light" type="submit" name="action">Submit
       <i className="material-icons right">send</i>
     </button>
    </form>
    </div>    
  )
}
