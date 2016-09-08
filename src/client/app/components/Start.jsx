import React from 'react';

export default () => {
  return (
    <div className='row'>
      <div className='col s12'>
        <img className='responsive-img' src="http://pdxpedicab.com/home/wp-content/uploads/2013/09/Brewery.jpg" />
        <h3 className='center-align'>Fear no Beer</h3>
        <ul className="tabs">
          <li className="tab col s3"><a className="active" href="#login">Login</a></li>
          <li className="tab col s3"><a href="#signUp">Sign Up</a></li>
        </ul>
      </div>
      <div id="login" className="col s12">
        <br />
        <div className='row'>
          <div className='input-field col s6'>
            <input id="username" type="text" className="validate" />
            <label className="active" for="username">Username</label>
          </div>
          <div className='input-field col s6'>
            <input id="password" type="text" className="validate" />
            <label className="active" for="password">Password</label>
          </div >
        </div>
        <a className="waves-effect waves-light btn">Login</a>
      </div>
      <div id="signUp" className="col s12">
        <br />
        <div className="row">
          <div className='input-field col s4'>
            <input id="firstName" type="text" className="validate" />
            <label className="active" for="firstName">First Name</label>
          </div>
          <div className='input-field col s4'>
            <input id="lastName" type="text" className="validate" />
            <label className="active" for="lastName">Last Name</label>
          </div>
          <div className='input-field col s4'>
            <input id="email" type="text" className="validate" />
            <label className="active" for="email">Email</label>
          </div>
          <div className='input-field col s6'>
            <input id="username" type="text" className="validate" />
            <label className="active" for="username">Username</label>
          </div>
          <div className='input-field col s6'>
            <input id="password" type="text" className="validate" />
            <label className="active" for="password">Password</label>
          </div>
        </div>
        <a className="waves-effect waves-light btn">Sign Up</a>
      </div>
    </div>
  )
}