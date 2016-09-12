import React, {Component} from 'react';
import BeerlogEntry from './BeerlogEntry.jsx';
import Preloader from './Preloader.jsx';

export default ({beerlog, moreBeersClickHandler, unlikeHandler}) => {
  return (
		<div className="row">
		  <div>
		    <ul className="collection with-header">
		      <li className="collection-header" style={{backgroundColor: "#578fb4", color: "white"}}>
		        <h5 className="center">Beerlog</h5>
		      </li>
		    </ul>
		    <ul className="collapsible popout" data-collapsible="accordion">
		    {beerlog.map((beer) => {
		      return <BeerlogEntry key={beer.beerId} beer={beer} unlikeHandler={unlikeHandler} />
		    })}
		    </ul>
		  </div>
		  <form className="left" onSubmit={moreBeersClickHandler}>
		    <button className="btn waves-effect waves-light" type="submit" name="action">More Beer Please!</button>
		  </form>
		  <Preloader />
		</div>
  )
}