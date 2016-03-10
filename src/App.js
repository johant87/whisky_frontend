import React from 'react';
import { Link } from 'react-router';
import jQuery from 'jquery';
import WhiskyList from './WhiskyList';
import './stylesheets/components.scss';

class App extends React.Component {
  constructor(){
    super();
  }

  render() {
    return (
<div>
  <nav className="navbar navbar-default">
  <div className="container-fluid">
    <div className="navbar-header">
      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
      <Link to="/" className="navbar-brand" href="#">Whisky Lovers</Link>
    </div>

    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul className="nav navbar-nav">
        <li><Link to="/whiskies">Explore</Link></li>
      </ul>
      <ul className="nav navbar-nav navbar-right">
        <li><a href="#">Link</a></li>
      </ul>
    </div>
  </div>
</nav>

{/*<div className="jumbotron">
  <h1>Hello, world!</h1>
  <p>...</p>
  <p><a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a></p>
</div> */}

      <div className="container">
            {this.props.children}
      </div>
      <div className="container-fluid">
        <p className="pull-right">Coded with ♥ by <a href="johanvandentillaart.nl" target="_blank">johanvandentillaart.nl</a></p>
      </div>
</div>
      );
  }
}

export default App;
