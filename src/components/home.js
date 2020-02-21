import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import { newUser } from "../actions";

class Home extends Component {
  constructor () {
    super()

    this.state = {
      userName: '',
      calGoal: '',
      userGender: '',
      userWeight: '',
      userWeightGoal:'',
      userHeight: '',
      userAge: '',
      userExercise: ""
    }

    this.addUser = this.addUser.bind(this)
  }

  addUser () {
    if (this.state.userName.length == 0) {
      alert("Please enter a user name")
      return true
    } else if (this.state.calGoal.length == 0) {
      alert("Please enter your calorie goal or calculate a new one")
      return true
    }
    const user = {
      userName: this.state.userName,
      calGoal: this.state.calGoal
    }

    this.props.newUser(user)
  }

  calGoalCalculator() {
    const calcStressFactor = (epw) => {
    	if (epw < 1) {
    		return 1.375
      } else if (epw < 4) {
    		return 1.55
    	} else if (epw < 6) {
    		return 1.7
    	} else if  (epw < 8) {
    		return 1.9
    	} else if (epw > 7) {
    		return 1.9
    	} else {
    		return 1.2
      }
    }

    console.log(this.state.userExercise)

    let currStressFactor = calcStressFactor(parseInt(this.state.userExercise))

    const mifflinStJeorSimplified = (sex, age, weight, height, stressFactor) => {
      let TDEE = 0
    	if (sex == 'female') {
    		TDEE = (10*weight + 6.25*height - 5*age - 161)*stressFactor
      } else if ( sex == 'male') {
    		TDEE = (10*weight + 6.25*height - 5*age - 5)*stressFactor
      } else {
    		TDEE = (10*weight + 6.25*height - 5*age - 80)*stressFactor
      }
      console.log(weight, height, age, stressFactor)
    	return TDEE
    }

    const currCals = mifflinStJeorSimplified(this.state.userGender, parseInt(this.state.userAge), parseInt(this.state.userWeight), parseInt(this.state.userHeight), currStressFactor)

    const tdeeAdjustment = (calories, startWeight, endWeight) => {
      if (endWeight != startWeight){
        return Math.floor(calories + ((7500/50) * (endWeight - startWeight)))
      } else {
        return calories
      }
    }

    const adjustedCalGoal = tdeeAdjustment(currCals, parseInt(this.state.userWeight),  parseInt(this.state.userWeightGoal))

    this.setState({calGoal: adjustedCalGoal})
    alert("Calorie goal set at: " + adjustedCalGoal)
  }

  render() {
      return(
          <div>
            <div>
                <h1>Git-Fit App</h1>
                <br />
                <h4>Please Enter Your Name and Calorie Goal</h4>
                <input className="username-input" onChange={event => this.setState({ userName: event.target.value })} placeholder="Username"></input>
                <input className="cal-goal-input" onChange={event => this.setState({ calGoal: event.target.value })}placeholder="Calorie Goal"></input>
            </div>
            <br />
            <div>
              <h4>Or Calculate Your Calorie Goal Here</h4>
              <form>
                <span><label htmlFor="gender">Gender:</label></span>
                  <select onClick={event => {this.setState({ userGender: event.target.value })}} id="gender">
                    <option value="female">Female</option>
                    <option value="male">Male</option>
                    <option value="other">Other</option>
                  </select>
                  <input
                    placeholder="Weight (kg)"
                    className="form-control"
                    onChange={event => {this.setState({ userWeight: event.target.value})}}
                  />
                  <input
                    placeholder="Weight Goal (kg)"
                    className="form-control"
                    onChange={event => {this.setState({ userWeightGoal: event.target.value})}}
                  />
                  <input
                    placeholder="Height (cm)"
                    className="form-control"
                    onChange={event => {this.setState({ userHeight: event.target.value})}}
                  />
                  <input
                    placeholder="Age"
                    className="form-control"
                    onChange={event => {this.setState({ userAge: event.target.value})}}
                  />
                  <span><label htmlFor="exercise">Exercise Amount (weekly):</label></span>
                    <select onClick={event => {this.setState({ userExercise: event.target.value })}} id="exercise">
                      <option value="0">None</option>
                      <option value="3">Three or Less</option>
                      <option value="4">Four to Six</option>
                      <option value="7">Seven or More</option>
                    </select>
                  <button className="btn btn-primary submit-button" onClick={event => {event.preventDefault();this.calGoalCalculator()}}>Calculate</button>
              </form>
            </div>
            <Link to={"/meals"} ><button className="btn btn-primary submit-button" onClick={this.addUser}>Submit</button></Link>
          </div>
      )
  }


}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ newUser }, dispatch);
}

export default connect(null, mapDispatchToProps)(Home);
