document.getElementById('foodSearchButton').addEventListener('click', foodSearch )



function foodSearch(){
	let length = 9;
	let target = document.getElementById('card-container').children;
	if(target.length > 0){
		console.log(target)
		document.getElementById('card-container').innerHTML = ''
	}
	let text = document.getElementById('userChoice').value.split(" ").join(",+")
	if (text.length ===0 ){
		document.getElementById('card-container').innerHTML = ''
	}else{
		addcards(length)
    fetch(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=06f48698c5ec48b6ab0083ab6526e794&ingredients=${text}`)
	.then(response => response.json())
	.then(data => {
		console.log(data)
		for(let i=1; i<length;i++){
			let button = document.getElementById(`sholder${i}`)
			let card = document.getElementById(`scardimg${i}`)
			let text = document.getElementById(`scard-title${i}`)
			card.src = data[i].image
			text.innerHTML = data[i].title
			button.id = data[i].id
			button.id += ' spoon'
			console.log(button.id)
		}
	})
	}
	
}
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
			button.id = data.results[i].id
			button.id += ' tasty'
		}
	})
	
	
	
	// .catch(err => console.error(err));
}
// function addcardss(number) {
// 	for (let i = 0; i < number; i++) {
// 		let cardsection = document.getElementById('cardsection')
// 		let div = document.createElement('div');
// 		div.className = `card`
// 		div.style.height = '70%'
// 		// div.style.property = 'width: 18rem;'
// 		let img = document.createElement('img')
// 		img.id = `cardimg${i}`
// 		img.src = '...'
// 		img.style.width = '100%'
// 		img.style.height = '50%'
// 		img.className = 'card-img-top'
// 		img.alt = "..."
// 		let divbody = document.createElement('div')
// 		divbody.className = 'card-body'
// 		let title = document.createElement('h5')
// 		let br = document.createElement('br')
// 		title.id = `card-title${i}`
// 		title.innerHTML = 'placeHolder'
// 		title.className = 'card-title'
// 		let button = document.createElement('a')
// 		button.id += `holder${i}`
// 		button.href = '#'
// 		button.innerHTML = 'See How To Make'
// 		button.setAttribute('data-bs-toggle', 'modal')
// 		button.setAttribute('data-bs-target','#exampleModal')
// 		button.className = 'btn btn-primary'
// 		divbody.appendChild(title)
// 		divbody.appendChild(br)
// 		divbody.appendChild(button)
// 		div.appendChild(img)
// 		div.appendChild(divbody)
// 		cardsection.appendChild(div)
// 	}
// }

function addcardss(number) {
    let cardsection = document.getElementById('cardsection');
    let row = document.createElement('div');
    row.className = 'row flex-row flex-nowrap';
    row.style.overflowX = 'auto';
  
    for (let i = 0; i < number; i++) {
      let col = document.createElement('div');
      col.className = 'col-3';
  
      let card = document.createElement('div');
      card.className = 'card';
      card.style.height = '70%';
  
      let img = document.createElement('img');
      img.id = `cardimg${i}`;
      img.src = '...';
      img.style.width = '100%';
      img.style.height = '50%';
      img.className = 'card-img-top';
      img.alt = '...';
  
      let divbody = document.createElement('div');
      divbody.className = 'card-body';
  
      let title = document.createElement('h5');
      let br = document.createElement('br');
      title.id = `card-title${i}`;
      title.innerHTML = 'placeHolder';
      title.className = 'card-title';
  
      let button = document.createElement('a');
      button.id += `holder${i}`;
      button.href = '#';
      button.innerHTML = 'See How To Make';
      button.setAttribute('data-bs-toggle', 'modal');
      button.setAttribute('data-bs-target','#exampleModal');
      button.className = 'btn btn-primary';
  
      divbody.appendChild(title);
      divbody.appendChild(br);
      divbody.appendChild(button);
      card.appendChild(img);
      card.appendChild(divbody);
      col.appendChild(card);
      row.appendChild(col);
    }
  
    cardsection.appendChild(row);
  }
  


  function addcards(number) {
    let cardsection = document.getElementById('card-container');
    let row = document.createElement('div');
    row.className = 'row flex-row flex-nowrap';
    row.style.overflowX = 'auto';
  
    for (let i = 0; i < number; i++) {
      let col = document.createElement('div');
      col.className = 'col-2';
  
      let card = document.createElement('div');
      card.className = 'card';
      card.style.height = '70%';
  
      let img = document.createElement('img');
      img.id = `cardimg${i}`;
      img.src = '...';
      img.style.width = '100%';
      img.style.height = '50%';
      img.className = 'card-img-top';
      img.alt = '...';
  
      let divbody = document.createElement('div');
      divbody.className = 'card-body';
  
      let title = document.createElement('h5');
      let br = document.createElement('br');
      title.id = `card-title${i}`;
      title.innerHTML = 'placeHolder';
      title.className = 'card-title';
  
      let button = document.createElement('a');
      button.id += `holder${i}`;
      button.href = '#';
      button.innerHTML = 'See How To Make';
      button.setAttribute('data-bs-toggle', 'modal');
      button.setAttribute('data-bs-target','#exampleModal');
      button.className = 'btn btn-primary';
  
      divbody.appendChild(title);
      divbody.appendChild(br);
      divbody.appendChild(button);
      card.appendChild(img);
      card.appendChild(divbody);
      col.appendChild(card);
      row.appendChild(col);
    }
  
    cardsection.appendChild(row);
  }
  











// function addcards(number) {
// 	let cardsection = document.getElementById('card-container')
// 	for (let i = 1; i < number; i++) {
// 		let div = document.createElement('div');
// 		div.className = `card`
// 		div.style.height = '70%'
// 		// div.style.property = 'width: 18rem;'
// 		let img = document.createElement('img')
// 		img.id = `scardimg${i}`
// 		img.src = '...'
// 		img.style.width = '100%'
// 		img.style.height = '50%'
// 		img.className = 'card-img-top'
// 		img.alt = "..."
// 		let divbody = document.createElement('div')
// 		divbody.className = 'card-body'
// 		let title = document.createElement('h5')
// 		let br = document.createElement('br')
// 		title.id = `scard-title${i}`
// 		title.innerHTML = 'placeHolder'
// 		title.className = 'card-title'
// 		let button = document.createElement('a')
// 		button.id += `sholder${i}`
// 		button.href = '#'
// 		button.innerHTML = 'See How To Make'
// 		button.setAttribute('data-bs-toggle', 'modal')
// 		button.setAttribute('data-bs-target','#exampleModal')
// 		button.className = 'btn btn-primary'
// 		divbody.appendChild(title)
// 		divbody.appendChild(br)
// 		divbody.appendChild(button)
// 		div.appendChild(img)
// 		div.appendChild(divbody)
	
// 		cardsection.appendChild(div)
// 	}
	
// }

	// let h4 = document.createElement('h4')
		// h4.innerHTML = `${i}.`
		// cardsection.appendChild(h4)




// let h4 = document.createElement('h4')
	// h4.innerHTML = 'Dish Results'
	// cardsection.appendChild(h4)







const optionss = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key':  'a3d21461e9msh8468c145a590370p123b26jsn849e13d35af5',
		'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
	}
};
//https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&
let cardTarget = document.getElementById('cardsection');
cardTarget.addEventListener('click', helperFunction);

function helperFunction(e){
  let ulchildren = document.getElementById("ulbody").children
  if(ulchildren.length > 0){
    let content = document.getElementById("ulbody")
    content.innerHTML = ''
  }
let cardId = e.target.id.split(' ')
console.log(cardId)
fetch(`https://tasty.p.rapidapi.com/recipes/get-more-info?id=${cardId[0]}`,optionss)
.then(res => res.json())
.then(data => {
  console.log(data)
  let img = document.getElementById('modalimg');
  img.src = data.thumbnail_url;
  img.width = 200;
  for (let i = 0; i < data.instructions.length; i++ ){
    let li = document.createElement('li')
    li.innerHTML = data.instructions[i].display_text
    let content = document.getElementById("ulbody")
    content.appendChild(li)
  }
})
  }
let cardspace = document.getElementById('card-container');
cardspace.addEventListener('click', helperFunction2);

function helperFunction2(e){
  let ulchildren = document.getElementById("ulbody").children
  if(ulchildren.length > 0){
    let content = document.getElementById("ulbody")
    content.innerHTML = ''
  }
let cardId = e.target.id.split(' ')
console.log(cardId)
fetch(`https://api.spoonacular.com/recipes/${cardId[0]}/information?apiKey=06f48698c5ec48b6ab0083ab6526e794&includeNutrition=false`)
.then(res => res.json())
.then(data => {
  console.log(data)
  let img = document.getElementById('modalimg');
  img.src = data.image
  img.width = 200;
  let li = document.createElement('li')
  li.innerHTML = data.instructions
  let content = document.getElementById("ulbody")
  content.appendChild(li)
})
  }