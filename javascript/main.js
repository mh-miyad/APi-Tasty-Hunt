const insertDivCard = document.getElementById('insertCard');
const searchInput = document.getElementById('email-address-icon');
const searchButton = document.getElementById('search-btn');


searchButton.addEventListener('click', function () {
    const search = searchInput.value;
    mealDb(search);

});
mealDb();

function mealDb(input) {
    if (!input) {
        input = 'p'; // default search term
    }

    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`)
        .then(res => res.json())
        .then(data => displayMealdb(data.meals))
}




function displayMealdb(meals) {
    insertDivCard.innerHTML = '';

    meals.forEach(meal => {
        const div = document.createElement('div');

        // Truncate the instructions string to the first 100 characters
        const shortDescription = meal.strInstructions.slice(0, 100) + '...';

        div.innerHTML = `
        <div class="border border-gray-400 p-3 rounded-xl hover:bg-white bg-gray-100" style="width:20rem;">
            <img src="${meal.strMealThumb}" class=" rounded-lg" alt="">
            <div class="text-center">
                <h3 class="text-xl font-bold my-2">${meal.strMeal}</h3>
                <p>${shortDescription}</p>
                <button class="bg-yellow-400 px-4 mb-3 py-2 rounded-xl text-white hover:bg-yellow-500">View More</button>
            </div>
        </div>
        `;

        insertDivCard.appendChild(div);
    });
}









