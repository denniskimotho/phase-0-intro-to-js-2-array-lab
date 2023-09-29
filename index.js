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
         
      const newCats = [...cats, name];
      
    return newCats;
}

const prependCat=(name)=>{

    const newCats = [name, ...cats];

    return newCats
}

const removeLastCat = () =>{
    let newCats = cats.slice(0,-1);

    return newCats;
}


const removeFirstCat = ()=>{

    let newCats = cats

    return newCats.slice(1);
}

// console.log(removeFirstCat())