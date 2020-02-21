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
                        <Link to={'/meals/add'}><button className="btn btn-success">Add Meal</button></Link>
                    </div>
                </div>
                <div className="row">
                    <div className="col-3 border border-success" >
                        <h3 className="text-center">Breakfast</h3>
                        <ul className="breakfast-list">
                            {
                              this.props.meals.breakfast.map(foodItem => {
                                    return <li key={foodItem.id} className="list-group-item">
                                        <table className="table table-dark">
                                            <tbody>
                                                <tr>
                                                    <th scope="row">{foodItem.food_name}</th>
                                                    <td>Serving Quantity: {foodItem.serving_qty}</td>
                                                    <td>Serving Unit: {foodItem.serving_unit}</td>
                                                    <td>Calories: {foodItem.nf_calories}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </li>
                                })
                            }
                            <Link to={{pathname: '/meals/add', editMeal:"breakfast"}}><button>Edit</button></Link>
                        </ul>
                    </div>
                    <div className="col-3 border border-success">
                        <h3 className="text-center">Lunch</h3>
                        <ul className="lunch-list">
                            {
                              this.props.meals.lunch.map(foodItem => {
                                    return <li key={foodItem.id} className="list-group-item">
                                        <table className="table table-dark">
                                            <tbody>
                                                <tr>
                                                    <th scope="row">{foodItem.food_name}</th>
                                                    <td>Serving Quantity: {foodItem.serving_qty}</td>
                                                    <td>Serving Unit: {foodItem.serving_unit}</td>
                                                    <td>Calories: {foodItem.nf_calories}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </li>
                                })
                            }
                            <Link to={{pathname: '/meals/add', editMeal:"lunch"}}><button>Edit</button></Link>
                        </ul>
                    </div>
                    <div className="col-3 border border-success">
                        <h3 className="text-center">Dinner</h3>
                        <ul className="dinner-list">
                            {
                                this.props.meals.dinner.map(foodItem => {
                                    return <li key={foodItem.id} className="list-group-item">
                                        <table className="table table-dark">
                                            <tbody>
                                                <tr>
                                                    <th scope="row">{foodItem.food_name}</th>
                                                    <td>Serving Quantity: {foodItem.serving_qty}</td>
                                                    <td>Serving Unit: {foodItem.serving_unit}</td>
                                                    <td>Calories: {foodItem.nf_calories}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </li>
                                })
                            }
                            <Link to={{pathname: '/meals/add', editMeal:"dinner"}}><button>Edit</button></Link>
                        </ul>
                    </div>
                    <div className="col-3 border border-success">
                        <h3>Snacks</h3>
                        <ul className="snack-list">
                            {
                                this.props.meals.snacks.map(foodItem => {
                                    return <li key={foodItem.id} className="list-group-item">
                                        <table className="table table-dark">
                                            <tbody>
                                                <tr>
                                                    <th scope="row">{foodItem.food_name}</th>
                                                    <td>Serving Quantity: {foodItem.serving_qty}</td>
                                                    <td>Serving Unit: {foodItem.serving_unit}</td>
                                                    <td>Calories: {foodItem.nf_calories}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </li>
                                })
                            }
                            <Link to={{pathname: '/meals/add', editMeal:"snacks"}}><button>Edit</button></Link>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col-9">
                        <h5 className="text-center">Total Calories/ {this.props.user.calGoal}</h5>
                    </div>
                    <div className="col-3">
                        <Link to={"/meals/macros"} ><button className="btn btn-success">View Macros</button></Link>
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
