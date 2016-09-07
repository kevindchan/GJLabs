import React, {Component} from 'react';

export default ({beer}) => {
  return (
    <div className="col s4">
      <div className="card small">
        <div className="card-image">
          <img className='responsive-img activator' src={beer.labels.medium} />
          <span className="card-title activator">{beer.name}</span>
        </div>
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">{beer.style.name}<i className="material-icons right">more_vert</i></span>
          <p className='center-align'>
            <input type="checkbox" className="filled-in" id={beer.id} value={beer.id} />
            <label htmlFor={beer.id}></label>
          </p>
        </div>
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4">{beer.name}<i className="material-icons right">close</i></span>
          <p>{beer.description}</p>
        </div>
      </div>
    </div>
  );
}