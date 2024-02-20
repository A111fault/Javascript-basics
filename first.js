//first create a dot.js file and  a index.html 
// then connec the js file to html fil by <script src="file name"></script>
// right click index.html file and open live server then inspect click console
//In console you will ee your javascript output and also use it as terminal
//console.log is the method in javasrcipt used to print output
console.log("print");

//Variables
names = "Java";
age = 24;

console.log(names);
console.log(age);
x= null;
y= undefined;

console.log(x);
console.log(y);

isfollow = false;
unfollow = true;

/*good thing about javascript is that 
you don't need to declare int, float, char before to declare 
a variable the compiler understands the variable by itself automatially
for it is called dynamically typed language 
which gives the room to give a proper name for the variable*/
/* camel case variable => fullName (should be used)
 all small case varibale => fullname
link case variable => full-name
snake case variable => full_name
pascal case variable => FullName
you can you any tye of cases but camel case is easy and goes well with javascript*/

let totalPrice = 100;
let name = "Java";

const fullName= "Java";

// let cannnot be redeclared but variable value can be changed
//const cannot be redeclared nor updated or changed
//if you type typeof name in console it will give you the type of variable

const student ={
    fullName : "Rahul Java",
    age : 90,
    cgpa : 3,
    isPass : true,
};
//type student in console will give the whole information
console.log(student["fullName"]);
console.log(student);

/*We know we cannot change a const 
variable but we an change it if there is const object with keys*/
 student ["fullName"] = "Rahul";
 console.log(student["fullName"]);


 /* practice question: create a const object called "product" to store information
 as well as print the whole object also try to print in console*/

 const product={
    productName : "pen",
    productCost : 10,
    rating: 5,
    offer : true,
    color: "black"
 };

 console.log(product);


 //Arthmetic Operators plus, minus, multiply, divide, modulus, exponentiation, increment, decrement
let a= 4;
let b=2;

console.log(a+b); // will print the output in console
console.log(a-b);
console.log(a*b);
console.log(a/b);
// if you want ot make it look good

console.log("a + b =", a+b); // will print the output in console
console.log("a - b =", a-b);
console.log("a * b =", a*b);
console.log("a / b =", a/b);
//Modulus
console.log("a % b =", a%b);
//Exponential
console.log("a ** b =", a**b);

//Unary operator like a++ means a=a+1 or a-- means a=a-1 this is post process
//--a and ++a is pre process
//Increment and decrement are unary operator normally seen in loops
//increment
let c = 8;
let d = 4;

console.log("c=",c , "d=", d);
c++;
console.log("c=c+1",c );
//You can also directly code it like  console.log("c=c+1", c++ ); so u dont have to seperately write c++ outside console 

//decrement
d--;
console.log("d=d-1",d );
//You can also directly code it like  console.log("c=c+1", c++ ); so u dont have to seperately write c++ outside console 


//Compact Assignment operators  like: '+=', '-=', '%=', '**=' 
let e = 6;
let f = 8;
let g = 10;
let h = 2;
/* i have declared e,f,g,h there is a reason suppose i have declared only e now if i  do all '+=', '-=', '%=', '**=' each time value will change which will be hard to understand 
for which you can take a bigger number and do all the operations using one variable*/
console.log("e=", e+=4 ); //a=a=4 =10
console.log("f=", f-=4 ); //f=f-4 =4
console.log("g=", g%=4 ); //g=g%4 =2
console.log("h=", h**=4 ); //h=h**4 = 16

// conditional statements
// like == , != , ===(equal to and type) , !== (not equal to and type) , >, >=, <, <=
console.log("e==f or not ", e, "=", f, e==f );
console.log("f===g", f===g);
console.log("g!=h", g!=h );
console.log("h!==2", h!==2 );
console.log("e=", e>4 );
console.log("e=", e<4 );
console.log("e=", e>=4 );
console.log("e=", e<=4 );

//logical operators like: "&&" ,"||", "!"
let cond1 = e>f;
let cond2 = e==f;

console.log("cond1 && cond2", cond1 && cond2);
console.log("cond1 || cond2", cond1 || cond2);
console.log("!cond1 ", ! cond1 );

let ageA = 18;

if(ageA<18){
    console.log("You still a kid")
}
if(ageA>18){
    console.log("You are adult")
}
if(ageA==18){
    console.log("You are a teenager")
}

let mode ="dark";
let color;
if(mode==="dark"){
    color="black";
}else if(mode===blue){
    color="blue";
}
else if(mode===pink){
    color="Pink";
}
else{
    color= "white";
}
console.log(color);

//odd even 
let num =100;
if(num%2==0){
    console.log("Even");
}else{
    console.log("Odd")
}

//prompt and alert
//alert is a onetime popup
//prompt is also a popup but also can take input

let number = prompt("Enter a number");

if(number%5==0){
    console.log(number,"is multiple of 5")
}else{
    console.log(number,"ïs not multiple of 5")
}

 let grade = prompt("Enter marks obtained");

 if(grade>=90 && grade<=100){
    console.log("Your marks obtained grade is A")
 }else if(grade>=70 && grade<=89){
    console.log("Your marks obtained grade is B")
 }else if(grade>=60 && grade<=69){
    console.log("Your marks obtained grade is C")
 }else if(grade>=50 && grade<=59){
    console.log("Your marks obtained grade is D")
 }else if(grade>=0 && grade<=49){
    console.log("Your marks obtained grade is F")
 }
