import React from 'react';
import jQuery from 'jquery';
import WhiskyItem from './WhiskyItem';

class WhiskyList extends React.Component {
  constructor() {
    super();
    this.state = {
      whiskies: [],
      id: null,
      name: '',
      taste: ''
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
      <div className="margin-top">
     {this.state.whiskies.map(function(whisky, i) {
       return(

           <div className="col-md-4">
              <WhiskyItem key={whisky.id} id={whisky.id} name={whisky.name} taste={whisky.taste} />
           </div>

       );
     })}
   </div>

    );
  }
}

export default WhiskyList;
