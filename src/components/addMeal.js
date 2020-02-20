import _ from "lodash";
import React, { Component } from "react";
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import { Link } from "react-router-dom";
// import { fetchPosts } from "../actions";

class AddMeal extends Component {
    render() {
        return(
            <div> <h1> Username's Meals  </h1>
            <form className="input-group">
            <input
              placeholder="Add your Meal item"
              className="form-control"
              
            />
            <span className="input-group-btn">
              <button type="submit" className="btn btn-primary">
                Add Meal Item 
              </button>
            </span>
          </form>
          </div>
    );
  }
}
        
    




export default AddMeal