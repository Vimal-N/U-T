/*
 * Programming Quiz: Murder Mystery (3-4)
 */

// change the value of `room` and `suspect` to test your code

/*
======================================================================================
four rooms: the ballroom, gallery, billiards room, and dining room
four weapons: poison, a trophy, a pool stick, and a knife
and four suspects: Mr. Parkes, Ms. Van Cleve, Mrs. Sparr, and Mr. Kalehoff
======================================================================================
the poison belongs to the ballroom,
the trophy belongs to the gallery,
the pool stick belongs to the billiards room,
and the knife belongs to the dining room.
======================================================================================
Mr. Kalehoff was located in the ballroom.
Ms. Van Cleve was located in the gallery.
Mrs. Sparr was located in the billiards room.
Mr. Parkes was located in the dining room.
======================================================================================
*/

// change the value of `room` and `suspect` to test your code
var room = "dining room";
var suspect = "Mr. Parkes";

var weapon ="";
var solved = false;

if (room=="dining room") {
    weapon ="knife";
} else if (room=="ballroom") {
    weapon ="poison";
} else if (room=="gallery") {
    weapon ="trophy";
} else if (room=="billiards room") {
     weapon ="pool stick";
}

//console.log(weapon);
if (room=="dining room" && weapon =="knife" && suspect =="Mr. Parkes") {
    solved = true;
} else if (room=="ballroom" && weapon =="poison" && suspect =="Mr. Kalehoff") {
    solved = true;
} else if (room=="gallery" && weapon =="trophy" && suspect =="Ms. Van Cleve") {
    solved = true;
} else if (room=="billiards room" && weapon =="pool stick" && suspect =="Mrs. Sparr"){
    solved = true;
}

if (solved) {
	console.log(suspect+" did it in the "+room+" with the "+weapon+"!");
}
