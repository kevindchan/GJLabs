import React, {Component} from 'react';

export default ({likeHandler, beer}) => {
  return (
    <li className="collection-item avatar">
      <img src={beer.iconUrl} alt="" className="circle" />
      <span className="title">{beer.beerName}</span>
      <form className="right" action="#">
        <p>
          <input type="checkbox" id={beer.beerId} />
          <label htmlFor={beer.beerId}>Like</label>
        </p>
      </form>
      <p><span className="blue-text">Brewery:</span> {beer.breweryName}</p>
      <p><span className="blue-text">Description: </span>Beer description...</p>
    </li>
  )
}