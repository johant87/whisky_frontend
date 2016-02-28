import React from 'react';
import jQuery from 'jquery';

class Whisky extends React.Component {
 constructor() {
   super();
   this.state = {
     whisky: {}
   };
 }



 getWhisky(){
   let Whiskyid = this.props.params.whiskyId;
   let component = this;

   jQuery.getJSON("http://vast-reaches-77135.herokuapp.com/whiskies" + Whiskyid + ".json", function(data) {

     console.log("getting single whisky from server");

     component.setState({
       whisky: data.whisky
     });
   });
 }

 componentDidMount() {
   this.getwhisky();
 }

 render() {
   return(
     <div>
       <ul>
       <li><strong>{this.state.whisky.name}</strong></li>
       </ul>
     </div>
   );
 }
}

export default Whisky;
