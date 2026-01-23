// JS Action here !
let body = document.querySelector("body");

let foodContainer = document.querySelector(".food-container");

let recipe;

const fetchData = async (area) => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`);

    const data = await response.json();
    const recipe = data.meals;

    showData(recipe);
}

const searchRecipe = () => {
    let input = document.querySelector("#input");

    input.addEventListener("keydown", async (e) => {
        if (e.keyCode === 13) {
            let inputVal = input.value;

            const api = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputVal}`);

            const data = await api.json();
            recipe = data.meals;
            showData(recipe);
        }
    });
};

searchRecipe();

// mode-btn !
let mode = document.querySelector("#mode");
// change the mode !
mode.addEventListener("click", () => {
    if (body.style.backgroundColor === "black") {
        body.style.backgroundColor = "white";
        body.style.color = "black";
        mode.innerHTML = `<i class="fa-solid fa-moon"></i>`;
        mode.style.color = "black";
    } else {
        body.style.backgroundColor = "black";
        body.style.color = "white";
        mode.innerHTML = `<i class="fa-solid fa-sun"></i>`;
        mode.style.color = "white";
    }
});


let showData = (recipe) => {
    foodContainer.innerHTML = recipe.map((meals) => `
        <div>
            <div class="img-container">
                <img class="imgs" src=${meals.strMealThumb} />
            </div>
            <h4 class="recipe_names">${meals.strMeal}</h4>
        </div>
    `).join("");
};

// Default !
fetchData("indian");


const american = document.querySelector("#american");
const indian = document.querySelector("#indian");
const chinese = document.querySelector("#chinese");
const canadian = document.querySelector("#canadian");
const thai = document.querySelector("#thai");
const british = document.querySelector("#british");
const japanese = document.querySelector("#japanese");
const russian = document.querySelector("#russian");
const italian = document.querySelector("#italian");
const french = document.querySelector("#french");

american.addEventListener("click", () => {
    fetchData("american");
});
indian.addEventListener("click", () => {
    fetchData("indian");
});
chinese.addEventListener("click", () => {
    fetchData("chinese");
});
canadian.addEventListener("click", () => {
    fetchData("canadian");
});
thai.addEventListener("click", () => {
    fetchData("thai");
});
british.addEventListener("click", () => {
    fetchData("british");
});
japanese.addEventListener("click", () => {
    fetchData("japanese");
});
russian.addEventListener("click", () => {
    fetchData("russian");
});
italian.addEventListener("click", () => {
    fetchData("italian");
});
french.addEventListener("click", () => {
    fetchData("french");
});
