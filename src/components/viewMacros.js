import _ from "lodash";
import React, { Component } from "react";
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import { Link } from "react-router-dom";
// import { fetchPosts } from "../actions";

class ViewMacros extends Component {
    render() {
        return(
        <div> <h1> Username's Meals  </h1>
        <form className="input-group">
        <input
          placeholder="Add your breakfast item"
          className="form-control"
          
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">
            Add Breakfast Item
          </button>
        </span>
      </form>
      </div>

        )
    }


}

export default ViewMacros