import React from 'react';
import jQuery from 'jquery';
import WhiskyItem from './WhiskyItem';

class WhiskyList extends React.Component {
  constructor() {
    super();

    this.state = {
      whiskies: [],
      counter: 1
    };
  }

  showWhiskies(event) {
    let component = this;

    jQuery.getJSON("http://vast-reaches-77135.herokuapp.com/whiskies.json", function(data) {
      console.log(data);

      component.setState({
        whiskies: data.whiskies
      });
    });
  }


  componentDidMount() {
    this.showWhiskies();
  }

  render() {
    return (
      <ul>
      <h2>Whiskies:</h2>
     {this.state.whiskies.map(function(whisky, i) {
       return(
         <WhiskyItem key={whisky.id} id={whisky.id} name={whisky.name} />
       );
     })}
   </ul>

    );
  }
}

export default WhiskyList;
