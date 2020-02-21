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
                        <Link to={'/meals/add'}><button className="btn btn-primary">Add Meal</button></Link>
                    </div>
                </div>
                <div className="row">
                    <div className="col-3 border border-primary" >
                        <h3 className="text-center">Breakfast</h3>
                        <ul className="list-group list-group-flush breakfast-list">
                            {
                                this.props.meals.breakfast.map(foodItem => {
                                    return <li key={foodItem.id} className="list-group-item">
                                        <div class="table-responsive">
                                            <table className="table">
                                                <tbody>
                                                    <tr>
                                                        <th scope="row" class="table-secondary">{foodItem.food_name}</th>
                                                        <td class="table-success">Serving Quantity: {foodItem.serving_qty}</td>
                                                        <td class="table-success">Serving Unit: {foodItem.serving_unit}</td>
                                                        <td class="table-success">Calories: {foodItem.nf_calories}</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </li>
                                })
                            }
                            <Link to={{ pathname: '/meals/add', editMeal: "breakfast" }}><button className="btn btn-success">Edit</button></Link>
                        </ul>
                    </div>
                    <div className="col-3 border border-primary">
                        <h3 className="text-center">Lunch</h3>
                        <ul className="list-group list-group-flush lunch-list">
                            {
                                this.props.meals.lunch.map(foodItem => {
                                    return <li key={foodItem.id} className="list-group-item">
                                        <div class="table-responsive">
                                            <table className="table">
                                                <tbody>
                                                    <tr>
                                                        <th scope="row" class="table-secondary">{foodItem.food_name}</th>
                                                        <td class="table-success">Serving Quantity: {foodItem.serving_qty}</td>
                                                        <td class="table-success">Serving Unit: {foodItem.serving_unit}</td>
                                                        <td class="table-success">Calories: {foodItem.nf_calories}</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </li>
                                })
                            }
                            <Link to={{ pathname: '/meals/add', editMeal: "lunch" }}><button className="btn btn-success">Edit</button></Link>
                        </ul>
                    </div>
                    <div className="col-3 border border-primary">
                        <h3 className="text-center">Dinner</h3>
                        <ul className="list-group list-group-flush dinner-list">
                            {
                                this.props.meals.dinner.map(foodItem => {
                                    return <li key={foodItem.id} className="list-group-item">
                                        <div class="table-responsive">
                                            <table className="table">
                                                <tbody>
                                                    <tr>
                                                        <th scope="row" class="table-secondary">{foodItem.food_name}</th>
                                                        <td class="table-success">Serving Quantity: {foodItem.serving_qty}</td>
                                                        <td class="table-success">Serving Unit: {foodItem.serving_unit}</td>
                                                        <td class="table-success">Calories: {foodItem.nf_calories}</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </li>
                                })
                            }
                            <Link to={{ pathname: '/meals/add', editMeal: "dinner" }}><button className="btn btn-success">Edit</button></Link>
                        </ul>
                    </div>
                    <div className="col-3 border border-primary">
                        <h3 className="text-center">Snacks</h3>
                        <ul className="list-group list-group-flush snack-list">
                            {
                                this.props.meals.snacks.map(foodItem => {
                                    return <li key={foodItem.id} className="list-group-item">
                                        <div class="table-responsive">
                                            <table className="table">
                                                <tbody>
                                                    <tr>
                                                        <th scope="row" class="table-secondary">{foodItem.food_name}</th>
                                                        <td class="table-success">Serving Quantity: {foodItem.serving_qty}</td>
                                                        <td class="table-success">Serving Unit: {foodItem.serving_unit}</td>
                                                        <td class="table-success">Calories: {foodItem.nf_calories}</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </li>
                                })
                            }
                            <Link to={{ pathname: '/meals/add', editMeal: "snacks" }}><button className="btn btn-success">Edit</button></Link>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col-9">
                        <h5 className="text-center">Total Calories/ {this.props.user.calGoal}</h5>
                    </div>
                    <div className="col-3">
                        <Link to={"/meals/macros"} ><button className="btn btn-primary">View Macros</button></Link>
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
