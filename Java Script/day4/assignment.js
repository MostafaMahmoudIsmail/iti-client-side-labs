// 1. Select the first <div> on the page using getElementsByTagName and log its innerHTML.
var div = document.getElementsByTagName("div")[0].textContent = "hello world"
console.log(div);

// 2. Using getElementById change the text of #my-p to "Hello DOM".
var p = document.getElementById("my-p").textContent = "Hello Dom"

// 3. Use querySelector to select the element with class "target-div" and log its nodeName.
var div = document.querySelector(".target-div")
console.log(div.nodeName);


// 4. Use querySelectorAll to count how many <div> elements exist; log the count.
var div = document.querySelectorAll("div")
console.log(div.length);


// 5. Use getElementsByName on the email input (name="user-email") and set its value to "user@test.com".
var ele = document.getElementsByName("user-email")[0].value = "user@test.com"

// 6. Check if the text input has a "name" attribute; if not add name="user-name" via setAttribute.
var ele = document.getElementById("my-input")
if(ele.hasAttribute("name")){
    console.log("has attribute");
}
else {
    ele.setAttribute("name","user-name")
}
console.log(ele.attributes);

// 7. Append the string " - UPDATED" to the existing innerText of #my-p (keep original text).
var p = document.getElementById("my-p").textContent += " - UPDATED"

// 8. Create Images slider that work automatically and with next/prev/start/stop buttons.
srcs = ["/images/aerial-beautiful.jpg","/images/lone-tree.jpg","/images/morskie-oko-tatry.jpg"]
srcs_idx = 0
src_now = "/images/aerial-beautiful.jpg"
var slider_image = document.getElementById("slider-image")
var sliderInterval = start()
function next() {
    srcs_idx++
    srcs_idx = (srcs_idx % 3)
    slider_image.setAttribute("src", srcs[srcs_idx])
}
function back() {
    srcs_idx--
    srcs_idx = (srcs_idx+srcs.length) % srcs.length
    slider_image.setAttribute("src", srcs[srcs_idx])
}
function pause() {
    clearInterval(sliderInterval)
}
function start() {
    return setInterval(() => {
    src_now = srcs[srcs_idx]
    slider_image.setAttribute("src", srcs[srcs_idx])
    srcs_idx++
    srcs_idx = (srcs_idx  % 3)
    }, 1000);
}

// 9. Set the placeholder of the text input to "Type your full name" using setAttribute.
var ele = document.getElementById("my-input").setAttribute("placeholder","Type your full name")

// 10. Log whether the email input has attribute "required"; if missing add it.
var ele = document.getElementById("my-email")
if (!ele.hasAttribute("required")){
    ele.setAttribute("required","True")
}


// 11. Write function getSelectedValue(selectId) returning the current selected option value.
var selectId = "my-select"
function getSelectedValue(selectId){
    var ele = document.getElementById(selectId)
    console.log(ele.value);
}
getSelectedValue(selectId)
// 12. Loop through all options of the select and log each option's text and value.
var selectId = "my-select"
function getSelectedValue(selectId){
    var ele = document.getElementById(selectId)
    for(var i = 0 ; i < ele.length; i++){
        console.log(ele[i].text,ele[i].value);
    }
}
getSelectedValue(selectId)


// 13. Programmatically select the option with value "EG".
var selectId = "my-select"
function getSelectedValue(selectId){
    var ele = document.getElementById(selectId)
    ele.value = "EG"
}
getSelectedValue(selectId)


// 14. Create function selectByText(selectId, text) that selects the first option whose text matches exactly.
var selectId = "my-select"
function selectByText(selectId, text){
    var ele = document.getElementById(selectId)
    for(var i = 0 ; i < ele.length; i++){
        if (ele[i].value === text){
            ele.value = text
        }
    }
}
selectByText(selectId, "uk")
// 15. Replace innerHTML of #div-2 with a <p><b>Bold Text</b></p> (ensure bold renders, not printed literally).
var ele = document.getElementById("div-2").innerHTML = "<p><b>Bold Text</b></p>"

// 16. Add classes class-a and class-b to #div-2 then remove class-b (using classList).
var ele = document.getElementById("div-2")
ele.classList.add("class-a")
ele.classList.add("class-b")
console.log(ele);
ele.classList.remove("class-b")
console.log(ele);


// 17. Toggle class "hidden" on #div-2 twice; comment final visibility.
var ele = document.getElementById("div-2")
ele.classList.toggle("hidden")
ele.classList.toggle("hidden")
// hidden if not has this attribute. show it if not has it ( now it appear )


// 18. Create function insertAfter(refNode, newNode) that inserts newNode immediately after refNode.
var new_ele = document.createElement("div")
new_ele.innerHTML = "sasa"
var ele = document.getElementById("div-2")
function insertAfter(refNode, newNode){
    var parent = refNode.parentNode
    parent.insertBefore(newNode,refNode.nextSibling)
}
insertAfter(ele, new_ele)
// 19. Create a new <div> saying "Dynamic Box" with yellow background and append inside #div-2.
var ele = document.createElement("div")
ele.textContent = "Dynamic Box"
ele.style.background = "yellow"
var div2 = document.getElementById("div-2")
div2.appendChild(ele)

// 20. Insert a new <p> BEFORE the first child of #div-2 (insertBefore).
var ele = document.getElementById("div-2")
var new_p = document.createElement("p")
new_p.textContent = "ssasasa"
ele.insertBefore(new_p,ele.firstChild)

// 21. Insert a <span> with text "AFTER END" right after #div-2 using insertAdjacentHTML.
var ele = document.getElementById("div-2")
ele.insertAdjacentHTML("afterend","<span>AFTER END</span>")

// 22. Form onsubmit: prevent default and log values of text, email, and select inputs.
var form = document.forms[0]
addEventListener("submit",function(e){
    e.preventDefault();
    for(var i = 0 ; i < form.elements.length; i++){
        console.log(form.elements[i].value);
    }
});

// 23. Add input event on the text input that logs its length whenever it changes.
var textInput = document.getElementById("my-input");
textInput.addEventListener("input", function() {
    console.log("length is : ", textInput.value.length);
});


// 24. Write validateEmailSimple(value) returning true if value contains both '@' and '.'; add 2 passing / 2 failing examples (comments).
function validateEmailSimple(value){
    if(!value.includes("@"))return false
    if(!value.includes("."))return false
    return true
}
console.log(validateEmailSimple("a@example.com"))
console.log(validateEmailSimple("a.b@gmail.com"))
console.log(validateEmailSimple("ugmail.com"))
console.log(validateEmailSimple("u@com"))

// 25. Create an element, append it to #div-2, then remove it using parent.removeChild(child).
var ele = document.createElement("p")
ele.textContent = "sasasa"
var div2 = document.getElementById("div-2")
div2.appendChild(ele)
div2.removeChild(ele)


// 25. Create an element, append it to <div id="wrapper">
//   <p id="first">First</p>
//   <p id="second">Second</p>
// </div>
var parent = document.getElementById("wrapper")
var ele = document.getElementById("second")
var new_ele = document.createElement("p")
new_ele.textContent = "ssssssssss"
parent.insertBefore(new_ele,ele)


// 26. Clone #div-2 , set clone id="div-2-clone", and insert it after original using insertAfter.
var div2 = document.getElementById("div-2");
var div2Clone = div2.cloneNode(true); 
div2Clone.id = 'div-2-clone';               
console.log(div2Clone);
var parent = div2.parentNode;
parent.insertBefore(div2Clone, div2.nextSibling);

// 27. Highlight all text & email inputs (green border) in a function highlightInputs(form) and call it on DOMContentLoaded.
document.addEventListener("DOMContentLoaded",function(){
    function highlightInputs(form){
    for(var i = 0 ; i < form.length ; i++){
        if(form.elements[i].type === "email" || form.elements[i].type === "text")
            form.elements[i].style.borderColor = "green"
    }
    }
    var f = document.forms[0]
    highlightInputs(f)
});

// 28. Build function buildCard(title, content) returning <div class="card"> with an <h3> and <p>; append two cards to body.

function buildCard(title, content) {
    var c = document.createElement("div")
    c.className = "card"
    var h3 = document.createElement("h3")
    h3.textContent = title
    var p = document.createElement("p")
    p.textContent = content
    c.appendChild(h3)
    c.appendChild(p)
    return c
}
document.body.appendChild(buildCard("Card1", "card1 content"))
document.body.appendChild(buildCard("Card2", "card2 content"))

// 29. Add delegated click listener on body logging when a .card is clicked.
document.body.addEventListener("click", function(e) {
    if (e.target.classList.contains("card")) {
        console.log( "clicked:",e.target );
    }
});

// 30. Reflection (comment): Which two tasks were most challenging and why?
// event questions and the delegation because they are hard to understand

// 31. create and unordered list dynamically with at 10 items, the odd list items should have class "odd" and even items "even", -create the two classes in your CSS file-
var list = document.createElement("ul");
for (var i = 1; i <= 10; i++) {
    var item = document.createElement("li");
    if (i % 2 === 0) {
        item.className = "even";
    } else {
        item.className = "odd";
    }
    list.appendChild(item);
}
document.body.appendChild(list);

// 32. inputs add elements on 3 div
var button = document.querySelector(".submit-button");
button.addEventListener("click",function(){
    var name = document.getElementById("q32-name").value;
    var email = document.getElementById("q32-email").value;
    var country = document.getElementById("q32-country").value;

    var nameDiv = document.querySelector(".name-div-q32");
    var emailDiv = document.querySelector(".email-div-q32");
    var countryDiv = document.querySelector(".country-div-q32");

    nameDiv.textContent = "name: " + name;
    emailDiv.textContent = "email: " + email;
    countryDiv.textContent = "country: " + country;
})