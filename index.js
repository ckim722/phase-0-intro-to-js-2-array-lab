// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name){
    cats.push(name)
}

function destructivelyPrependCat(name){
    //prepends a cat to the beginning of the cats array
    cats.unshift(name)
}

function destructivelyRemoveLastCat(name){
    //removes the last cat from the cats array
    cats.pop(name)
}

function destructivelyRemoveFirstCat(name){
    cats.shift(name)
    //removes the first cat from the cats array
}

function appendCat(name){
    //appends a cat to the cats array and returns a new array,
    //leaving the cats array unchanged
    const copyCats = [...cats, name];
    return copyCats;
}

function prependCat(name){
    //prepends a cat to the cats array and returns a new array, 
    //leaving the cats array unchanged
    const copyCats = [name, ...cats]
    return copyCats;
}

function removeLastCat(){
    //removes the last cat in the cats array and returns a new array,
    //leaving the cats array unchanged
    const copyCats = [...cats]
    copyCats.pop();
    return copyCats;
}

function removeFirstCat(){
    //removes the first cat from the cats array and returns a new array,
    //leaving the cats array unchanged
    const copyCats = [...cats]
    copyCats.shift();
    return copyCats;
}

