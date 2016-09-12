import React, {Component} from 'react';
import { Link } from 'react-router';
import BeerEntry from './BeerEntry.jsx';

export default ({submitHandler, beers}) => {
  return (
    <div className='container'>
      <div className='row'>
        <div>
          <ul className="collection with-header">
            <li className="collection-header" style={{backgroundColor: "#578fb4", color: "white"}}>
              <h5 className="center">Dashboard</h5>
            </li>
          </ul>
        </div>
        <div className="col s6">
           <div className="card">
             <div className="card-image">
               <img style={{maxHeight: '300px'}} src="https://discoversg.com/wp-content/uploads/2016/02/craft-beer.jpg" />
             </div>
             <div className="card-content">
               <span className="card-title">Preference</span>
               <p>Unsure of what beer to have next but know which types of beers you like? Click on the link below and we can suggest an ideal beer for you!</p>
             </div>
             <div className="card-action">
               <a href="/preference">Let's select some beers!</a>
             </div>
           </div>
         </div>
         <div className="col s6">
            <div className="card">
              <div className="card-image">
                <img style={{maxHeight: '300px'}} src="http://velemenyarena.hu/votes/magyarorszag/sor.jpg" />
              </div>
              <div className="card-content">
                <span className="card-title">Beer Log</span>
                <p>Want to track the beers we've suggested for you? Click the link below to check out your beer log. Add or remove suggestions while you explore the wonderful world of beer!</p>
              </div>
              <div className="card-action">
                <a href="/beerlog">Take me to my Beer Log!</a>
              </div>
            </div>
          </div>
        </div>
      </div>   
  )
}
