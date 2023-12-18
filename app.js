let input = document.getElementById("inputbox")

async function fetchRandomMeal() {
    try {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
      const data = await response.json();

      const meal = data.meals[0];
      console.log(meal);

      const mealDetails = document.getElementById('random');
      mealDetails.innerHTML = `
      <h4 class="category">${meal.strCategory}</h4>
      <img src="${meal.strMealThumb}" id="image"/>
      <h3 class="name">${meal.strMeal} </h3>
      
      `;
    } catch (error) {
      console.log(error);
    }
  }

  fetchRandomMeal();