/*
 * Programming Quiz: Laugh it Off 2 (5-2)
 *
 * Write a function called `laugh` with a parameter named `num` that represents the number of "ha"s to return.
 *
 * Note:
 *  - make sure your the final character is an exclamation mark ("!")
 *  - make sure that your function produces the correct results when it is called multiple times
 */

 var num = 1;
 function laugh(num){
     var message = "";
     for(var i=1;i<=num;++i){
          message += "ha";
         if(i===num){
             message += "!";
         }
     }

     return message
 }

 console.log(laugh(5));
