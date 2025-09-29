// BOM (Browser Object Model)

// 1. Open a new window with a specific URL and size, then close it after 3 seconds using JavaScript.
var win = window.open("https://www.google.com/", "_blank", "width=500,height=500");

    setTimeout(() => {
        win.close();
    }, 3000);

// 2. Display the browser's user agent string in an alert.
alert(navigator.userAgent)

// 3. Use `navigator` to detect if the browser is online or offline and log the result.
console.log(navigator.onLine);

// 4. Write code to reload the current page after 5 seconds.
setTimeout(() => {
    location.reload()
}, 5000);

// 5. Get the current page URL, protocol, and hostname using `location` and log them.
console.log(location.href);
console.log(location.protocol);
console.log(location.hostname);

// 6. Use `history` to go back one page, then forward one page (write the code, don't actually run it).
history.back()
history.forward()

// 7. Show the screen width and height in a div -change the div content- on the page.
var screenDiv = document.getElementById("screen");
width = screen.width
height = screen.height
screenDiv.textContent = "width is :" + width + " and height is :" + height;

// 8. Use `setTimeout` to change the content of a hyperlink -a- with a new content after 2 seconds, and provide a button to cancel it.
var time = setTimeout(() => {
  var hyperlink = document.getElementById("Question-8");
  hyperlink.textContent = "changed";
}, 2000);
function cancelHyperLink(){
    clearTimeout(time)
}

// 9. Use `setInterval` to update the time on the page title every second, and a button to stop it.
var title = setInterval(() => {
    document.title = new Date().toString()
}, 1000);
function canceltime(){
    clearInterval(title)
}
// 10. Show a confirm dialog asking "Do you want to continue?" and log the user's choice("user said yes", "user said no").
var choose = confirm("Do you want to continue?")
if (choose){
    console.log("user said yes");
}
else {
    console.log("user said no");
}

// ---
// DOM Traversal (Nodes, Elements, Collections)

// 11. Select the first `<ul>` in the document and log its `childNodes` and `children` properties. Explain the difference in a comment.
console.log(document.getElementsByTagName('ul')[0]);
console.log(document.getElementsByTagName('ul')[0].childNodes);
// first we get the element 
// second we get all children in the ul ( tags and spaces called text )


// 12. Write a function that logs the tag names of all direct child elements of `<body>`.
var body_ele = document.children[0].children[1]

function logBodyChildren(body_ele) {
    var body_children = body_ele.children
    for (var i = 0; i < body_children.length; i++) {
        console.log(body_children[i])
    }
}
logBodyChildren(body_ele)

// 13. Given a parent element, loop through its `childNodes` and log only the nodes that are elements (not text/comments).
var body_ele = document.children[0].children[1]
var body_children = body_ele.childNodes
    for (var i = 0; i < body_children.length; i++) {
        if(body_children[i].nodeName !== "#text")
            console.log(body_children[i])
    }

// 14. Use `firstChild` and `firstElementChild` on a container and explain the difference in a comment.
var container1 = document.getElementById("q14")
console.log(container1.firstChild);
console.log(container1.firstElementChild);
// the first log the first childnode (#text)
// the second log the first element (p)

// 15. Write code to get all `<li>` elements inside a `<ul>` using `children` and explain the difference.
var ul_el =  document.getElementById("q15")
console.log(ul_el.children);
// get all li without any #text unlike the childnode

// 17. Write a function that logs all sibling elements of a given element (excluding itself).
function getsibling(el) {
    var parent_children = el.parentElement.children
    for(var i = 0 ; i < parent_children.length ; i++){
        if(parent_children[i] != el)
        console.log(parent_children[i]);
    }
}

var el = document.getElementById("q17")
getsibling(el)

// 18. Use `nextSibling` and `nextElementSibling` to traverse from the first child to the last child of a `<ul>`, logging each node.
var el = document.getElementById("q18").children[0]
console.log(el.nextSibling.nextSibling);
console.log(el.nextElementSibling);
// in nextElementSibling we skip the #text. we get the elements only not spaces

// 19. Count how many element children a given node has (not using `children.length`).
var el = document.getElementById("q19").children[0]
var cnt = 0
while(el !== null){
    cnt++
    el = el.nextElementSibling
}
console.log(cnt);


// 20. Write a function that takes the first form element and logs the names and values of all its input fields using the `elements` collection.
var form = document.forms[0];
 for (var i = 0; i < form.elements.length; i++)
        console.log(form.elements[i]);
        

// 21. Access all forms in the document using `document.forms` and log their names.
var forms = document.forms
for (var i = 0 ; i < forms.length; i++)
    console.log(forms[i].name);
    

// 22. Access all images in the document using `document.images` and log their `src` attributes.
var images = document.images
for (var i = 0 ; i < images.length; i++)
    console.log(images[i].src);

// 23. Write a function that takes a form and disables all its input fields using the `elements` collection.
var form = document.getElementById("q23")
for(var i = 0 ; i < form.elements.length; i++)
    form.elements[i].disabled = true

// 24. Use `Array.from` to convert `document.images` to an array and filter images with width > 100px.
var images = document.images
var arr = Array.from(images).filter(function(el){
    return el.width >= 100
})
console.log(arr);


// ---
