import React from 'react';

export default ({submitHandlerStart}) => {
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
      <div className="col s12">
        <br />
        <div className='row'>
          <form id="login" onSubmit={submitHandlerStart} action="/login">
            <div className='input-field col s6'>
              <input name="username" type="text" />
              <label className="active" htmlFor="username">Username</label>
            </div>
            <div className='input-field col s6'>
              <input name="password" type="text" />
              <label className="active" htmlFor="password">Password</label>
            </div>
            <div className="col s12">
              <input type="submit" />
            </div>
          </form>
        </div>
      </div>
      <div className="col s12">
        <br />
        <div className="row">
          <form id="signUp" onSubmit={submitHandlerStart} action="/users">
            <div className='input-field col s4'>
              <input name="firstName" type="text" />
              <label className="active" htmlFor="firstName">First Name</label>
            </div>
            <div className='input-field col s4'>
              <input name="lastName" type="text" />
              <label className="active" htmlFor="lastName">Last Name</label>
            </div>
            <div className='input-field col s4'>
              <input name="email" type="text" />
              <label className="active" htmlFor="email">Email</label>
            </div>
            <div className='input-field col s6'>
              <input name="username" type="text" />
              <label className="active" htmlFor="username">Username</label>
            </div>
            <div className='input-field col s6'>
              <input name="password" type="text" />
              <label className="active" htmlFor="password">Password</label>
            </div>
            <div className="col s12">
              <input type="submit"/>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}