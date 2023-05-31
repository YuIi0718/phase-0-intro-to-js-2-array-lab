// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"];

function ArrayFunctions(){
    cats.length = 0;
    cats.push('Milo', 'Otis', 'Garfield');
}

function destructivelyAppendCat(name){
    cats.push(name);
}

function destructivelyPrependCat(name){
    cats.unshift(name);
}

function destructivelyRemoveLastCat(){
    cats.pop();
}
function destructivelyRemoveFirstCat(){
    cats.shift();
}

function appendCat(name){
    const cats1 = cats.slice();
    cats1. push(name);
    return cats1;
}

function prependCat(name){
    const cats2 = cats.slice();
    cats2. unshift(name);
    return cats2;
}

function removeLastCat(){
    const cats3 = cats.slice();
    cats3.pop();
    return cats3;
}

function removeFirstCat(){
    const cats4 = cats.slice();
    cats4.shift();
    return cats4;
}