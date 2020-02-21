import _ from "lodash";
import React, { Component } from "react";
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import { Link } from "react-router-dom";
// import { fetchPosts } from "../actions";

class ViewMacros extends Component {
    render() {
        return(
        <div> <h1> {this.props.user.userName}'s  Macros  </h1>
        <h3> Your Carbohydrates Total: </h3>
        <h3> Your Protein Total: </h3>
        <h3> Your Fat Total: </h3>
      </div>

        )
    }


}

export default ViewMacros