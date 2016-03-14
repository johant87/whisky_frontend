import React from 'react';
import jQuery from 'jquery';
import { Link } from 'react-router';

class WhiskyItem extends React.Component {
 constructor() {
   super();
   this.state = {
     id: null,
     name: '',
     taste: ''
   }
 }

 componentDidMount() {
   this.setState({
     id: this.props.id,
     name: this.props.name,
     taste: this.props.taste
   });
 }

 render() {
   return(
  <Link to={`/whiskies/${this.state.id}`}>

  <div className="thumbnail">
            <img src="http://johanvandentillaart.nl/whisky-img/chivas.jpg" alt="..." />
            <div className="caption post-content text-center">
            <h3>{this.state.name}</h3>
            <p>{this.state.taste}</p>

            </div>
  </div>

</Link>

   );
 }
}

export default WhiskyItem;
