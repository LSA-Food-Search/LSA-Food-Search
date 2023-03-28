// document.getElementById('foodSearchButton').addEventListener('click', foodSearch )
// let image = document.getElementById('cardimg')
// let name = document.getElementById('card-title')
// let howTo = document.getElementById('instructions')



// function foodSearch(){
//     let text = document.getElementById('userChoice').value.split(" ").join("-")
//     fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=06f48698c5ec48b6ab0083ab6526e794&query=${text}&maxFat=25&number=5`)
//     .then(response => response.json())
//     .then(data => {
//         console.log(data)
//         addcards()
//         // addcards()
//         // document.getElementById('foodSearchButton').addEventListener('click', (e) => {
          
//         // })

//         for(let i = 1; i <= data.results.length; i++){
//             document.getElementById('cardimg').src = data.results[i].image
//             document.getElementById('card-title').innerText = data.results[i].title

//         }
//         // document.getElementById('cardimg').src = data.results.image
//         // document.getElementById('card-title').innerText = data.results.title
//         // name.innerText = data.results[0].title
//         // image.src = data.results[0].image
//     })
   
// }
//  // 06f48698c5ec48b6ab0083ab6526e794 ---> luis api key for spoontaciular
// //  d88c1672269546ba8bb8c72a0ff5ee7f ---> ayaiz api key for spoontaciular


let submitt = document.getElementById('ingrediantbutton');
submitt.addEventListener('click', addcontent)
function addcontent(e) {
	e.preventDefault()
	let length = 8;
	let target = document.getElementById('cardsection').children;
	if(target.length > 0){
		console.log(target)
		document.getElementById('cardsection').innerHTML = ''
	}
	addcardss(length)
	let ingrediant_input = document.getElementById('ingrediantinput').value.split(',').join('%2C%20')
	fetch(`https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&q=${ingrediant_input}`, optionss)
	.then(response => response.json())
	.then(data => {
		console.log(data)
		for(let i=0; i<length;i++){
			let button = document.getElementById(`holder${i}`)
			let card = document.getElementById(`cardimg${i}`)
			let text = document.getElementById(`card-title${i}`)
			card.src = data.results[i].thumbnail_url
			text.innerHTML = data.results[i].name
			button.id = data.results[i].name
		}
	})
	
	
	
	// .catch(err => console.error(err));
}
function addcardss(number) {
	for (let i = 0; i < number; i++) {
		let cardsection = document.getElementById('cardsection')
		let div = document.createElement('div');
		div.className = `card`
		div.style.height = '70%'
		// div.style.property = 'width: 18rem;'
		let img = document.createElement('img')
		img.id = `cardimg${i}`
		img.src = '...'
		img.style.width = '100%'
		img.style.height = '50%'
		img.className = 'card-img-top'
		img.alt = "..."
		let divbody = document.createElement('div')
		divbody.className = 'card-body'
		let title = document.createElement('h5')
		let br = document.createElement('br')
		title.id = `card-title${i}`
		title.innerHTML = 'placeHolder'
		title.className = 'card-title'
		let button = document.createElement('a')
		button.id += `holder${i}`
		button.href = '#'
		button.innerHTML = 'See How To Make'
		button.setAttribute('data-bs-toggle', 'modal')
		button.setAttribute('data-bs-target','#exampleModal')
		button.className = 'btn btn-primary'
		divbody.appendChild(title)
		divbody.appendChild(br)
		divbody.appendChild(button)
		div.appendChild(img)
		div.appendChild(divbody)
		cardsection.appendChild(div)
	}
}


const optionss = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'caf33a1dafmsh08a1abe9bf7a701p1eb6eajsn8d58f2496da1',
		'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
	}
};
//https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&