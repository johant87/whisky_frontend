import React from 'react';
import jQuery from 'jquery';
import ReviewForm from './ReviewForm';

class ReviewList extends React.Component {
  constructor() {
    super();
    this.state = {
      reviews: [],
      id: null,
      name: '',
      description: ''
    };
  }


  showReviews() {
      let component = this;
      let whiskyId = this.props.whiskyId;

      jQuery.getJSON("http://vast-reaches-77135.herokuapp.com/whiskies/" + whiskyId + ".json", function(data) {
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
        <ReviewForm whiskyId={this.props.whiskyId} onChange={this.showReviews.bind(this)} />
      <h2>Reviews:</h2>
        {this.state.reviews.map(function(review, i) {
          return(
          <div>
            <div key={i}>
              <li>{review.name}</li>
              <li>{review.rating}</li>
              <li>{review.description}</li>
            </div>
            </div>
          );
        })}
      </ul>
    );
  }
}

export default ReviewList;
