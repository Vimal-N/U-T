/*
 * Programming Quiz: Countdown, Liftoff! (4-3)
 *
 * Using a while loop, print out the countdown output above.
 */

/*
Orbiter transfers from ground to internal power (T-50 seconds)
Ground launch sequencer is go for auto sequence start (T-31 seconds)
Activate launch pad sound suppression system (T-16 seconds)
Activate main engine hydrogen burnoff system (T-10 seconds)
Main engine start (T-6 seconds)
Solid rocket booster ignition and liftoff! (T-0 seconds)
*/
// your code goes here
var i=60;

while(i>=0){

    if(i==50){
        console.log("Orbiter transfers from ground to internal power");
    }else if (i==31){
        console.log("Ground launch sequencer is go for auto sequence start");
    }else if (i==16){
        console.log("Activate launch pad sound suppression system");
    }else if (i==10){
        console.log("Activate main engine hydrogen burnoff system");
    }else if (i==6){
        console.log("Main engine start");
    }else if (i===0){
        console.log("Solid rocket booster ignition and liftoff!");
    }else{
        console.log("T-"+i+" seconds");
    }

    i--;

}
