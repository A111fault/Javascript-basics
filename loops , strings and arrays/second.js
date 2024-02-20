//loops are used to execute a piece of code again and again 

/*for(let i=1; i<=3; i++){
    console.log("For loop sentence",i);
}
console.log("loop ended");

let sum=0;
for(let i=1; i<=5; i++){
    sum=sum+i;
    console.log(sum);
}
console.log("sum=",sum);

let j=20;
while(j<25){
    console.log("While running", j);
    j++;
}

k=20;
do{
    console.log("do while",k);
    k++;
}while(k<25);

//for of loop
let str="for-of loop";
for(let i of str){
    console.log("i=",i);
}

let sta= "javascript";

let size=0;
for(let i of sta){
    console.log("i=", i);
    size++
}
console.log(size);

//for in loop
let student ={
    name: "Jonathan",
    age: 29,
    cgpa: 3.8,
    isPass: true,
};

for(let key in student){
    console.log("key=",  key, "Value=", student[key]);
}
//practice qn1
for(let num=0; num<= 100; num++){
    if(num%2 !==0){
        console.log("num=",num);
    }
}

//practice qn2
let gameNum =25;

let userNum=prompt("Guess the game number:" );

while(userNum!=gameNum){
    userNum= prompt("You entered the wrong number. Guess again:");
}
console.log("congratulations, you entered the right number");


//strings
//let str = "name" to declare
//str.length to print the string size
//str[position/number] will print the letter of the string in that position
//Template literals

let obj={
    item: "Pen",
    price: 10,
}
let output = `the cost of ${obj.item} is ${obj.price} rupees`;
console.log(output);

// \n \t escape character

//string methods
//str.toUpperCase() coverts all the letter to upper case
//str.toLowerCase() converts all the letter to lower case letters
//str.trim() removes white spaces from front and back 
//string methods doesnot change the source but will create a new string
let strb= "String";
//AS i have put the new string in previosly declared variable string will change
strb = strb.toUpperCase();
console.log(strb);

let strc ="Jerry Rig everything";
let strd = strc.toLowerCase();
console.log(strc);
console.log(strd);

let stre = "     destroyer of the worlds mayb i am or mayb i was framed  ";
 stre = stre.trim();
console.log(stre);

//str.slice(start.end)
console.log(strd.slice(0,10));
//str.concat(str2) joins string 
console.log(strb.concat(strd));
//str.replace(searchVal, newVal)
console.log(stre.replace("h","a"));
//str.charAt(index number)
console.log(strd.charAt(4));
*/
/*practice question1: Promt the user to enter theri full name. Geerate a username for them based on the input.
Start username with @, followed by their full name and ending with ullname length.*/

/*let fullName= prompt("please enter your full name without spaces:");
let userName= "@" + fullName + fullName.length;
console.log(userName);
*/