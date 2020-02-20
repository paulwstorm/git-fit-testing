import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import promise from "redux-promise";

import reducers from "./reducers/index.js";
import Home from "./components/home.js"
import ViewMeals from "./components/viewMeals.js"
import AddMeal from "./components/addMeal.js"
import ViewMeals from "./components/viewMeal.js"
import ViewMacros from "./components/macros.js"

import 'bootstrap/dist/css/bootstrap.css'

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/meals/" component={ViewMeals} />
          <Route path="/meals/:type/add" component={AddMeal} />
          <Route path="/meals/:type/view" component={ViewMeal} />
          <Route path="/meals/macros" component={ViewMacros} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
