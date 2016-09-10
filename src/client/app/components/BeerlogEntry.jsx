import React, {Component} from 'react';

export default ({beer}) => {
  return (
    <li>
      <div className="collapsible-header">
        <img src={beer.iconUrl} alt="" className="circle" />
        <span className="title">{beer.beerName}</span>
        <form className="right" action="#">
          <p>
            <input type="checkbox" id={beer.beerId} />
            <label htmlFor={beer.beerId}>Like</label>
          </p>
        </form>
      </div>
      <div className="collapsible-body">
        <p><span className="blue-text">Description: </span>{beer.description}</p>
      </div>
    </li>
  )
}