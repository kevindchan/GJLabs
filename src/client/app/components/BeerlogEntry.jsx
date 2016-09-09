import React, {Component} from 'react';

export default ({beer}) => {
  return (
    <li className="collection-item avatar">
      <img src={beer.labels.medium} alt="" className="circle" />
      <span className="title">{beer.style.name}</span>
      <form className="right" action="#">
        <p>
          <input type="checkbox" id={beer.id} />
          <label htmlFor={beer.id}>Like</label>
        </p>
      </form>
      <p><span className="blue-text">Brewery:</span> {beer.style.name}</p>
      <p><span className="blue-text">Description: </span>{beer.description}</p>
    </li>
  )
}