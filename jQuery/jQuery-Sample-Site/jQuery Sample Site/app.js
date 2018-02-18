/*

For this quiz, can you use this script, which is linked in the <head> of index.html,
to change the boring placeholder image to a picture of a cute animal?

Remember, you'll need to pass a function into the jQuery object to run
when the document is ready.

Unfortunately, placepuppy is no longer available. Here's a link to a random
animal image on lorempixel.com:
http://lorempixel.com/350/150/animals/

Good luck!

*/
$(addingImage);

function addingImage(){

//"http://placekitten.com/350/150"

$('li').find("img").attr("src","http://placekitten.com/350/150");
$('li').find("img").attr("alt","kitten photo");

}

// NOTE : I used $('li').find("img") to specifically find img tag within li. but this can be written even more specifically