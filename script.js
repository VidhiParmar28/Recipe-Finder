let searchbar = document.getElementById("searchbar");
let container = document.getElementById("content");

searchbar.addEventListener("input", async () => {
  let searchTerm = searchbar.value;
  let URL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`;

  let response = await fetch(URL);
  let result = await response.json();
  console.log(result);

  if (!result.meals) {
    container.innerHTML = "";
    return;
  }

  let showCards = result.meals.map((meal) => {
    return `
    <div class="card">
    <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
    <h3>${meal.strMeal}</h3>
    <p>Catagory:${meal.strCategory}</p>
    <p>Area:${meal.strArea}</p>
    </div>`;
  });

  container.innerHTML = showCards.join("");
});
