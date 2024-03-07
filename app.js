document.addEventListener("DOMContentLoaded", () => {
  getCategories(); // running the function as soon as the browser gets loaded;
});

let random = document.getElementById("random");
let dropDown = document.getElementById("categories");
let button = document.getElementById("byCategorey");
let jokeContent = document.querySelector(".joke-content");
let jokeTitle = document.querySelector(".joke-title");

const categoriesUrl =
  "https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/categories";
const jokesUrl =
  "https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random";
const searchUrl =
  "https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/search?query=";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    "X-RapidAPI-Key": "90d1f0dc12mshdd251096c19359ep13f095jsne5ca0256261a",
    "X-RapidAPI-Host": "matchilling-chuck-norris-jokes-v1.p.rapidapi.com",
  },
};

// fetching categories
async function getCategories() {
  try {
    const response = await fetch(categoriesUrl, options);
    const results = await response.json();
    results.forEach((result) => {
      let option = document.createElement("option");
      option.innerText = result;
      dropDown.appendChild(option);
    });
  } catch (error) {
    console.error(error);
  }
}

// function to get random jokes on click
random.addEventListener("click", async function getJokes() {
  try {
    const response = await fetch(jokesUrl, options);
    const result = await response.json();
    jokeTitle.innerText = "Random🎲 Jokes😜";
    jokeContent.innerText = result.value + "😂";
  } catch (error) {
    console.error(error);
  }
});

// get jokes by category
button.addEventListener("click", async function getJokes() {
  try {
    const response = await fetch(searchUrl + dropDown.value, options);
    const result = await response.json();
    let total = Math.floor(Math.random() * result.total); //generating random number
    jokeTitle.innerText = "Chuck Norris " + dropDown.value + " Jokes😜";
    jokeContent.innerText = result.result[total].value + "😂";
  } catch (error) {
    console.error(error);
  }
});
