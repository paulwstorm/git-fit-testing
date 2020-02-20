import _ from "lodash";
import React, { Component } from "react";
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import { Link } from "react-router-dom";
// import { fetchPosts } from "../actions";

class ViewMeals extends Component {
    render() {
        return (
            <html lang="en">
                <header>
                    <h1 className="text-center">Username's Meal</h1>
                </header>
                <body>
                    <div className="container">
                        <div className="row">
                            <div className="col-3" >
                                <h5>Breakfast</h5>
                            </div>
                            <div className="col-3">
                                <h5>Lunch</h5>
                            </div>
                            <div className="col-3">
                                <h5>Dinner</h5>
                            </div>
                            <div className="col-3">
                                <h5>Snacks</h5>
                            </div>
                        </div>
                    </div>
                </body>
            </html>
        )
    }


}

export default ViewMeals