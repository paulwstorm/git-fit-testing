import _ from "lodash";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import { fetchPosts } from "../actions";

class ViewMeals extends Component {
    render() {
        return (
            <div className="container col-12">
                <div className="row">
                    <div className="col-md-9">
                        <h1 className="text-center">{this.props.user.userName}'s Meals</h1>
                    </div>
                    <div className="col-md-3">
                        <Link to={'/meals/add'}><button className="btn btn-primary add-meal">Add Meal</button></Link>
                    </div>
                </div>
                <div className="row">
                    <div className="col-3 border border-light" >
                        <div className="row">
                            <div className="col-9">
                                <h3 className="text-center">Breakfast</h3>
                            </div>
                            <div className="col-3">
                                <Link to={{ pathname: '/meals/add', editMeal: "breakfast" }}><button className="btn btn-primary float-right edit-meal">Edit</button></Link>
                            </div>
                        </div>
                        <ul className="list-group list-group-flush breakfast-list">
                            {
                                this.props.meals.breakfast.map(foodItem => {
                                    return <li key={foodItem.id} className="list-group-item">
                                        <div class=" border border-light">
                                            <span>{foodItem.food_name}</span>
                                            <br />
                                            <span>Calories: {foodItem.nf_calories}</span>
                                        </div>
                                    </li>
                                })
                            }

                        </ul>
                    </div>
                    <div className="col-3 border border-light">
                        <div className="row">
                            <div className="col-9">
                                <h3 className="text-center">Lunch</h3>
                            </div>
                            <div className="col-3">
                                <Link to={{ pathname: '/meals/add', editMeal: "lunch" }}><button className="btn btn-primary float-right edit-meal">Edit</button></Link>
                            </div>
                        </div>
                        <ul className="list-group list-group-flush lunch-list">
                            {
                                this.props.meals.lunch.map(foodItem => {
                                    return <li key={foodItem.id} className="list-color list-group-item">
                                        <div class=" border border-light">
                                            <span>{foodItem.food_name}</span>
                                            <br />
                                            <span>Calories: {foodItem.nf_calories}</span>
                                        </div>
                                    </li>
                                })
                            }
                        </ul>
                    </div>
                    <div className="col-3 border border-light">
                        <div className="row">
                            <div className="col-9">
                                <h3 className="text-center">Dinner</h3>
                            </div>
                            <div className="col-3">
                                <Link to={{ pathname: '/meals/add', editMeal: "dinner" }}><button className="btn btn-primary float-right edit-meal">Edit</button></Link>
                            </div>
                        </div>
                        <ul className="list-group list-group-flush dinner-list">
                            {
                                this.props.meals.dinner.map(foodItem => {
                                    return <li key={foodItem.id} className="list-group-item">
                                        <div class=" border border-light">
                                            <span>{foodItem.food_name}</span>
                                            <br />
                                            <span>Calories: {foodItem.nf_calories}</span>
                                        </div>
                                    </li>
                                })
                            }
                        </ul>
                    </div>
                    <div className="col-3 border border-light">
                        <div className="row">
                            <div className="col-9">
                                <h3 className="text-center">Snacks</h3>
                            </div>
                            <div className="col-3">
                                <Link to={{ pathname: '/meals/add', editMeal: "snacks" }}><button className="btn btn-primary float-right edit-meal">Edit</button></Link>
                            </div>
                        </div>
                        <ul className="list-group list-group-flush snack-list">
                            {
                                this.props.meals.snacks.map(foodItem => {
                                    return <li key={foodItem.id} className="list-group-item">
                                        <div class=" border border-light">
                                            <span>{foodItem.food_name}</span>
                                            <br />
                                            <span>Calories: {foodItem.nf_calories}</span>
                                        </div>
                                    </li>
                                })
                            }
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col-9">
                        <h5 className="text-center">Total Calories/ Calorie Goal: {this.props.user.calGoal}</h5>
                    </div>
                    <div className="col-3">
                        <Link to={"/meals/macros"} ><button className="btn btn-primary view-macros">View Macros</button></Link>
                    </div>
                </div>
            </div>

        )
    }


}

function mapStateToProps(state) {
    return {
        meals: state.meals.meals,
        user: state.user
    };
}

export default connect(mapStateToProps)(ViewMeals);
