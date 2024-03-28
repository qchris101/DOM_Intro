// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const container = document.querySelector('#container');
const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'
const h1 = document.querySelector('h1')



for (let i = 1; i <= 1025; i++){
    const pokemon = document.createElement('div')
    const label = document.createElement('span')
    pokemon.classList.add('pokemon')
    label.innerText = `#${i}`
    const newImg = document.createElement('img')
    newImg.src = `${baseURL}${i}.png`
    pokemon.appendChild(newImg)
    pokemon.appendChild(label)
    container.append(pokemon)
}
