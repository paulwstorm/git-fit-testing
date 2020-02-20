import { combineReducers } from "redux";

const rootReducer = combineReducers({
  meals: function(state = {}, action) {
      switch (action.type) {
          default:
            return state
      }
  },

  user: function(state = {}, action) {
    switch (action.type) {
        default:
          return state
    }
}
});

export default rootReducer;
