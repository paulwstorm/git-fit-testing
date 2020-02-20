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
      calGoal: ''
    }

    this.addUser = this.addUser.bind(this)
  }

  addUser () {
    const user = {
      userName: this.state.userName,
      calGoal: this.state.calGoal
    }

    this.props.newUser(user)
  }

  render() {
      return(
          <div>
              <h1>Git-Fit App</h1>
              <br />
              <h4>Enter Info Below</h4>
              <input className="username-input" onChange={event => this.setState({ userName: event.target.value })} placeholder="Username"></input>
              <input className="cal-goal-input" onChange={event => this.setState({ calGoal: event.target.value })}placeholder="Calorie Goal"></input>
              <Link to={"/meals"} ><button className="btn btn-primary submit-button" onClick={this.addUser}>Submit</button></Link>
          </div>
      )
  }


}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ newUser }, dispatch);
}

export default connect(null, mapDispatchToProps)(Home);
