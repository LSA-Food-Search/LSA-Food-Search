document.getElementById('foodSearchButton').addEventListener('click', foodSearch )
let image = document.getElementById('cardimg')
let name = document.getElementById('card-title')
let howTo = document.getElementById('instructions')


function foodSearch(){
    let text = document.getElementById('userChoice').value.split(" ").join("-")
    fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=d88c1672269546ba8bb8c72a0ff5ee7f&query=${text}&maxFat=25&number=5`)
    .then(response => response.json())
    .then(data => {
        name.innerText = data.results[0].title
        image.src = data.results[0].image
        
        



    })
    

}


// 'https://api.spoonacular.com/recipes/716429/information?apiKey=d88c1672269546ba8bb8c72a0ff5ee7f&includeNutrition=true'

// d88c1672269546ba8bb8c72a0ff5ee7f
