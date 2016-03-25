import React from 'react';
import jQuery from 'jquery';
import { Link } from 'react-router';
import Loader from "react-loader";

class WhiskyList extends React.Component {
  constructor() {
    super();
    this.state = {
      whiskies: [],
      id: null,
      name: '',
      taste: '',
      photo: '',
      loaded: false
    };
  }

  showWhiskies(event) {
    let component = this;

    jQuery.getJSON("http://vast-reaches-77135.herokuapp.com/whiskies.json", function(data) {
      console.log(data);

        component.setState({
          whiskies: data.whiskies,
          average_rating: data.average_rating,
          loaded: true
        });
    });
  }

  componentDidMount(onDone) {
    this.showWhiskies();
  }

  render() {
    return (

  <Loader loaded={this.state.loaded} color="#e9a434">
  <div className="margin-top">

     {this.state.whiskies.map(function(whisky, i) {
       return(
      <div className="col-md-4">

                <Link to={`/whiskies/${whisky.id}`} className="thumbnail">

                  <img className="img-responsive" src={whisky.photo} alt="..." />
                  <div className="caption post-content text-center">
                     <h3>{whisky.name}<span className="color-heart"><i className="fa fa-heart-o"></i></span>{whisky.average_rating}</h3>
                     <hr></hr>
                     <p>{whisky.taste}</p>

                </div>
        </Link>
      </div>

       );
     })}
   </div>
  </Loader>
    );


  }
}

export default WhiskyList;
