import React from 'react';
import { Link } from 'react-router';
import jQuery from 'jquery';
import WhiskyList from './WhiskyList';

class App extends React.Component {
  constructor(){
    super();
  }

  render() {
    return (
      <div className="container">
            <nav className="main">
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/whiskies">Whiskies</Link></li>
              </ul>
            </nav>
            {this.props.children}
          </div>
      );
  }
}

export default App;
