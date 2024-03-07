document.addEventListener('DOMContentLoaded',()=>{
    //getCategories();  // running the function as soon as the browser gets loaded;
});

let button = document.querySelector('button');


const categoriesUrl = 'https://world-of-jokes1.p.rapidapi.com/v1/jokes/categories';
const jokesUrl = 'https://world-of-jokes1.p.rapidapi.com/v1/jokes?limit=100&page=1&sortBy=score%3Adesc';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '90d1f0dc12mshdd251096c19359ep13f095jsne5ca0256261a',
		'X-RapidAPI-Host': 'world-of-jokes1.p.rapidapi.com'
	}
};

// fetching categories
async function getCategories(){
try {
	const response = await fetch(categoriesUrl, options);
	const results = await response.json();
    let dropDown = document.getElementById('categories')
    results.forEach(result => {
        let option = document.createElement('option');
        option.innerText = result;
        dropDown.appendChild(option);

    });
} catch (error) {
	console.error(error);
}
}

async function getJokes(){
    try {
        const response = await fetch(jokesUrl, options);
        const results = await response.json();
        console.log(results);
    } catch (error) {
        console.error(error);
    }
    }
button.addEventListener('click',getJokes());
    