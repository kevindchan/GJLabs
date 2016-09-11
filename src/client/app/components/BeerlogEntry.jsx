var axios = require('axios');
import React, {Component} from 'react';

export default ({beer, unlikeHandler}) => {
  return (
    <li>
      <div className="collapsible-header">
        <img style={{maxWidth: '64px', maxHeight: '64px'}} src={beer.iconUrl} alt="" className="circle" />
        <span className="title">{beer.beerName}</span>
        <form className="right" action="#">
          <p>
            <input onChange={unlikeHandler} type="checkbox" id={beer.beerId} defaultChecked/>
            <label htmlFor={beer.beerId}>Remove</label>
          </p>
        </form>
      </div>
      <div className="collapsible-body">
        <p><span className="blue-text">Description: </span>{beer.description}</p>
      </div>
    </li>
  )
}