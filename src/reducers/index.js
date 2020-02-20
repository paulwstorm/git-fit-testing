import { combineReducers } from "redux";
import { ADD_USER, ADD_BREAKFAST_ITEM, ADD_LUNCH_ITEM, ADD_DINNER_ITEM, ADD_SNACK_ITEM } from "../actions/index.js"
import uuid from 'uuid'

const defaultState = {
  meals: {
    breakfast: [{id: 0, name: "banana"}],
    lunch: [],
    dinner: [],
    snack: []
  },
  user: {
    userName: "",
    calGoal: ""
  }
}

const rootReducer = combineReducers({
  meals: function(state = defaultState, action) {
    switch (action.type) {
      case ADD_BREAKFAST_ITEM:
        const breakfastItem = action.payload
        breakfastItem["id"] = uuid()
        const breakfast = [...state.breakfast, breakfastItem]
        const addBreakfast = state
        addBreakfast.breakfast = breakfast
        return addBreakfast
      case ADD_LUNCH_ITEM:
        const lunchItem = action.payload
        lunchItem["id"] = uuid()
        const lunch = [...state.lunch, lunchItem]
        const addLunch = state
        addLunch.lunch = lunch
        return addLunch
      case ADD_DINNER_ITEM:
        const dinnerItem = action.payload
        dinnerItem["id"] = uuid()
        const dinner = [...state.dinner, dinnerItem]
        const addDinner = state
        addDinner.dinner = dinner
        return addDinner
      case ADD_SNACK_ITEM:
        const snackItem = action.payload
        snackItem["id"] = uuid()
        const snacks = [...state.snacks, snackItem]
        const addSnack = state
        addSnack.snacks = snacks
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
