// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(){
    cats.push("Ralph");
};
function destructivelyPrependCat(){
    cats.unshift("Bob");
};
function destructivelyRemoveLastCat(){
    cats.splice(-1);
};
function destructivelyRemoveFirstCat(){
    cats.splice(0, 1);
};
function appendCat() {
    appendCat = [...cats, "Broom"];
    return appendCat
};
function prependCat(){
    prependCat = ["Arnold", ...cats];
    return prependCat
};
function removeLastCat(){
    return cats.slice(0, -1);
};
function removeFirstCat(){
    return cats.slice(1);
};