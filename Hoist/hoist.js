// 1
console.log(hello);                                   
var hello = 'world';  // Undefined
// var hello 
// console.log(hello);
// hello = 'world';

// 2 
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
} // magnet

// 3
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan); // super cool
// var brendan = 'super cool';
// console.log(brendan);

// 4 
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
} // chicken

// 5
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food); // error

// 6
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre); // error 
// var genre = "disco";












