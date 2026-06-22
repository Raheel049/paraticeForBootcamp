console.log("hello");
(
    
function(){
    console.log("hello");
}()
)

const myInfo = {
    name : "Raheel Ahmed",
    education : "BSCS",
    country : "Pakistan",
    cast : "Rajpoot",
    university : "SMIU"

}
const uni = myInfo["university"]


console.log("myInfo",myInfo);
console.log("name", myInfo.name)
console.log("uni", uni);

const arr = [1,2,"Raheel",true, ];
console.log("arr",arr);

const num = arr.slice(0,2);
console.log("array number",num);

function sum(...numbers){
    let total = 0

    for(const n of numbers){
     total += n
    }
    return total
}

console.log(sum(12,23,45))
console.log(sum(10,23,45,56))

// const objOne = {
//     name : "Raheel",
//     cast : "Rajpoot",
//     address : {
//         city : "Karachi"
//     }
// }

// console.log("Obj 1", objOne);
// console.log(objOne.address.city)

// const newObj = {
//     ...objOne, 
//     education : "BSCS"
// } //shallow copy is ma nested obj ki value copy nhi hoti sarif memory address copy hota ha. jab hum ek object ko kisi variable ma copy kary ka bad 
        // copy  kiye huway obj ki value change kary ga to orginal object ki value bi change ho jay gii Q ka memory address same tha 

// console.log("New obj", newObj);

// newObj.address.city = "Lahore"


// const objOne = {
//     name : "Raheel",
//     education : "BSCS",
//     address : {
//         city : "Karachi"
//     }
// }

// console.log("objOne",objOne)
// const newObj = structuredClone(objOne) //for coyp the obj with out overRide "deep copy"

// deepCopy ma address chage hota ha is liye orignalObj ki value chage nhi hui ha bs jo new variable banaya ha us ka nested obj ma chage aya ha 
//const deepCopy = JSON.parse(JSON.stringify(objOne));
//deepCopy.address.city = "Lahore"
//console.log(objOne.address.city) output = Karachi
//console.log(deepCopy.address.city) output = Lahore


// newObj.university = "SMIU"
// newObj["semester"] = "6th"
// newObj.address.streetNo = "10"

// console.log("newObj", newObj);

// objOne.address.city = "Lahore"





// const thisConcept = {
//     salary : "10000",
//     overTime : "120",
//     name : "Raheel",
//     greet : function () {
//         console.log("Hello",this.name)
//     }

// }

// console.log("this implementation on simple function");
// thisConcept.greet()

// const thisConceptOnArr = {
//     salary : "10000",
//     bonus : "2000",
//     name1 : "Raheel",
//     greet : () => {
//         console.log("Helo",this.name1);
//     }
// }

// console.log("this concept on arror function");
// thisConceptOnArr.greet()

// const array = [1,2,3,4,5,6]
// const arr2 = [1,2,3,4,5,6]

// // array.splice(1,2,10)
// // console.log(array)

// const compare = array.includes(3)
// console.log(compare)







// const methodOfObject = {
//     name : "Raheel",
//     status : "student",
//     university : "SMIU",
//     depatment : "BSCS",
//     semester : "6th"
// }

// console.log("object method Keys",Object.keys(methodOfObject));
// console.log("obj method of values",Object.values(methodOfObject));
// console.log("obj entries method give arry of arry inner are propperties",Object.entries(methodOfObject));
// const arrOfArr = Object.entries(methodOfObject);
// console.log("obj method of convert arry of arry in obj",Object.fromEntries(arrOfArr));
// Object.freeze(methodOfObject)
// methodOfObject.name = "Raheel AHmed"
// console.log("After apply Object.freeze and change name Raheel Ahmed",methodOfObject);
// Object.seal(methodOfObject)
// methodOfObject.cast = "Rajpoot";
// console.log("After applt Object.seal add cast", methodOfObject);




// set ye ek object ha jo ka duplicate value allow nhi krta new sa bnta ha  is ka method has size add delete ha 


// const student = new Set()

// student.add("Raheel");
// student.add("Ali");
// student.add("Karachi");
// student.add("SMIU");

// student.delete("Ali");
// console.log("set ka has ka ans",student.has("Raheel"))
// console.log("set ka size kka ans",student.size)

// console.log("set ka output",student);






// Map bi ek object ha jo ka data collect krta ha but ye data ko key value pair ma save krta ha set get has size selete
// const student = new Map()

// student.set(1, "Raheel");
// student.set(2,"Ahmed");
// student.set(3,"Rao");
// student.set(4,"Rehan");
// console.log("i have applied get",student.get(2))
// console.log("i have applied has method",student.has("Rao"));
// student.delete(1);
// console.log("Map ka output",student);




// method of string slice replace() split(" ") include() toUpperCase() toLowerCase() trim()

// const str = "Raheel Ahmed"
// const cast = "   Rajpoot  "
// let nameStr = "Rahee Rao";

// console.log("Apply toLower to string",str.toLocaleLowerCase())
// console.log("Apply toUpper to string",str.toLocaleUpperCase());
// console.log("Apply split to string",str.split(" "));
// console.log("Apply include to string",str.includes("Raheel Ahmed"));
// console.log("Apply replace to string",nameStr.replace("Rao", "Ahmed"));
// console.log("Apply trim to string",cast.trim(cast))
// for(let i = 0; i < str.length; i++){
//     console.log(str[i]);
// }




// for each
// const arrOFforEach = [1,2,3,4,5,6];
// arrOFforEach.forEach((value,index) => {
//     console.log("Value ",value,index)
// })


// const arrofarr = [
//     ["name","Raheel"],
//     ["cast","Rajpoot"],
//     ["uni", "SMIU"]
// ]

// arrofarr.forEach((value,index) => {
//     console.log('number',index,"value",value)
// })





function User(name, age){
    this.name = name;
    this.age = age;
}



const user1 = new User("Raheel",21)
console.log(user1.name,user1.age)

const name = "Raheel"

for(i = 0; i <= name.length; i++){
    console.log(name[i]);
}

// 1. Object ke andar Callback ki Misal (Regular vs Arrow)
// Sochein ke hamare paas aik user object hai. Jab hum setTimeout jese callback use karte hain, to this ka context kho jata hai.

const user = {
  name: "Ali",
  sayLater: function() {
    // Yahan 'this' 'user' object ko point kar raha hai
    console.log("Pehle:", this.name); // Pehle: Ali

    setTimeout(function() {
      // Regular function ka apna 'this' hota hai, jo window ya undefined ban jata hai
      console.log("Baad mein (Regular):", this.name); 
    }, 1000);
  }
};

user.sayLater();
// Output: 
// Pehle: Ali
// Baad mein (Regular): undefined (Context lose ho gaya!)


Arrow Function ke sath (Context theek rehta hai):
JavaScript
const user = {
  name: "Ali",
  sayLater: function() {
    console.log("Pehle:", this.name); // Pehle: Ali

    setTimeout(() => {
      // Arrow function ka apna 'this' nahi hota, 
      // yeh apne parent (sayLater) se 'this' inherit karta hai
      console.log("Baad mein (Arrow):", this.name); 
    }, 1000);
  }
};

user.sayLater();
// Output: 
// Pehle: Ali
// Baad mein (Arrow): Ali (Bilkul theek, naam print ho gaya!)
