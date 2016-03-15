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
     <div className="margin-top">
      <div className="col-md-4">
        <img className="img-responsive" src={this.state.whisky.photo} alt="..."></img>
      </div>
      <div className="col-md-8">
          <h2><strong>{this.state.whisky.name}</strong> - {this.state.whisky.description}</h2>
          <p>origin: {this.state.whisky.origin}</p>
          <p>Taste: {this.state.whisky.taste}</p>
          <p>Average rating: {this.state.average_rating}</p>
        <ReviewList whiskyId={this.props.params.whiskyId} />
      </div>
     </div>
   );
 }
}

export default Whisky;
