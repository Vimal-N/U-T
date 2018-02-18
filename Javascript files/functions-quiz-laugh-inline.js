
/*
*this is laugh quiz
*/
var laugh = function(num){
    var finalstatment="";
    for (i=0;i<num;++i){
        finalstatment += "ha"
    }
    // if(num>0)?
    finalstatment += "!";
    return finalstatment;
}

console.log(laugh(0));

/*
*this is inline quiz
*/
/*
 * Programming Quiz: Inline Functions (5-6)
 */

// don't change this code
function emotions(myString, myFunc) {
    console.log("I am " + myString + ", " + myFunc(2));
}

// your code goes here
// call the emotions function here and pass in an
// inline function expression

emotions("happy",function(num){
    var finalstatment="";
    for (i=0;i<num;++i){
        finalstatment += "ha"
    }
    // if(num>0)?
    finalstatment += "!";
    return finalstatment;
})

// output of the inline function
//I am happy, haha!
