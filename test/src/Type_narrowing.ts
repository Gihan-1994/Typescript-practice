type hello = "word";

const text:hello = "word";
console.log(text);



/*
let user ={
name : "Gihan",
Age : 29

}as const
 user.name = "Pika";

 
 
 const user  = <const>{
    name : "Gihan",
    Age : 29
    
    }
     console.log(user.Age);

     
****************
const Arr = [2,4,5];
Arr[2]= 5;
console.log(Arr);


const Arry =<const>[2,4,5];
 Arry[2]= 8;  
console.log(Arry);

******************

let numbers:number[]=[3,42,2,]
numbers.forEach(element => {
   console.log(element.toLocaleString());
   
});

//******************


let Details:[string,number]=["Gihan",29]
//Details.push(1);
console.log(Details[1]);

//***********************


enum trees{
   small = "grass",
   medium = "Rose" ,
   Large = 100
}
let Select_tree:trees = trees.medium

console.log(Select_tree);
 
let income:number
function Calculate_my_income(profits:number , loses:number):number{

income = profits -loses ;

return income;

}

console.log(Calculate_my_income(100,34));


let bioData:{
   name:String,
   age:number,
   B_date : (date:Date) => number ,
   greeting : () =>void 

}={
   name: "Gihan",
   age: 29,
   B_date:function(date:Date)
   { 
      console.log(date.getDate());
      return date.getDate();
   },
   greeting : () =>
   {
      console.log(`congratulations! ${bioData.name} U got this`)
   }

}
let Get_Date = bioData.B_date;
console.log(Get_Date(new Date()));
console.log(bioData.greeting());


type Biodata={
   name:String,
   age:number,
   B_date : (date:Date) => number ,
   greeting : () =>void 

}
let employee_1={
   name: "Yasith",
   age: 24,
   B_date:function(date:Date)
   { 
      console.log(date.getDate());
      return date.getDate();
   },
   greeting : () =>
   {
      console.log(`congratulations! ${employee_1.name} U got this`)
   }

}
let employee_2={
   name: "Madura",
   age: 25,
   B_date:function(date:Date)
   { 
      console.log(date.getDate());
      return date.getDate();
   },
   greeting : () =>
   {
      console.log(`congratulations! ${employee_2.name} U got this`)
   }

}

function printEmployeeDetails(employee: Biodata): void {
   
   console.log(`Name: ${employee.name}`);
   console.log(`Age: ${employee.age}`);
   // Call the B_date function to simulate getting the birthdate
   employee.B_date(new Date());
   employee.greeting();
  //return `details for ${employee.name}`;
   
 }
 console.log(printEmployeeDetails(employee_1));
 console.log(printEmployeeDetails(employee_2));



 type User ={
name: string,
email: string,
isActive:boolean
 }

 function createUser(user:User):User{

      return user;
 }
//console.log(createUser({name:"Gihan" ,email: "N@G", isActive:false}));

let getAny = createUser({name:"Gihan" ,email: "N@G", isActive:false})
console.log(getAny.email);


class Calculator {
   private logOperation(operation: string, result: number): void {
     console.log(`Performed ${operation}, result : ${result}`);
   }
 
   public add(a: number, b: number): number {
     const result = a + b;
     this.logOperation("addition", result); 
     return result;
   }
 }
 
 const calc = new Calculator();
 console.log(calc.add(2, 3));
 
class Calculator {
   private logOperation(operation: string, result: number): void {
     console.log(`Performed ${operation}, result is: ${result}`);
   }
 
   public add(a: number, b: number):void {
     const result = a + b;
     this.logOperation("addition", result);
    
   }
 }
 
 const calc = new Calculator();
calc.add(2, 3);


*/
interface Id {
   id: number;
 }
 
 class IdBox<U,T extends Id> {
   P_id : T;
   name: U;

 
   constructor(value1: U ,value2:T )
    {
     this.P_id = value2;
     this.name = value1;
   }
 
   getId(): number {
     return this.P_id.id;
   }
   getName():U{
      return this.name
   }
 }
 
 const idbox = new IdBox( "Gihan",{ id:4});
 console.log(idbox.getId());
 console.log(idbox.getName());