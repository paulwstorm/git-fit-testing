const apiEndpoint = `https://trackapi.nutritionix.com/v2/natural/nutrients`;
const params = { query: "chicken" };
const headers = { "x-app-key": '3dc2ad864ff3cc39020f1dd6b5b5fbeb', "x-app-id": '1cba2023'}
const nutrientInfo = async () => { await axios.post(apiEndpoint, params, {
  headers,
}).then(data => {return data.value});}

foodData = nutrientInfo()
