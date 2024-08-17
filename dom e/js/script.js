// console.dir(document)
// let firstElement = document.getElementById("one").className="green";
// console.log(firstElement);

// var firstName = document.getElementsByClassName("green");
// firstName[0].className = "yellow";

// console.log(firstName);
// var firstName =  document.getElementsByTagName("li");
// firstName[0].className="green";

// console.log(firstName);
// var firstName= document.querySelector(".red");
// console.log(firstName);

// var TT= firstName.nextElementSibling;
// TT.className="green";
// console.log(TT);

// var abebe= document.getElementById("two");
// console.log(abebe);
// console.log(abebe.className);
// abebe.className ="red";
// var firstName = document.querySelector(".red");
// console.log(firstName);

// var TT = firstName.parentNode;
// TT.className = "green";
// console.log(TT);

var el=document.getElementById("two");
console.log(el);
el.textContent="ice-cream";
var tp=document.createElement("p");
tp.textContent="Abebe beso belaa";
console.log(tp);
document.body.appendChild(tp);

//Exercise
//Question 1
// var select = document.getElementById("sample1");
// console.log(select);
// console.log(select.textContent);

//question 2
// var select=document.getElementById("techCompanies");
// console.log(select);
// var select=document.querySelector("#techCompanies");
// console.log(select);
// var c=select.querySelectorAll("li").length;
// console.log(c);
// function cout(){
//     var C=0;

//     for(var i=0; i<select.clientHeight; i++){
//         C=C+select[i];
//         return C;
//     }
// }
// console.log(cout());

// var select=querySelectorAll("#techCompanies.red");
// console.log(select);
// var select=document.getElementsByClassName(".red")
// console.log(select);

// var select=document.createElement("li");
// select.textContent="FaceBook";
// console.log(select);
// select.className="blue"
// select.classList.add("challa")
// document. getElementById("techCompanies").appendChild(select);
// var sel=document.querySelector(".red");

// sel.before(select);
// var parent=document.getElementById("techCompanies");
// var select=document.createElement("img");
// select.setAttribute (
//     "src","http......."
// );
// parent.appendchild(select);
// select.setAttribute("width","300");
// select.removeAttribute("width");

// var sele=document.getElementsByClassName("red");
// select.removeChild(sele);
// select.insertBefore(blue,list.lastChild);

// var c=document.getElementById("blueCompanies");
// var select=document.getElementById("techCompanies")
//     console.log(select);

//   var c = document.getElementsByClassName("blue");

// console.log(c);

// console.log(c);

//  EVENT

// function    ABEBE(){
//     alert("hello abe")
// }
// ABEBE()
//  var list = document.querySelector(".red");
//  function changeBckgroundColor() {

//   list.style.backgroundColor = "yellow";
//  }
//  changeBckgroundColor();
// function re(){
//     list.style.backgroundColor="";
// }
// re();

// var el=document.getElementById("change-bg");
// el.onclick=changeBackground;
// var el2=document.getElementById("HH");
// el2.onmouseover=remove;
// function changeBackground(){
//     document.body.style.backgroundColor="#f56a79";
// }
// function remove(){
//     document.body.style.backgroundColor="";
// }

// var el = document.getElementById("change-bg");
//1:59:27

// var el = document.getElementById("change-bg");
// el.addEventListener("click" ,changeBackground);
// // el.addEventListener("click" ,function(){
// //  document.body.style.backgroundColor="#f56a79";
// // });
// function changeBackground(){
//     document.body.style.backgroundColor="#f56a79";
// }

// var sel = document.getElementById("yesBackground");
// sel.addEventListener("click",function(){
//    sel.style.backgroundColor="#99ecff";
// })

// var yes = document.getElementById("yesBackground");
// var change=
// var bt = document.getElementById("yesBackground");
// var se = document.getElementById("ch");
// bt.addEventListener("click",abb);
// function abb(){
//     se.style.backgroundColor="#99ecff";
// }
// var rem = document.getElementById("noBackground");
// var remover = document.getElementById("ch");
// rem.addEventListener("click",obo);
// function obo(){
//     remover.style.backgroundColor="";
// }



// function onClick(){
//     var select = document.getElementById("ch").style.backgroundColor="#99ecff"
// }

// 
//JQuery
// var el = $(".red");
// console.log(el)
//  var select=$("li:last")
// console.log(select);
//  var select = $("li:nth-child(4");
//  console.log(select);
// $("li").even().css("backgroundColor","yellow")

// $("div").has("button").css("backgroundColor", "yellow")
// $("li:contains(Apple)").css("backgroundColor","red")
//  el.text("ice-cream")
// el.remove();
// var el = $("#tech").html();
// el.html("<p>Abebe</p>")

// var el = $("#techCompanies");
// el.prepend("<li class='yellow'>Added using the prepend method</li>")
// el.before("icecream")
// var el = $(".red");

// el.empty();
// el.remove()
// $(".blue").after("<li class='yellow'>hi before blue</li>")
// console.log($(".yellow"));
// el.addClass("add");
// el.css("background-color","pink")
// $(".red").css({
//     "background-color":"black",
//     color:"white",
//     width:"120px",
// });
// console.log($.isNumeric("hi 4"))
// console.log($.isNumeric("4"))

// $("#change-bg").on("click","changeBackground")

// function changeBackground () {
//  $("body").css("backgroundColor", "blue")
// }

// $("#yesBackground").click(function (){
//     $(this).hide();
// });
// $("noBackground").dblclick(function(){
//     $(this).prev.show();
// });

// $("#yesBackground").on("click",function(){
//     $(this).hide();
// })
// $("#noBackground").on("dblclick",function(){
//     $(this).prev.show();
// })
// var el=$("#techCompanies")
// // el.hide();
// $("#change-bg").on("click",function(){
//     // var el=$("#techCompanies").show();

    // var el = $("#techCompanies")
    // el.slideToggle();

// })
// var el=$("#techCompanies");
// $("#change-bg").click(function(){
//   el.animate(
//     {
//         width:"500px",
//         opacity:0.9,
//         fontSize:"3em",
//         borderWidth:"10px",

// },
// 500
//   );
//   setTimeout(() => {
//     $("#techCompanies")
//       .animate({ width: "100%" }, 1000)
//       .animate({ fontSize: "16px" }, 1000);
//   },500);
// })
// });
//  console.log($("#techCompanies li".length))
// console.log(le li.length)



// var add = document.getElementById("adder");
// function cheackValiditye(e) {
//   e.preventDefault();
//   let myInput = document.querySelectorAll("adder  input");
// //   myInput[0].style.backgroundColor= "";
//   myInput[1].style.backgroundColor = "";
//   if (myInput[0].value.lenght == 0) {
//     alert("please enter first value");
//     myInputInput[0].style.backgroundColor = "pink";
//   }
//   if (myInput[1].value.length == 0) {
//     alert("please enter second value");
//     myInputInput[1].style.backgroundColor = "pink";
//   }
//   if (myInput[0] != 0 && myInput[1] != 0) {
//     alert("thank you");
//   }
//   let output = (myInput[0].value) + " " + (myInput[1].value);
//   let resylt = document.getElementById("result");
//   resylt.textContent = output;
// }
// add.addEventListener("submit", cheackValiditye);


// console.log($("input {name='first name'}").val());
//Question 3
// if(myInput[o].value.length !==0 && myInput[1].value.length){
//     let output=Number(myInput[0].value)+ Number(myInput[1].value);
//     let result=document.getElementById("result");
//     result.textContent=outPut;
// }
// myForm.addEventListner("sumbit",checkValidity);
// var se = $("#adder");
// function checkValidty(){
//     let myInput = $("#adder input");
//     if ($(myInput.val().length !== 0 )) {
//       let output = Number(myInput[0].value) + Number(myInput[1].value);
//       let result = $("#submitButton");
//       result.textContent = output;
//     }
// }

// //   se.addEventListner("click", checkValidty);
// $("#susubmitButtonbmit").on("click", checkValidty);


// se=2;
// se=check;
// se.isNumber();
// if($.isNumeric()){
//     // se=2;
//     console.log("hi");
// }
// function check(){
   
// }
// check()
// console.log(check);

// $("#adder").ready(function(){
//     $("#submitButton").click(function(){
//         var num1 = parseFloat($("#num1").val());
//         var num2 = parseFloat($('#num2'));
//         if (isNaN(num1)|| isNaN(num2)){
//             $("#the-value").text('please enter numeric value');
//         }else{
//             var sum = num1 + num2;
//             var average = sum / 2;
//             console.log('sum:',sum);
//             console.log('average:',average);
//             $("sum").tet('sum:', + sum + 'average:', + average );
//         }
//     });
// });









































































































