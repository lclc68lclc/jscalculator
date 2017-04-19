$(document).ready(function(){

var operator = "";
var number = "";
var newnum = "";
var result = 0;

  $(".calcnum").not("#clearout").on("click", function(){
    number += $(this).data("number");
    $("#input").val(function() {
      return number;
    })
  })
  $(".operations").not("#clearout").on("click",function(){
    operator = $(this).data("operator");
    newnum = number;
    number = "";
      $("#input").val(function(){
        return this.value + operator;
      })
  })
  $("#percent").on("click", function(){
    number = number/100;
    $("#input").val(function(){
      return number;
    })
  })
  $("#plusminus").on("click", function(){
    number *= -1;
    $("#input").val(function(){
      return number;
    })
  })
  $("#clearout").on("click", function(){
    number = "";
    newnum = "";
    $("#input").val("");
  })
  $("#clear").on("click", function(){
    number = "";
    newnum = "";
    $("#input").val("");
  })
  $("#equals").on("click", function(){
    result = performOperations(newnum, number, operator);
    number = result;
    console.log(result, number);
    $("#input").val(result);
});
});

function performOperations(a, b, operator){
    a = parseFloat(a);
    b = parseFloat(b);
    console.log(a, b, operator);
    if (operator === "+") return a + b;
    if (operator === "-") return a - b;
    if (operator === "*") return a * b;
    if (operator === "/") return a / b;
}
