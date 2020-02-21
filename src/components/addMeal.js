import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import { addFoodItem, deleteFoodItem } from "../actions/index.js";

class AddMeal extends Component {
    constructor (props) {
      super(props)

      this.state = {
        meal: this.props.location.editMeal || "",
        currentFood: [],
        placeholder: "Add your Meal item",
        query: ""
      }

      this.setMeal = this.setMeal.bind(this)
      this.searchFoodItem = this.searchFoodItem.bind(this)
      this.deleteFood = this.deleteFood.bind(this)
      this.renderMeal = this.renderMeal.bind(this)
    }

    getMealFood() {
      const getFood = this.props.meals[this.state.meal]
      this.setState({ currentFood: getFood})
    }

    componentDidMount() {
      this.getMealFood()
    }

    setMeal(event) {
      const thisMeal = event.target.value
      this.setState({ meal: event.target.value })

      this.getMealFood()
    }

    async searchFoodItem() {
      if (!this.state.meal) {
        alert("Please confirm the meal you are adding!")
        return true
      } else if (this.state.query.length == 0) {
        alert("Please enter a food!")
        return true
      }

      await this.props.addFoodItem(this.state.query, this.state.meal)

      this.getMealFood()
      this.setState({query: ""})
    }

    deleteFood(foodItem) {
      this.props.deleteFoodItem(foodItem, this.state.meal)

      this.getMealFood()
    }

    renderMeal() {
      if (this.state.meal.length == 0) {
        return (
          <div>
            <span className="AddMeal-header"><label htmlFor="meals">Choose a meal:</label></span>
            <select id="meals">
              <option onClick={event => {this.setMeal(event)}} value="breakfast">Breakfast</option>
              <option onClick={event => {this.setMeal(event)}} value="lunch">Lunch</option>
              <option onClick={event => {this.setMeal(event)}} value="dinner">Dinner</option>
              <option onClick={event => {this.setMeal(event)}} value="snacks">Snacks</option>
            </select>
          </div>
        )
      } else {
        return (
          <span className="AddMeal-header">Please add your {this.state.meal} </span>
        )
      }
    }

    renderFood() {
      if (this.state.currentFood) {
        return this.state.currentFood.map( foodItem => {
            return (
              <div className="food-item shadow p-3 mb-5 bg-white rounded" key={foodItem.id}>
                <span className="food-desc">Item: { foodItem.food_name }</span>
                <span className="food-desc">Amt: { foodItem.serving_qty }</span>
                <span className="food-desc">{ foodItem.serving_unit }</span>
                <span className="food-desc">Cal: { foodItem.nf_calories }</span>
                <button className="btn btn-primary float-right delete-food-item" onClick={event => {this.deleteFood(foodItem)}}> Delete </button>
              </div>
            )
          })
      }
    }

    render() {
        return(
            <div>
              <div className="row">
                <div className="col-sm-2 text-center">
                  <Link to={'/meals'}><button className="btn btn-primary back-button">Back</button></Link>
                </div>
                <div className="col-sm-10"></div>
              </div>
              <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                  <div>
                    {this.renderMeal()}
                  </div>
                </div>
                <div className="col-md-3"></div>
              </div>
              <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                  <form className="input-group">
                    <input
                      placeholder={this.state.placeholder}
                      className="form-control"
                      ref="foodSearch"
                      onChange={event => {this.setState({ query: event.target.value})}}
                    />
                    <button type="submit" className="btn btn-primary" onClick={event=>{event.preventDefault();this.searchFoodItem();this.refs.foodSearch.value=""}}>
                      Add Meal Item
                    </button>
                  </form>
                </div>
                <div className="col-md-3"></div>
              </div>
              <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                  <div className="food-items">
                    {this.renderFood()}
                  </div>
                </div>
                <div className="col-md-3"></div>
              </div>
            </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    meals: state.meals.meals,
    user: state.user
   };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addFoodItem, deleteFoodItem }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AddMeal);
