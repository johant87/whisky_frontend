import React from 'react';
import jQuery from 'jquery';

class ReviewForm extends React.Component {
  constructor() {
    super();
  }

  createReview(event) {
    event.preventDefault();

    let component = this;
    let whiskyId = this.props.whiskyId;
    let name = this.refs.inputName.value;
    let rating = this.refs.inputRating.value;
    let description = this.refs.inputDescription.value;
    let newReview = {
      id: null,
      name: name,
      rating: rating,
      description: description
    };

    jQuery.ajax({
      type: "POST",
      url: "http://vast-reaches-77135.herokuapp.com/whiskies/" + whiskyId + "/reviews",
      data: JSON.stringify({
          review: newReview
      }),
      contentType: "application/json",
      dataType: "json"
    })

    .done(function(data) {
      component.props.onChange();
      component.refs.inputName.value = "";
      component.refs.inputRating.value = "";
      component.refs.inputDescription.value = "";
    })
  }

  render() {
    return(
      <div>
        <h3>Add your review:</h3>
        <form role="form" onSubmit={this.createReview.bind(this)}>
          <div className="row">
            <div className="form-group col-md-8 margin-row">
              <label htmlFor="name"><p>Name:</p></label>
              <input id="name" ref="inputName" className="form-control" />
            </div>
            <div className="form-group col-md-2">
              <label htmlFor="rating"><p>Rating:</p></label>
              <select id="rating" ref="inputRating" className="form-control">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
          </div>

          <div className="row margin-row">
            <div className="form-group col-md-8">
              <label htmlFor="description"><p>Description:</p></label>
              <textarea id="description" ref="inputDescription" className="form-control" />
            </div>
          </div>
          <button type="submit" className="btn btn-default">Submit</button>
        </form>
      </div>
    );
  }
}

export default ReviewForm;
