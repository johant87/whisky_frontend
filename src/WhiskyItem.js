import React from 'react';
import jQuery from 'jquery';
import { Link } from 'react-router';

class WhiskyItem extends React.Component {
 constructor() {
   super();
 }

 componentDidMount() {
   this.setState({
     id: this.props.id,
     name: this.props.name
   });
 }

 render() {
   return(
     <li>
       <Link to={`/whiskies/${this.state.id}`}>{this.state.name}</Link>
     </li>
   );
 }
}

export default WhiskyItem;
