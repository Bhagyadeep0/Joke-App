document.addEventListener('DOMContentLoaded',()=>{
    getCategories();  // running the function as soon as the browser gets loaded;
});

let button = document.querySelector('button');


const categoriesUrl = 'https://jokeapi-v2.p.rapidapi.com/info?format=json';
const jokesUrl = 'https://jokeapi-v2.p.rapidapi.com/joke/Any?format=json&contains=C%2523&idRange=0-150&blacklistFlags=nsfw%2Cracist';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '90d1f0dc12mshdd251096c19359ep13f095jsne5ca0256261a',
		'X-RapidAPI-Host': 'jokeapi-v2.p.rapidapi.com'
	}
};
 
// fetching categories
async function getCategories(){
try {
	const response = await fetch(categoriesUrl, options);
	const data = await response.json();
    let dropDown = document.getElementById('categories')
    results = data.jokes.categories;
    results.forEach(result => {
        let option = document.createElement('option');
        option.innerText = result;
        dropDown.appendChild(option);

    });
} catch (error) {
	console.error(error);
}
}


button.addEventListener('click',
async function getJokes(){
    try {
        const response = await fetch(jokesUrl, options);
        const result = await response.json();
        console.log(result);
        let jokeTitle = document.querySelector('.joke-title');
        let jokeContent = document.querySelector('.joke-content');
        console.log(result.setup);
        console.log(result.delivery);
        jokeTitle.innerText = result.setup;
        jokeContent.innerText = result.delivery + "😂";

    } catch (error) {
        console.error(error);
    }
    });
    