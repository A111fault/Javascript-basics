//Arrays
/*let marks=[97, 82, 75, 64, 34];
console.log(marks);
console.log(marks.length);
// if yoy write in console type of marks it will return you object 
// and yes array is kind of object as it is holding same type of data but inplace of keys there is index

let heroes= ["Ironman", "Hulk", "Spider-man", "Captain_america", "Hawk Eyes", "Bat-man", "Super-man", ];

for(let idx=0; idx<heroes.length;  idx++){
    console.log(heroes[idx]);
}
//another way to run lop with array
for(let hero of heroes){
    console.log(hero);
}*/

// practice problems
let score= [85, 97, 44, 37, 76, 60];
let sum = 0;
for(let val of score){
    sum+= val;
}
console.log(sum);
let avg= sum/ score.length;
console.log(`average marks of the class = ${avg}`);

let items = [ 250, 645, 300, 900, 50];
let i=0;
for(let val of items){
   // console.log(`value at index &(idx)= ${val}`);
    let offer = val / 10; 
    items [i] = items [i] - offer;
    console.log(`value after offer = ${items [i]}`) ;
    i++;
}
//Arrays methods push , pop, toString 
// PUSH() add to end 
// Pop() delete fro end and return
// toString(): convert array to string 

let foodItems = ["potato", "apple", "Litchi", "Tomato"];

foodItems.push("chips", "Burger", "Paneer");
console.log(foodItems);

deleteditem= foodItems.pop();
console.log(deleteditem);
console.log(foodItems);

console.log(foodItems.toString());

let marvelheroes = ["Thor", "Spiderman", "Iron-man"];
let dcheroes=["Superman", "Batman "];

let heroes = marvelheroes.concat(dcheroes);
console.log(heroes);


//unshift method

marvelheroes.unshift("antman");

console.log(marvelheroes);
let val = marvelheroes.shift();
console.log("deleted", val);
console.log(marvelheroes);


//SLice() returns a piece of the array

console.log(marvelheroes.slice(1,2));

//Splice() change the original array (add, remove, replace)
//let arr =[1,2,3,4,5,6,7];
//arr.splice(2,2,101,102);
//add element
//arr.splice(2, 0, 101);
//delete element
//arr.splice(3,1);
//Replace element
//arr.splice(3,1,101);


//Practice 

let companies= ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];

companies.shift();
console.log(companies);
companies.splice(2,1, "Ola");
console.log(companies);
companies.push("Amazon");
console.log(companies);

