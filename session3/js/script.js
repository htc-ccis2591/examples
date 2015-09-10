// Let's get the h2.
var headings = document.getElementsByTagName("h2");
console.log(headings);

// When you get elements by tag name you get back an array,
// Even if it's only one element.  So headings is an array.

for (i = 0; i < headings.length; i++) {
    current_heading = headings[i]
    alert("Heading is: " + current_heading.firstChild.nodeValue);
}

// Let's get the h6's - Note there aren't any!

var headings = document.getElementsByTagName("h6");
console.log(headings);  // This logs an empty array

for (i = 0; i < headings.length; i++) {
    // Because there are no h6s, the length is 0
    // And we never get into this loop.
    alert("This will never happen!");
}

// Get the menu element by id
var menu = document.getElementById("menu");
console.log(menu);

// Get the first child of menu.  What is it?
console.log("Logging the first child of menu to see what it is.");
console.log(menu.firstChild);
console.log("Logging the first Element child of menu - should be the h2.");
console.log(menu.firstElementChild);

// Let's log all the children 
// How to do this... Hi Google!

//var menu_children = menu.childNodes;  // you get empty text
var menu_children = menu.children;      // you only get elements
console.log("Logging the children of menu:");
console.log(menu_children);

// Let's add a click handler to alert the text in each child.
for (i = 0; i < menu_children.length; i++) {
    child = menu_children[i];
    child.onclick = function() {
        if (this.firstElementChild != null) {
            alert("The child is: " + this.firstElementChild.nodeName);
        } else if (this.firstChild != null) {
            alert("The child is: " + this.firstChild.nodeValue);
        } else {
            alert("The element " + this.nodeName + " has no children.");
        }
    };
}

//Let's get the h2 a different way
// We know it is under the menu, so we can start there 
// instead of searching the whole document.
menu_headings = menu.getElementsByTagName("h2");

same-h2 = menu.firstElementChild;

















