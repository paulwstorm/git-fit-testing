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
        query: ""
      }

      this.setMeal = this.setMeal.bind(this)
      this.searchFoodItem = this.searchFoodItem.bind(this)
      this.deleteFood = this.deleteFood.bind(this)
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
    }

    deleteFood(foodItem) {
      this.props.deleteFoodItem(foodItem, this.state.meal)

      this.getMealFood()
    }

    renderFood() {
      if (this.state.currentFood) {
        return this.state.currentFood.map( foodItem => {
            return (
              <li key={foodItem.id}>
                { foodItem.food_name }
                <button className="btn btn-primary" onClick={event => {this.deleteFood(foodItem)}}> Delete </button>
              </li>
            )
          })
      }
    }

    render() {
        return(

            <div>
              <Link to={'/meals'}><button className="btn btn-primary">Back</button></Link>
              <h1> Add a Meal </h1>
              <div>
                <label htmlFor="meals">Choose a meal:</label>

                <select id="meals">
                  <option onClick={event => {this.setMeal(event)}} value="breakfast">Breakfast</option>
                  <option onClick={event => {this.setMeal(event)}} value="lunch">Lunch</option>
                  <option onClick={event => {this.setMeal(event)}} value="dinner">Dinner</option>
                  <option onClick={event => {this.setMeal(event)}} value="snacks">Snacks</option>
                </select>
              </div>
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
  return bindActionCreators({ addFoodItem, deleteFoodItem }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AddMeal);
