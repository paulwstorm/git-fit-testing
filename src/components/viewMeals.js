import _ from "lodash";
import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import { fetchPosts } from "../actions";

class ViewMeals extends Component {
    render() {
        return (
            <div className="container col-12">
                <h1 className="text-center">Username's Meal</h1>
                <div className="row">
                    <div className="col-3 border border-success" >
                        <h3 className="text-center">Breakfast</h3>
                        <ul className="breakfast-list">
                            <li>Yogart</li>
                        </ul>
                    </div>
                    <div className="col-3 border border-success">
                        <h3 className="text-center">Lunch</h3>
                        <ul className="lunch-list">
                            <li>turkey</li>
                        </ul>
                    </div>
                    <div className="col-3 border border-success">
                        <h3 className="text-center">Dinner</h3>
                        <ul className="dinner-list"></ul>
                    </div>
                    <div className="col-3 border border-success">
                        <h3>Snacks</h3>
                        <ul className="snack-list"></ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col-9">
                        <h5 className="text-center">Total Calories/Calorie Goal</h5>
                    </div>
                    <div className="col-3">
                        <Link to={"/meals/macros"} ><button className="btn btn-success">View Macros</button></Link>
                    </div>
                </div>
            </div>

        )
    }


}

export default ViewMeals