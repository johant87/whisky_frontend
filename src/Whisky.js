import React from 'react';
import jQuery from 'jquery';
import ReviewList from './ReviewList';

class Whisky extends React.Component {
 constructor() {
   super();
   this.state = {
     whisky: {},
     reviews: []
   };
 }

 componentDidMount() {
   this.getWhisky();
 }
 getWhisky(){
   let WhiskyId = this.props.params.whiskyId;
   let component = this;

   jQuery.getJSON("http://vast-reaches-77135.herokuapp.com/whiskies/" + WhiskyId + ".json", function(data) {
     component.setState({
       whisky: data.whisky,
       average_rating: data.average_rating
     });
   });
 }


 render() {
   return(
     <div>
       <h2>Whisky:</h2>
       <ul>
         <li><strong>{this.state.whisky.name}</strong></li>
         <li><strong>{this.state.whisky.description}</strong></li>
         <li><strong>{this.state.whisky.origin}</strong></li>
         <li><strong>{this.state.whisky.taste}</strong></li>
         <li>Average rating: {this.state.average_rating}</li>
         <li><ReviewList whiskyId={this.props.params.whiskyId} /></li>
       </ul>

     </div>
   );
 }
}

export default Whisky;
