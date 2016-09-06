import React, {Component} from 'react';
import { Link } from 'react-router';

export default class App extends Component {
  render() {
    return (
      <div>
        <nav>
           <div className="nav-wrapper">
             <a href="#" className="brand-logo center">Bru</a>
             <ul id="nav-mobile" className="left hide-on-med-and-down">
              <li>
                <Link to='/'>
                  One
                </Link>
              </li>
              <li>
                <Link to='/'>
                  Two
                </Link>
              </li>
              <li>
                <Link to='/'>
                  Three
                </Link>
              </li>
             </ul>
           </div>
         </nav>
         <div className='container'>
          {this.props.children}
        </div>
      </div>
    )
  }
}