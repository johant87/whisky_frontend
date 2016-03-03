import React from 'react';
import jQuery from 'jquery';
import ReviewForm from './ReviewForm';

class ReviewList extends React.Component {
  constructor() {
    super();
    this.state = {
      reviews: []
    };
  }


  showReviews(event) {
    let component = this;
    let whiskyId = this.props.whiskyId;

    jQuery.getJSON("http://vast-reaches-77135.herokuapp.com/whiskies/" + whiskyId, function(data){
      component.setState({
        reviews: data.reviews
      });
    });
  }

  componentDidMount() {
    this.showReviews();
  }

  render() {
    return(
      <ul>
      <h2>Reviews:</h2>
        {this.state.reviews.map(function(review, i) {
          return(
            <div key={i}>
              <li>{review.name}</li>
              <li>{review.rating}</li>
              <li>{review.description}</li>
            </div>
          );
        })}
      </ul>
    );
  }
}

export default ReviewList;
