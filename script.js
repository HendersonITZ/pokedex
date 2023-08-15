function getPokemons(pokemon) {
    return fetch('https://pokeapi.co/api/v2/pokemon/' + pokemon)
        .then(j => j.json())
        .then(data => data)
}
function createCard(pokemon) {
    const container = document.getElementsByClassName('container')
    const card = document.createElement('div')
    card.classList.add('card')
    const img = document.createElement('img')
    card.appendChild(img)
    const title = document.createElement('h3')
    container[0].appendChild(card)
    card.appendChild(title)
    const ul = document.createElement('ul')
    card.appendChild(ul)
    getPokemons(pokemon).then(data => {
        title.innerText = data.name
       img.src = data.sprites.front_default
       for(let index = 0; index < data.types.length; index += 1 ){
        console.log(data.types)
        const li = createList(data.types[index].type.name)
        ul.appendChild(li)
       }
    })
}
function createList(types){
    const li = document.createElement('li')
    li.innerText = types
    return li
}
function renderCards(){
   let pokemon = 1 
    for(let index = 1; index <= 151; index +=1){
        createCard(pokemon)
        pokemon += 1
    };
}
renderCards()