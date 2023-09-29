// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"]

const destructivelyAppendCat = (name) =>{
    cats.push(name)
}

const destructivelyPrependCat = (name) =>{
    cats.unshift(name)
}

const destructivelyRemoveLastCat = function(){
    cats.pop()
}
const destructivelyRemoveFirstCat = () =>{
    cats.shift()
}

function appendCat(name){
         
      const newCats = [
        ...cats.slice(0, 1, 2),
        name
      ];
      
    return newCats;
}

const prependCat=(name)=>{

}

const removeLastCat = () =>{
    let newCats = cats

    return newCats.pop()
}

const removeFirstCat = ()=>{
    let newCats = cats
    return newCats.shift()
}