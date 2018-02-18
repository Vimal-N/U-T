/*
For this quiz, change the font-size of all the article-items to 20px!

You must use jQuery's css() method!
*/

// Start with this variable!
var articleItems;

articleItems = $('.article-item');

articleItems.css("font-size","20px")


//===================================================================================================================
/*
For this quiz, use jQuery's val method to make live changes to the 'Cool Articles' <h1>!

The starter code below creates an event listener that will run any time the input changes.
For more on events, check the instructor notes.
*/


$('#input').on('change', function() {
    var val;
    val = $('#input').val();
    h1value = $('#input').siblings().first().text(val);
});


//we are using .html() .txt() .val() methods to get the value of tag with #input as id and next we are setting the text of h1 tag to based on value present in input tag

//===================================================================================================================
/*
For this quiz, remove the <ul> from the first article item!

You must use jQuery's remove() method.
*/

// Start with this variable!
var articleItems;


articleItems = $('.article-item').first().children();  //find the extact tag set we need to work on
articleItems.remove('ul');  //.remove() is used to remove the tag we want by passing in the tag name into parentheses

//NOTE:  WE CAN USE .find() TO FIND THE ul TAG INSIDE THE ARTICLE ITEM AND THEN USED .remove() TO REMOVE THE TAG
/*
var articleItems,ul;

articleItems = $('.article-item');
ul = articleItems.find('ul');
ul.remove();

*/

//==========================================add to the DOM tree================================================

/*
For this quiz, you'll need to add to the DOM tree that already exists.

'#family2' should be a sibling of and come after '#family1'. '#bruce' should be the only immediate child
of '#family2'. '#bruce' should have two <div>s as children, '#madison' and '#hunter'.
*/

var family1,family2,bruce,madison,hunter;

family1 = $('#family1');
family2 = $('<div id="family2"><h1>Family2</h1></div>');
bruce = $('<div id="bruce"><h2>Bruce</h2></div>');
madison=$('<div id="madison"><h3>Madison</h3></div>');
hunter = $('<div id="hunter"><h4>Hunter</h4></div>');

family2.insertAfter(family1);
family2.append(bruce);
bruce.append(madison);
bruce.append(hunter);


