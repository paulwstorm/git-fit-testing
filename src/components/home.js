import _ from "lodash";
import React, { Component } from "react";
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
// import { fetchPosts } from "../actions";

class Home extends Component {
    render() {
        return(
            <div>
                <h1>Git-Fit App</h1>
                <br />
                <h4>Enter Info Below</h4>
                <input placeholder="Username"></input>
                <input placeholder="Calorie Goal"></input>
                <Link path="/meals" ><button className="btn btn-primary submit-button">Submit</button></Link>
                
            </div>
        )
    }


}

export default Home