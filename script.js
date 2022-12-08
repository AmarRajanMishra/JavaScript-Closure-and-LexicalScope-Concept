// Closure Concept

// var sum = (a) =>{
//     console.log('Hello Students '+a)
//     var c = 4;
//     return function(b){
//         return a+b+c;

//     }
// }
// var store = sum(2); // calling
// console.log(store(5))


var sum = (a,b,c) =>{
    
    return {
        getSumTwo:function(){
            return a+b
        },
        getSumThree:function(){
            return a+b+c;
        }

    }

    
}
var store = sum(2,5,8); // calling
console.log(store.getSumTwo())
console.log(store.getSumThree())




