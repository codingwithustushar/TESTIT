let input = document.getElementById("inputbox");

async function fetchRandomMeal() {
  try {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
    const data = await response.json();

    const meal = data.meals[0];
    console.log(meal);

    const mealDetails = document.getElementById('random');
    mealDetails.innerHTML += `
      <h4 class="category">${meal.strCategory}</h4>
      <img src="${meal.strMealThumb}" id="image"/>
      <h3 class="name">${meal.strMeal} </h3>
    `;
  } catch (error) {
    console.log(error);
  }
}

fetchRandomMeal();

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
  } catch (error) {
    console.log(error);
  }
}

input.addEventListener("keypress", function (e) {
  if (e.key == "Enter") {
    fetchdata();
  }
});





 
 






