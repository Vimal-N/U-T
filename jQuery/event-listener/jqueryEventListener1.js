/*
target element 	: #my-button
listen to 		: click
perform			: remove button from DOM and class success to the body
*/

$('#my-button').on('click',function(){

    $(this).remove();
    var bodytag = $('body');
    bodytag.attr('class','success');
});