import axios from "axios";

export const ADD_USER = "add_user";
export const ADD_BREAKFAST_ITEM = "add_breakfast_item"
export const ADD_LUNCH_ITEM = "add_breakfast_item"
export const ADD_DINNER_ITEM = "add_breakfast_item"
export const ADD_SNACK_ITEM = "add_breakfast_item"


export function newUser(user) {
  return {
    type: ADD_USER,
    payload: user
  };
}

export function addFoodItem(query, meal) {
  const apiEndpoint = `https://trackapi.nutritionix.com/v2/natural/nutrients`;
  const params = { query: query };
  const headers = { "x-app-key": '3dc2ad864ff3cc39020f1dd6b5b5fbeb', "x-app-id": '1cba2023'}
  const food = axios.post(apiEndpoint, params, {
    headers,
  });

  switch (meal) {
    case "breakfast":
      return {
        type: ADD_BREAKFAST_ITEM,
        payload: food
      }
    case "lunch":
      return {
        type: ADD_LUNCH_ITEM,
        payload: food
      }
    case "dinner":
      return {
        type: ADD_DINNER_ITEM,
        payload: food
      }
    case "snack":
      return {
        type: ADD_SNACK_ITEM,
        payload: food
      }
  }
}
