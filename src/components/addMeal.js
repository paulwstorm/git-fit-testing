import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import { addFoodItem } from "../actions/index.js";

class AddMeal extends Component {
    constructor () {
      super()

      this.state = {
        meal: null,
        currentFood: null,
        query: ""
      }

      this.setMeal = this.setMeal.bind(this)
      this.searchFoodItem = this.searchFoodItem.bind(this)

    }

    setMeal(event) {
      const thisMeal = event.target.value
      this.setState({ meal: event.target.value })

      const getFood = this.props.meals[thisMeal]
      this.setState({ currentFood: getFood})
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

      const getFood = this.props.meals[this.state.meal]
      console.log(this.props.meals[this.state.meal])
      this.setState({ currentFood: getFood})
    }

    renderFood() {
      if (this.state.currentFood) {
        return this.state.currentFood.map( foodItem => {
            return <li key={foodItem.id}>{ foodItem.food_name }</li>
          })
      }
    }

    render() {
        return(

            <div>
              <h1> Add a Meal </h1>
              <label htmlFor="meals">Choose a meal:</label>

              <select id="meals">
                <option onClick={event => {this.setMeal(event)}} value="breakfast">Breakfast</option>
                <option onClick={event => {this.setMeal(event)}} value="lunch">Lunch</option>
                <option onClick={event => {this.setMeal(event)}} value="dinner">Dinner</option>
                <option onClick={event => {this.setMeal(event)}} value="snack">Snack</option>
              </select>
              <form className="input-group">
                <input
                  placeholder="Add your Meal item"
                  className="form-control"
                  onChange={event => this.setState({ query: event.target.value })}
                />
                <button type="submit" className="btn btn-primary" onClick={event=>{event.preventDefault();this.searchFoodItem()}}>
                  Add Meal Item
                </button>
            </form>
            <div>
              <ul className="food-item">
                {this.renderFood()}
              </ul>
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
  return bindActionCreators({ addFoodItem }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AddMeal);
