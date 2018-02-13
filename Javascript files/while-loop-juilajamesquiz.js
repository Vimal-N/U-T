/*
 * Programming Quiz: JuliaJames (4-1)
 */

var x = 1;

while (x<=20) {

    if((x%3)==0 && (x%5)!=0) {
        console.log("Julia");
    } else if ((x%5)===0 && (x%3)!=0 ){
        console.log("James");
    }else if (((x%3)!=0)||((x%5)!=0)){
        console.log(x);
    }else if ((x%3)==0 && (x%5)==0){
        console.log("JuliaJames");
    }

    //((x%3)===0)?console.log("Julia"):((x%5)===0)?console.log("James"):console.log(x);

    // check divisibility
    // print Julia, James, or JuliaJames

    x = x+1;

}
