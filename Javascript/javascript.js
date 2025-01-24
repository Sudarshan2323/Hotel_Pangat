// let a=5;
// let b=a++;
// console.log(a+b);

//stack and Heap memory

// let client={
//     name:"Ankit",
//     charges:400
// }
// let user=client
// user["name"]="Priya Shetty";
// user["charges"]=1500;
// console.log(client);ans { name: 'Priya Shetty', charges: 1500 }
// console.log(user); ans { name: 'Priya Shetty', charges: 1500 }

  
// let userr=45;
// let user2=userr;
// user2=55;
// console.log(userr);ans 45
// console.log(user2);ans 55

//array
// let ar=[1,2,3,4];
// let ar2=[6,7,8,9];
// let ar3=[...ar,...ar2]
// console.log(ar);
// console.log(ar2);
// console.log(ar3);
// let array=[1,2,3,[4,5,6],7,8,[9,10,11]]
// console.log(array.flat(Infinity));

//object in javascript

// const sym=Symbol("Love")

// const user={
//     name:"sudarshan",
//     age:21,
//     [sym]:"praju"
// }

// console.log(user[sym]);
// console.log(user[sym]);
// console.log(typeof sym);

// Object.freeze(user);
// user.age=22;
// console.log(user);

// user.suprise=function(){
//     console.log(`Hello World,${this.name}`);
// }
// console.log(user.suprise());
// console.log(user);


// const insta={
//     id:123,
//     userdata:{
//         username:{
//             fullname:"sudarshan Lomate",
//             userid:"458sudarshan"
//         }
//     }
// }
//  console.log(insta);
//  console.log(user);
 
//  console.log(Object.assign({},insta,user));
// let obj={...insta,...user};

// console.log(user.isLoggedIn);
// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));

// const {name : love} = user
// console.log(love);
// console.log(user);

// const sum=(m,n)=>{
//     return m + n;
// }
// let ans=sum(4,6);
// console.log("Result is :",ans);

// const user=(username = "sudarshan")=>{
//     if(!username){
//         return "Empty function is not allowed plese write somthing "
//     }
//     else{
//         return `${username} is logged in`
//     }
// }
// console.log(user("Prajakta"));

// const add=(...x)=>{
//     return x
// }
// console.log(add(5,9,6,8));ans [ 5, 9, 6, 8 ]


// function handle(e){
//     console.log(`This is my name ${e.name} and my age is ${e.age}`);
// }
// handle(user)

// let ar=[1,2,3,4];

// let sum=(e = "Sudarshan")=>{
//     return e
// }
// console.log(sum());

const user={
    "name":"Prajakta Sutar",
    "age":22,
    "isLoggedIn":true,
    msg:function(){
        console.log(`${this.name} welcome`);   
    }
};

user.msg()





















 

