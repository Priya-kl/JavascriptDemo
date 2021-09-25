//External JavaScript
"use strict";

var c = 30;
var profile = {
    firstName: 'Priya',
    lName: 'K L',
    city: 'chennai',
    age: 36,
    address: {
        doorNo: 10,
        street: 'ssm nagar'
    }
}

var btn = document.getElementById('dispatchBtn2');// using it for event handling

function initialSetter(){
    //hide the div
    document.getElementById('desc').style.display = "none";
}

function handleAddButton() {

    var domDiv = document.getElementById('domDemoArea');
    console.log(domDiv);
    //Add a new button to #domDemoArea
    var btn = document.createElement('BUTTON');
    // creating text to be displayed on button
    var text = document.createTextNode("Submit");
    // appending text to button
    btn.appendChild(text);
    btn.setAttribute("class", "redBg");
    // appending button to div
    domDiv.appendChild(btn);

}

function handleMouseover(event) {
    console.log('mouseover');
    //toggle button label name
    event.target.innerText = 'Hide';
    //show the div
    document.getElementById('desc').style.display = "block";
}

function handleMouseleave(event) {
    //toggle button label name
    event.target.innerText = 'Show';
    //Hide the div 
    document.getElementById('desc').style.display = "none";
}

function handleSendIt() {
    //debugger;
    alert('sending from external js');
}


function handleDispatchIt(event) {

    console.log(this);
    console.log(event);
    alert('Dispatching it from External Script..');
}



// //attaching event through js
// /*btn.onclick = function(){​​​​​​
//     //callback fn
//     console.log('dispatched again');
// }​​​​​​*/

console.log(btn);

btn.addEventListener('click', function () {
    console.log('dispatch button click listener')
});

btn.addEventListener('mouseover', function () {
    console.log('Dispatched on mouse over listener');
});


