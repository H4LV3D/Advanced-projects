// WELCOME TO JAVASCRIPT

// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.dir(window);
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.getElementsByClassName('table1'));
// console.log(document.all[10]);
// console.log(document)
// var items = document.querySelector('#items');
// console.log(items);
// console.log(items.parentNode);
// items.parentNode.style.backgroundColor = '#f4f4f4';

var button = document.getElementById('animate').addEventListener('click', function(){
    console.log(123);
});
function changeColor(element) {
    var currentColor = element.style.backgroundColor;
    if (currentColor == "red") {
        element.style.backgroundColor = "green";
    }else{
        element.style.backgroundColor = "red";
    }
}
var click = document.getElementById('hello').addEventListener
('click', function(){
    alert("Phone:08159433370");
    document.getElementsByClassName('button24').textContent = "Hello world";
} );
// function clicked(){
//     alert("hello world");
// }