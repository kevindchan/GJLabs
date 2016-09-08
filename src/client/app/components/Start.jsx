import React from 'react';

export default ({submitHandlerSignUp}) => {
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
          <form>
            <div className='input-field col s6'>
              <input id="usernameLogin" type="text" className="validate" />
              <label className="active" htmlFor="username">Username</label>
            </div>
            <div className='input-field col s6'>
              <input id="passwordLogin" type="text" className="validate" />
              <label className="active" htmlFor="password">Password</label>
            </div>
          </form>
        </div>
        <a className="waves-effect waves-light btn">Login</a>
      </div>
      <div id="signUp" className="col s12">
        <br />
        <div className="row">
          <form>
            <div className='input-field col s4'>
              <input id="firstName" type="text" className="validate" />
              <label className="active" htmlFor="firstName">First Name</label>
            </div>
            <div className='input-field col s4'>
              <input id="lastName" type="text" className="validate" />
              <label className="active" htmlFor="lastName">Last Name</label>
            </div>
            <div className='input-field col s4'>
              <input id="email" type="text" className="validate" />
              <label className="active" htmlFor="email">Email</label>
            </div>
            <div className='input-field col s6'>
              <input id="username" type="text" className="validate" />
              <label className="active" htmlFor="username">Username</label>
            </div>
            <div className='input-field col s6'>
              <input id="password" type="text" className="validate" />
              <label className="active" htmlFor="password">Password</label>
            </div>
          </form>
        </div>
        <a className="waves-effect waves-light btn" onClick={submitHandlerSignUp}>Sign Up</a>
      </div>
    </div>
  )
}