var rect = require('./rectangle');
function solveRect(l,b) {
    console.log ("solving for rectangle with l=" +l + "and b=" +b);

    rect(l, b, (err, rectangle)  => {
        if(err){
            console.log("Error=", err.messeage);
        }
        else {
            console.log("the area of the rectangle is"+ rectangle.area(l,b));
            console.log("the perimetre of the rectangle is"+ rectangle.perimetre(l,b)); 
        }
    }) 
    console.log("this statement is after the call of rect")  
}

solveRect(2,4);
solveRect(5,6);