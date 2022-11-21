
// utilisez let et const

// this est a geometry variable, verifiez toujours son contenu. Astuces:
// - this en dehors d'objet est Windows
// - this dans un object est l'object
// - pour créer un object, évitez new, utilser {}
// - toute fonction dans {} est une méthode de l'objet et this pointe
//   sur cet object dans cette fonction
// - dans une methode, toute fonction imbriquée (par exemple pour map/filter/foreach)
//   DOIT utiliser la array syntax (() => {}) pour éviter d'avoir un this qui pointe sur window

// toujours utiliser le ===, jamais le ==

// utilisez le descructuring:

// let person  = {nom: "kevin", age: 37, metier: "formateur"}
// let {nom, age} = person 
// let couleurs = ["bleu", "blanc", "rouge"]
// let [a, b, c] = couleurs 

// utilisez l'operateur splat

// ["vert", "jaune", ...couleurs, "violet", ...couleurs]
// ->  [ "vert", "jaune", "bleu", "blanc", "rouge", "violet", "bleu", "blanc", "rouge" ]
// {equipe: "bleu", ...person} 
// -> {equipe: 'bleu', nom: 'kevin', age: 37, metier: 'formateur'}

// utiliser forEach plutot que for
// couleurs.forEach(coul => console.log(coul.toUpperCase()))
// pour toute transformation, utilisez map directement:
// let couleursMaj = couleurs.map(coul => coul.toUpperCase())
// pour tout filtre utilisez filter() directement:
// nombres.filter(n => n !== 0)

let form = document.getElementById("taskForm")
// form = document.getElementById("taskForm"); // c'est mal !
let input = document.getElementById("newTask")
let ul = document.getElementById("taskList")


form.addEventListener("submit", (event) => {
    event.preventDefault()
    let li = document.createElement('li')
    li.innerHTML = `<input type="checkbox" name="" id=""><label>${input.value}</label>`
    ul.appendChild(li)
    input.value = ""
}) // callback sur un evenement