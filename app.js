var num1Element = document.getElementById("num1");
var num2Element = document.getElementById("num2");
var btnElement = document.querySelector("button");
function add(num1, num2) {
    return num1 + num2;
}
btnElement.addEventListener('click', function () {
    var num1 = num1Element.value;
    var num2 = num2Element.value;
    console.log(add(+num1, +num2));
});
