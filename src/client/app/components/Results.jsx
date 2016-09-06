import React, {Component} from 'react';

export default ({recommendation}) => {
  return (
    <div className='row'>
    <div className="col s12">
      <div className="card large">
        <div className="card-image">
          <img className='responsive-img activator' src="http://placehold.it/300x150" />
          <span className="card-title activator">Recommended Beer</span>
        </div>
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">Card Title<i className="material-icons right">more_vert</i></span>
          <p><a href="#">This is a link</a></p>
        </div>
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
          <p>Here is some more information about this product that is only revealed once clicked on.</p>
        </div>
      </div>
    </div>
    </div>    
  )
}