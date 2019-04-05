// array with 3 functions and call each function
let func1 = function oneFunc(){
    console.log("function1");
}
let func2 = function twoFunc(){
    console.log("function2");
}
let func3 = function threeFunc(){
    console.log("function3");
}
let functionsAsVariables = [func1,func2,func3];
//forEach() method execute once for each array element
functionsAsVariables.forEach(function(element)
{
    element();
}) 
//create a function as const and try create a function normally then call both funs
const funcConst = function constFunc(){
  console.log("constant function");
}
funcConst();
function normal(){
    console.log("Normal function");
}
normal();
//create an object that has key value with function then call function
let obj = {
    func : function objectFunc(){
        console.log("This is function in object");
    }
}
obj.func();
//create function(outer) that returns function(inner)
function outerFunc(){
    return innerFunc;
}
function innerFunc()
{
    console.log("This is inner function");
}
let result = outerFunc();
//calling inner function 
result();