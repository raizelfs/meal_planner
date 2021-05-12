 let breakfast= ["porrigde", "muesli", "pancakes", "eggs on toast", "fruit and yoghurt"]
    let lunch =["vegtable soup", "a mixed veg and hummous sandwich", "a tuna salad", "a smoked salmon bagel", "sushi"]
    let dinner= ["pasta and pesto", "roasted beans and veg", "sweet potatoe chips", "salmon and broccoli", "rissoto"]


function selector(meal){
return meal[Math.floor(Math.random()*meal.length)]
}
 //console.log(selector(breakfast))   
 let randomMeal = `For breakfast eat: ${selector(breakfast)} \nFor lunch eat: ${selector(lunch)} \nFor dinner eat: ${selector(dinner)} `

  function displayPlan(plan) {
    const ascii= "  :] ^_^ {: \n"
  const emoji = " :p :) <3 n_n \n \n"
  const hearts = "\n <3 <3 <3 <3 <3 <3"
    const showPlan = randomMeal
    console.log(ascii + emoji + showPlan + hearts)
  }
  
  displayPlan(randomMeal);
