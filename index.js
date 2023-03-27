let submit = document.getElementById('ingrediantbutton');
submit.addEventListener('click', consolelog)

function consolelog(e){
    e.preventDefault()
    let ingrediant_input = document.getElementById('ingrediantinput').value.split(',').join('%2C%20')
    fetch(`https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&q=${ingrediant_input}`, options)
	.then(response => response.json())
	.then(response => {
		console.log(response)
		let cardname = document.getElementById('card-title')
		let cardimg = document.getElementById('cardimg')
		cardname.innerHTML = response.results[0].name
		cardimg.src = response.results[0].thumbnail_url

	})
	.catch(err => console.error(err));
}

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'caf33a1dafmsh08a1abe9bf7a701p1eb6eajsn8d58f2496da1',
		'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
	}
};

//https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&