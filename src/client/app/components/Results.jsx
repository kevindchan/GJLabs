import React, {Component} from 'react';

export default ({recommendation}) => {
  const image = () => {
    const src = recommendation.labels !== undefined ? recommendation.labels.large : 
      'http://images.huffingtonpost.com/2016-01-26-1453821995-8643361-beermain.jpg';
    return src;
  }
  return (
    <div className='row'>
    <div className="col s12">
      <div className="card large">
        <div className="card-image">
          <img className='responsive-img activator' src={image()} />
          <span className="card-title activator"></span>
        </div>
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">{recommendation.name}<i className="material-icons right">more_vert</i></span>
          <p><a href="#"></a></p>
        </div>
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4">{recommendation.name}<i className="material-icons right">close</i></span>
          <p>{recommendation.description}</p>
        </div>
      </div>
    </div>
    </div>    
  )
}