import React, {Component} from 'react';

export default ({beer}) => {
  return (
    <li className="collection-item avatar">
      <img src={beer.labels.medium} alt="" className="circle" />
      <span className="title">{beer.style.name}</span>
      <p style={{color: 'blue'}}>Brewery: {beer.style.name}</p>
      <p className="truncate">{beer.description}</p>
      <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
    </li>
  )
}