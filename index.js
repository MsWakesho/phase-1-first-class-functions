function receivesAFunction(callback){
    callback();
} // This returns a named function, where "callback" is the named function. 

function  returnsANamedFunction (){
    return function namedFunction(){

    };
} // this returns an named function

function returnsAnAnonymousFunction(){
    return function(){

    };
} // This returns an anonymous function, the returned value is a function that doesn't have a name.
