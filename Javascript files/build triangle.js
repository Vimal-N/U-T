/*
 * Programming Quiz: Build A Triangle (5-3)
 */

// creates a line of * for a given length
function makeLine(length) {
    var line = "";
    for (var j = 1; j <= length; j++) {
        line += "* ";
    }
    return line + "\n";
}

// your code goes here.  Make sure you call makeLine() in your own code.
function buildTriangle(trianglewidth){
    var finalline;
    for(var i=1;i<=trianglewidth;i++){
        if(i==1) { finalline = makeLine(i); }
        else     { finalline += makeLine(i); }
    }
    return finalline;
}

//console.log(makeLine(9));
// console.log(makeLine(10));
// test your code by uncommenting the following line
console.log(buildTriangle(10));
