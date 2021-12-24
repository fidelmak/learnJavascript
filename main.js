/*const name ='john';
const age = 30;
const iscool = true;
const rating = 4.5;
const x = null;
const y = undefined ;
let z;

console.log(typeof rating);
console.log(typeof name);
console.log(typeof age);
console.log(typeof x);
console.log(typeof y);
console.log(typeof z);*/

//const name='john';
//const age = 30;
//console.log('my name is ' +name+ 'and i am ' + age);
//const hello ='my name is ${name} and i am ${age}';// this doesnot work brad
//console.log(hello);

/*const s ='hello world';
console.log(s.length);
console.log(s.toLowerCase());
console.log(s.toUpperCase());
console.log(s.substring(0,5). toUpperCase());
console.log(s.split(''));

const v= 'technology, education, science, engineering , business';
console.log(v.split(', '));
*/

/*const fruits =['apples', 'oranges', 'pears', 'watermelon'];
fruits[3] = 'grapes';
fruits.push('mangoes');
fruits.unshift('banana');
fruits.pop();
console.log(fruits);
console.log(fruits.length);
console.log(fruits[1]);
console.log(Array.isArray(fruits));
console.log(fruits.indexOf('oranges'));*/


/*const person = {
    firstName: 'john',
    lastName:'Doe',
    age:30,
    hobbies: ['music','sports','movies'],
    address: {
        street: '50 main st',
        city:'boston',
        state:'MA'

    }
}
person.email='b@hmail.com';
const {firstName, lastName} = person;
const {address:{city}}= person;
console.log(person.firstName, person.lastName);
console.log(person.hobbies[1]);
console.log(person.address.city);

console.log(firstName);
console.log(city);
console.log(person);*/


const todos  = [
    {
    id: 1,
    text: 'take out trash',
    isCompleted: true
    },
    {
        id: 2,
        text: 'meeting with boss',
        isCompleted: true
        },
        {
            id: 3,
            text: 'cinema',
            isCompleted: false
            }
                
];
//const todoJSON= JSON.stringify(todos);
//console.log(todos);
//console.log(todos[1].text);
//console.log(todos[2].text);
//console.log(todoJSON);
//for(let i = 0; i< 100*100; i++) {
   // console.log('for loop number: ${i*100}');

//}


//while loop
/*let i=0;
while(i<10){
    console.log('while loop number:' , i);
    i++;
}//for loop
for(let i=0; i< todos.length; i++){
    console.log(todos[i].text);
}
  //for of for loop
for(let todo of todos){
    //console.log(todo);
    console.log(todo.text);
    console.log(todo.id);

}
// high order array methods.
// forEach Map Filter
todos.forEach(function(todo) {
    console.log(todo.text);
});

const todotext = todos.map(function(todo){
    return todo.text;
}
);
console.log(todotext);

//filter
const todoCompleted = todos.filter(function(todo){
    return todo.isCompleted === true;
});
console.log(todoCompleted); // this below is called functional programming 

const todoCompleted = todos.filter(function(todo){
    return todo.isCompleted === true;
}).map(function(todo){
    return todo.text;
})
console.log(todoCompleted); */


//const x = 7;
//const y =19;
//if(x>5&&y>10) {
   // console.log('x is more than 5 and y is more than 10');
//if(x>5||y>10) {
   // console.log('x is more than 5 or y is more than 10');
/*} else if (x>10){
    console.log('x is greater than 10');}
else{
    console.log('x is less than  10');
}*/


/*const x =1;
//const color=x>10?'red': 'blue';
const color ='green';


switch(color){
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default: 
        console.log('color is not red or blue');
        break;

}
//console.log(color);


function addNums(num1 = 3, num2 = 4){
    //console.log(num1 + num2);
    return num1 + num2;

}
//addNums();
//addNums(5,5);
console.log(addNums(5,5));
const addNums = (num1=1, num2=5) => {
    return num1 + num2;
}

console.log(addNums(22,200));*/
//OOP
// construction function 
/*function Person(firstName, lastName, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob =new Date( dob);

    
    this.getFullName = function(){
        return this.firstName  + this.lastName;
    }

}
Person.prototype.getBirthYear = function(){
    return this.dob.getFullName();
}
Person.prototype.getBirthYear = function(){
    return this.firstName  + this.lastName;
    }

// instantiate object

const person1 = new Person ('be','joe', '4-4-1982');
const person2 = new Person ('rohr','koe', '4-4-1962');
const person3 = new Person ('john','doe', '4-4-1942');
const person4 = new Person ('bnn','dwaqe', '4-4-1932');*/
//console.log(person1, person2, person3, person4);
//console.log(person3.dob.getDay());
// we can add object 

//console.log(person1.getBirthYear());
//console.log(person1.getFullName());
/*console.log(person2.getFullName);
console.log(person4);
*/

//class
/*class Person{
    constructor(firstName, lastName, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob =new Date( dob);
    }
    getBirthYear(){
        return this.dob.getFullYear(); 
    }
    getFullName(){
        return this.firstName + this.lastName; 
    }
    

}
// instantiate object

const person1 = new Person ('be','joe', '4-4-1982');
const person2 = new Person ('rohr','koe', '4-4-1962');
const person3 = new Person ('john','doe', '4-4-1942');
const person4 = new Person ('bnn','dwaqe', '4-4-1932');

console.log(person2.getFullName());
console.log(person3);
*/

// DOM
// selecting things from the dom.. 
//single selector and multiple selector
//console.log(window);
//alert(1);

//single element selector
//console.log(document.getElementById('my-form'));
//const form= document.getElementById('my-form');
//console.log(form);
//console.log(document.querySelector('.container'));
//console.log(document.querySelector('h1'));



// multiple selector
//console.log(document.querySelectorAll('.item'));
//console.log(document.getElementsByClassName('item'));
//console.log(document.getElementsByTagName('li'));


//loop through

//const items= document.querySelectorAll('.item');

//items.forEach((item) => console.log(item));

// manipulating the Dom
//const ul = document.querySelector('.items');
//ul.remove();
//ul.lastElementChild.remove();
//ul.firstElementChild.textContent = "hello word" ;
//ul.children[1].innerText = 'paul';
//ul.lastElementChild.innerHTML = "<h4>hello</h4>";

//changing styles
//const btn = document.querySelector('.btn');
//btn.style.background= "blue";


// Events
//const btn = document.querySelector('.btn');
//btn.addEventListener('mouseout', (e) => {
//btn.addEventListener('mouseover', (e) => {
//btn.addEventListener('click', (e) => {
    //e.preventDefault();
    //console.log('click');
    //console.log(e);
    //console.log(e.target);
    //console.log(e.target.className);
   // document.querySelector('#my-form').style.background="#ccc112";
   // document.querySelector('body').classList.add('#000000');
   // document.querySelector('.items')
    //.lastElementChild.innerHTML = '<h1>hello people</h1>';
//});





const myform= document.querySelector('#my-form');
const nameinput= document.querySelector('#name');
const emailinput= document.querySelector('#email');
const msg= document.querySelector('.msg');
const userList= document.querySelector('#user');


myform.addEventListener('submit', onSubmit);
function onSubmit(e) {
        e.preventDefault();
    

       console.log(nameinput.value);
    if (nameinput.value=== '' || emailinput.value === '' ){
        msg.innerHTML = "please enter all fields ";

        setTimeout(() => msg.remove(), 3000);
    } else {
        const li = document.querySelector('#li');
        //const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameinput.value} : ${emailinput.value} ,`)  );
        console.log('sucess');
        //li.append(nameinput.value, emailinput.value);
        //console.log('sucess');

        //userList.appendChild(li);

        //clear fields
        nameinput.value=" ";
        emailinput.value = " ";

    }

}









































































































































































