//A javaScript object is an entity having state and behaviour(porperties and method)
//JavaScript objects have a special property called prototype
//We can set prototype using __proto__
//If object and prototype have same method, objects mwthod will be used.
const student={
    fullName: "Jason",
    marks: 90,
    printMarks: function() {
        console.log("marks:", this.marks); //This is a keyword to access marks
    },
}
/* in console type 
let arr=["apple", "mango", "banana"];
hit enter shows undefined but the an array is created
if you type the arrays name it will show the array
type typeof array's name it will show object
now type arraysname.push("any name ");
it will actually push the name you written and show you the new array
*/

//another object with function 

const employee={
    calcTax(){
        console.log("tax rate is 10%");
    },
    // the function can be written also like this with many declaraion 
    calcTax2 : function (){
        console.log("tax is 10%");
    }
}

const jasonBruno={
    salary: 50000,
    calcTax(){
        console.log("tax rate is 30%");
        // there was an calcTax in employee while jason was the employee but the calcTax in jason object will get the priority
        //if you type jasonBruno.calcTax() you will get "tax rate is 30%"
    }
}

jasonBruno.__proto = employee;
// in console type jasonBruno.calTax() it will show the tax rate

//classes is a progra-code template for creating objects.
//Those objects will have some state variables and some behaviour functions inside it

class car {
    start(){
        console.log("start");
    }
    stop(){
        console.log("stop");
    }
    setBrand(brand){
        this.brandName = brand;//only for individual
    }
}
let fortuner= new car();
fortuner.setBrand("fortuner"); // how to create a object or a class
let prado= new car();

//constructor() is a a method which is automaticaly created in a object
// it can initialize object 
//like inside class car write constructor(){inside it if you now initialize anything it will show first}

//Inheritance is passing down properties and methods from parent class to child class
//when we want to make a child class of a parent class to inherit ithe parent class properties we use child extends Parent{}
class Parent{
    hello(){
        console.log("hello");
    }
}
// to reduce repeatation we use inheritance 
class Child extends Parent{}
let obj= new Child();

class person{
    constructor(name){
        console.log("Enter parent constructor:");
        this.group = "working group people";
        this.name = name;
    }
    eat(){
        console.log("eat");
    }
    sleep(){
        console.log("sleep");
    }
    work(){
        console.log("Do nothing");
    }
}
class Engineer extends person{
    constructor(branch){
        console.log("Enter child constructor:");
        super(name); //to invoke parent class constructor
        this.branch = branch;
    }
    work(){
        console.log("solve problems, build soething");
    }
}
let jasonObj = new Engineer();
//if child and parent have the same method then childs method will be used.[method overriding]

//super keyword. The super keyword is used to call the constructor ofits parent clas to access the parents properties and methods.
let engObj = new Engineer("Jason Borne");
// now in console type engObj you will get a branch and the person group 


//Practice question: You are creating a website for your college. Create a class User with 2 properties, name and email. It also has a method called viewData() that allows to view website data.

let Data = "secret information";

class User{
    constructor(name,email){
        this.name = name;
        this.email =email;
    }
    viewData(){
        console.log("Website Data", Data);
    }
}

let student1 = new User("Drake", "drake47@gmail.com");
let student2 = new User("Lin", "lin2424@gmail.com");


//Part-2: create a new class called Admin which inherits form user. Add a new method called editData to Admin that allows it to edit website data.

class Admin extends User{
    constructor(name,email){
        super(name,email);
    }
    editData(){
        Data = "some new data";
    }
}

let admin1 = new Admin("admin", "admin123@gmail.com");

//Error handling 
//In javascript if there is any error in any line the code will run upto the error line to show error but it wont run after that 
//in console window you will get the error message 
//so there comes try and catch 
// suppose you know there might be error in some line so you write that line in try{"the code you are uncertain about"}cath(err){console.log(err);}
// by doing so your whole code will run but the error part will be in try cathch to show if there is error or not 