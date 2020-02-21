const apiEndpoint = `https://trackapi.nutritionix.com/v2/natural/nutrients`;
const params = { query: "chicken" };
const headers = { "x-app-key": '3dc2ad864ff3cc39020f1dd6b5b5fbeb', "x-app-id": '1cba2023'}
const nutrientInfo = async () => { await axios.post(apiEndpoint, params, {
  headers,
}).then(data => {return data.value});}

foodData = nutrientInfo()

const stressFactor = (epw) => {
	if (epw < 1) {
		return 1.2
  } else if (epw < 4) {
		return 1.375
	} else if (epw < 6) {
		return 1.55
	} else if  (epw < 8) {
		return 1.7
	} else if (epw > 7) {
		return 1.9
	} else {
		return 1.2
  }
}

let currStressFactor = stressFactor(4)

const MifflinStJeorSimplified = (sex, age, weight, height, currStressFactor) => {
  let TDEE = 0
	if (sex == 'female') {
		TDEE = (10*weight + 6.25*height - 5*age - 161)*currStressFactor
  } else if( sex == 'male') {
		TDEE = (10*weight + 6.25*height - 5*age - 5)*currStressFactor
  } else {
		TDEE = (10*weight + 6.25*height - 5*age - 80)*currStressFactor
  }
	return TDEE
}


const TDEEAdjustment = (calories, startWeight, endWeight) => {
	return Math.floor(calories - (endWeight - startWeight)*500)
}

const CaloriesAllotment = (TDEE, weightChange) => {
	return Math.floor(TDEE + 500 * weightChange)
}

const macroPercentage = (calories, protein, carb, fat) => {
	let p = Math.ceil((calories * protein)/4)
	let f = Math.floor((calories * fat)/9)
	let c = Math.ceil((calories * carb)/4)
	return [p, c, f]
}

const macroBodyWeight = (calories, weight, protein, fat) => {
	let p = Math.ceil(weight * protein)
	let f = Math.floor(weight * fat)
	let c = Math.ceil((calories - p * 4 - f * 9)/4)
	return [p, c, f]
}

const macroCalculator = (calories, weight, protein, carb, fat, method) => {

	if (method == "percentage") {
		let [p, c, f] = macroPercentage(calories, protein, carb, fat)
    return "protein: %d g, carbs: %d g, fat: %d g" % (p, c, f)
  } else if (method == "bodyweight") {
		let [p, c, f] = macroBodyWeight(calories, weight, protein, fat)
	  return "protein: %d g, carbs: %d g, fat: %d g" % (p, c, f)
  }
}


console.log("Using percentage method: ", macroCalculator(MifflinStJeorSimplified('f', 26, 69.4, 165, stressFactor(5)), 150,.3, .4, .3, "percentage"))
console.log("Using bodyweight method: ", macroCalculator(MifflinStJeorSimplified('f', 26, 69.4, 165, stressFactor(5)), 153, 1.1, .4, .3, "bodyweight"))

TDEE = MifflinStJeorSimplified('f', 26, 69.4, 165, stressFactor(5))
calories = CaloriesAllotment(TDEE, -1)
console.log("Using bodyweight method with -1lb / week goal: ", macroCalculator(calories, 153, 1.1, .4, .3, "bodyweight"))
