document.getElementById('foodSearchButton').addEventListener('click', foodSearch )
let image = document.getElementById('cardimg')
let name = document.getElementById('card-title')
let howTo = document.getElementById('instructions')



function foodSearch(){
    let text = document.getElementById('userChoice').value.split(" ").join("-")
    fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=06f48698c5ec48b6ab0083ab6526e794&query=${text}&maxFat=25&number=5`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        addcards()
        // addcards()
        // document.getElementById('foodSearchButton').addEventListener('click', (e) => {
          
        // })

        for(let i = 1; i <= data.results.length; i++){
            document.getElementById('cardimg').src = data.results[i].image
            document.getElementById('card-title').innerText = data.results[i].title

        }
        // document.getElementById('cardimg').src = data.results.image
        // document.getElementById('card-title').innerText = data.results.title
        // name.innerText = data.results[0].title
        // image.src = data.results[0].image
    })
   
}





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






 // 06f48698c5ec48b6ab0083ab6526e794 ---> luis api key for spoontaciular
//  d88c1672269546ba8bb8c72a0ff5ee7f ---> ayaiz api key for spoontaciular



// function addCard(){
// let cardContainer = document.getElementById("card-container")
// let card = document.createElement("div")
// card.classList.add("card")
// let img = document.createElement('img')
// 	img.id = 'cardimg'
// 	img.src = '...'
//     img.className = 'card-img-top'
// img.alt = "..."
// let cardBody = document.createElement("div")
// cardBody.classList.add("card-body")
// let cardTitle = document.createElement("h5")
// cardTitle.classList.add("card-title")
// cardTitle.textContent = "Card title"
// let cardText = document.createElement("p")
// cardText.classList.add("card-text")
// cardText.textContent = "random text"
// let cardFooter = document.createElement("div")
// cardFooter.classList.add("card-footer")
// let cardFooterLink = document.createElement("a")
// cardFooterLink.classList.add("btn", "btn-primary")
// cardFooterLink.href = "#"
// cardFooterLink.textContent = "Go somewhere"
// // div.appendChild(img)
// cardBody.appendChild(cardTitle)
// cardBody.appendChild(cardText)
// cardFooter.appendChild(cardFooterLink)
// card.appendChild(cardBody)
// card.appendChild(cardFooter)
// cardContainer.appendChild(card)}
 

// addCard()










function addcards(){
	let cardsection = document.getElementById('cardsection')
	let div = document.createElement('div');
	div.className = 'card'
	div.style.property = 'width: 18rem;'
    div.style.width = 200
    div.style.height = 300
	let img = document.createElement('img')
	img.id = 'cardimg'
	img.src = '...'
	img.className = 'card-img-top'
	img.alt = "..."
	let divbody = document.createElement('div')
	divbody.className = 'card-body'
	let title = document.createElement('h5')
	title.id = 'card-title'
	title.innerHTML = 'placeHolder'
	title.className = 'card-title'
	let button = document.createElement('a')
	button.href='#'
	button.innerHTML = 'See How To Make'
    button.id = 'howTo'
	button.className = 'btn btn-primary'
	divbody.appendChild(title)
	divbody.appendChild(button)
	div.appendChild(img)
	div.appendChild(divbody)
	cardsection.appendChild(div)

}

// addcards()