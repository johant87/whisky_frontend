import React from 'react';
import jQuery from 'jquery';
import WhiskyList from './WhiskyList';

class Whisky extends React.Component {
 constructor() {
   super();
   this.state = {
     whisky: {}
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
       whisky: data.whisky
     });
   });
 }


 render() {
   return(
     <div>
       <ul>
       <li><strong>{this.state.whisky.name}</strong></li>
       <li><strong>{this.state.whisky.description}</strong></li>
       <li><strong>{this.state.whisky.origin}</strong></li>
       <li><strong>{this.state.whisky.taste}</strong></li>
       </ul>
     </div>
   );
 }
}

export default Whisky;