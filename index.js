document.getElementById('foodSearchButton').addEventListener('click', foodSearch )

let card = 

function foodSearch(){
    let text = document.getElementById('userChoice').value.split(" ").join("-")
    fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=d88c1672269546ba8bb8c72a0ff5ee7f&query=${text}&maxFat=25&number=5`)
    .then(response => response.json())
    .then(data => console.log(data))
    // .then(data => document.getElementById('card-title').innerText = data.results.tittle)

}


// 'https://api.spoonacular.com/recipes/716429/information?apiKey=d88c1672269546ba8bb8c72a0ff5ee7f&includeNutrition=true'

// d88c1672269546ba8bb8c72a0ff5ee7f
