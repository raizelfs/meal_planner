const meals = {
    breakfast: ["porrigde", "muesli", "pancakes", "eggs on toast", "fruit and yoghurt"],
    lunch: ["vegtable soup", "a mixed veg and hummous sandwich", "a tuna salad", "a smoked salmon bagel", "sushi"],
    dinner: ["pasta and pesto", "roasted beans and veg", "sweet potatoe chips", "salmon and broccoli", "rissoto"]
};

function randomNum (num) {
    return Math.floor(Math.random() * num)
}

    let mealPlan = []

    for (let meal in meals) {
     let i = randomNum(meals[meal].length)
    
    switch(meal) {
        case 'breakfast':
          mealPlan.push(`For breakfast eat "${meals[meal][i]}".`)
          break
        case 'lunch':
          mealPlan.push(`for lunch eat: "${meals[meal][i]}".`)
          break
        case 'dinner':
         mealPlan.push(`for dinner eat: "${meals[meal][i]}".`)
          break
        default:
          mealPlan.push('There is not enough info.')
      }
    }

  function displayPlan(plan) {
    const ascci= "  :] ^_^ {: \n"
  const emoji = " :p :) <3 n_n \n \n"
  const hearts = "\n <3 <3 <3 <3 <3 <3"
    const showPlan = mealPlan.join('\n')
    console.log(ascci + emoji + showPlan + hearts)
  }
  
  displayPlan(mealPlan);