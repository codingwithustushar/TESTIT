let input = document.getElementById("inputbox");

//fetching the random meal
async function fetchRandomMeal() {
  try {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
    const data = await response.json();

    const meal = data.meals[0];
    console.log(meal);
    getIngredientsList(meal)
    document.querySelector(".category").innerHTML = meal.strCategory
    document.querySelector("#image").src = meal.strMealThumb
    document.querySelector(".name").innerHTML = meal.strMeal
  } 
  
  catch (error) { 
    console.log(error);
  }
}

const ingredients_list = document.querySelector("#ingredient-list")

//getting ingredients
function getIngredientsList(meal) {
  ingredients_list.innerHTML = ""
  let ingredientsList = '';
  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];
    if (ingredient && measure) {
      ingredientsList += `<li>${measure} ${ingredient}</li>`;
    }
  }
  ingredients_list.innerHTML = ingredientsList
  
}

fetchRandomMeal();//calling the function

document.querySelector("#view-btn").addEventListener("click" , ()=>{
  document.querySelector("#modal").style.display = "block"
})

document.querySelector("#cross").addEventListener("click" , ()=>{
  document.querySelector("#modal").style.display = "none"
})

//fetching the searched meal
async function fetchdata() {
  try {
    let food = input.value;
    let data = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${food}`);
    let res = await data.json();
    const meals = res.meals;
    console.log(res);

    const dishdetails = document.getElementById("dish");
    dishdetails.innerHTML = "";

    meals.forEach((meal) => {
      const mealDiv = document.createElement("div");
      mealDiv.setAttribute("id","dare")
      mealDiv.innerHTML = `
        <h4 class="mealname">${meal.strMeal}</h4>
        <img src="${meal.strMealThumb}" id="image1" />
      `;
      dishdetails.appendChild(mealDiv);
    });
  } 
  //if not found giving error
  catch (error) {
    console.log(error);
  }
}

//on clicking on input searched meal comes
input.addEventListener("keypress", function (e) {
  if (e.key == "Enter") {
    fetchdata();
  }
});





 
 






