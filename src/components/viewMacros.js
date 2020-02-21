import _ from "lodash";
import React, { Component } from "react";
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import { Link } from "react-router-dom";
// import { fetchPosts } from "../actions";

class ViewMacros extends Component {
    render() {
        return(
        <div> <h1> {this.props.user.userName}'s  Macros  </h1>
        <h3> Your Carbohydrates Total: </h3>
        <h3> Your Protein Total: </h3>
        <h3> Your Fat Total: </h3>

        {/* ghcharts.chart('container', {
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    type: 'pie'
  },
  title: {
    text: 'Your Daily Macros'
  },
  tooltip: {
    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: 'pointer',
      dataLabels: {
        enabled: true,
        format: '<b>{point.name}</b>: {point.percentage:.1f} %'
      }
    }
  },
  series: [{
    name: 'Macro Categories',
    colorByPoint: true,
    data: [{
      name: 'Carbs',
      y: 31.41,
      sliced: true,
      selected: true
    }, {
      name: 'Protein',
      y: 21.84
    }, {
      name: 'Fat',
      y: 16.85
    }, 
  }]
}); */}


      </div>

        )
    }


}

export default ViewMacros