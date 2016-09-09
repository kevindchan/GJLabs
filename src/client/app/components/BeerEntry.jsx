import React, {Component} from 'react';

export default ({beer}) => {
  return (
    <div className="col s4">
      <div className="card small">
        <div className="card-image">
          <img className='responsive-img activator' src={beer.labels.medium} />
        </div>
        <div className="card-content activator valign-wrapper">
          <span className="card-title activator grey-text text-darken-4" style={{fontSize: '18px', lineHeight: '100%'}}>{beer.style.name}</span><i className="material-icons right">more_vert</i>
          <p className='center-align valign'>
            <input 
              type="checkbox" 
              className="filled-in right" 
              id={beer.id} 
              value={beer.id}
              data-icon-url={beer.labels.icon} 
              data-brewery-name={beer}
              data-beer-name={beer.name}
              data-style-family={`style-family`}
              data-style-id={beer.styleId}
            />
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