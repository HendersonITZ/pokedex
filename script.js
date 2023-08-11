function getPokemons() {
    return fetch('https://pokeapi.co/api/v2/pokemon/charmander')
        .then(j => j.json())
        .then(data => data)
}
function createCard() {
    const container = document.getElementsByClassName('container')
    const card = document.createElement('div')
    const title = document.createElement('h3')
    container[0].appendChild(card)
    card.appendChild(title)
    getPokemons().then(data => {
        title.innerText = data.name
    })
}
createCard()