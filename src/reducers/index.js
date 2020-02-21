import { combineReducers } from "redux";
import { ADD_USER, ADD_BREAKFAST_ITEM, ADD_LUNCH_ITEM, ADD_DINNER_ITEM, ADD_SNACK_ITEM } from "../actions/index.js"
import uuid from 'uuid'
import _ from "lodash";

const defaultState = {
  meals: {
    breakfast: [],
    lunch: [],
    dinner: [],
    snack: []
  },
  currentNutrition: {}
  user: {
    userName: "David",
    calGoal: "2000"
  }
}

const rootReducer = combineReducers({
  meals: function(state = defaultState, action) {
    console.log(action)
    switch (action.type) {
      case ADD_BREAKFAST_ITEM:
        const breakfastItem = action.payload.data.foods[0]
        breakfastItem["id"] = uuid()
        const breakfast = [...state.meals.breakfast, breakfastItem]
        const addBreakfast = _.clone(state)
        addBreakfast.meals.breakfast = breakfast
        return addBreakfast
      case ADD_LUNCH_ITEM:
        const lunchItem = action.payload.data.foods[0]
        lunchItem["id"] = uuid()
        const lunch = [...state.meals.lunch, lunchItem]
        const addLunch = state
        addLunch.meals.lunch = lunch
        return addLunch
      case ADD_DINNER_ITEM:
        const dinnerItem = action.payload.data.foods[0]
        dinnerItem["id"] = uuid()
        const dinner = [...state.meals.dinner, dinnerItem]
        const addDinner = state
        addDinner.meals.dinner = dinner
        return addDinner
      case ADD_SNACK_ITEM:
        const snackItem = action.payload.data.foods[0]
        snackItem["id"] = uuid()
        const snacks = [...state.meals.snacks, snackItem]
        const addSnack = state
        addSnack.meals.snacks = snacks
        return addSnack
      default:
        return state
      }
  },

  user: function(state = {}, action) {
    switch (action.type) {
      case ADD_USER:
        return action.payload
      default:
        return state
      }
}
});

export default rootReducer;
