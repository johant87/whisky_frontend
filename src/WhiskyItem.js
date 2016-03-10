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
       <img src="http://www.thegreenwellystop.co.uk/whiskyshop/images/uploads/Aberlour/Dec13-Aberlour12.jpg" alt="..."></img>
        <div className="caption">
            <h3>{this.state.name}</h3>
            <p>{this.state.taste}</p>

        </div>
      </div>
</Link>

   );
 }
}

export default WhiskyItem;
