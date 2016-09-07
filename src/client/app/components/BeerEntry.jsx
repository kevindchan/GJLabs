import React, {Component} from 'react';

export default ({beer}) => {
  return (
    <div className="col s4">
      <div className="card small">
        <div className="card-image">
          <img className='responsive-img activator' src="http://placehold.it/300x150" />
          <span className="card-title activator">Beer Title</span>
        </div>
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">Card Title<i className="material-icons right">more_vert</i></span>
          <p className='center-align'>
            <input type="checkbox" className="filled-in" id={beer} value={beer} />
            <label htmlFor={beer}></label>
          </p>
        </div>
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
          <p>Here is some more information about this product that is only revealed once clicked on.</p>
        </div>
      </div>
    </div>
  );
}