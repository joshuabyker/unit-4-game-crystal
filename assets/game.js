var WinningNumber = 100;
var SoFar=0;
var Currency;

var crystals=$(".crystal");
for(i=0; i<crystals.length;i++){
    $(crystals[i]).attr("dataValue", Math.floor(Math.random()*12));
    
}
 

$(".crystal").on("click",function(){
console.log(this);
var dataValue= $(this).attr("dataValue");
   console.log(dataValue)
  
   alert("You Have Found"+ Currency);
})



// for(var i=0; i<NumberVarries.length;i++){
// $("#Target").text(WinningNumber);
// $(".Crystal1").on("click", function(){
//     console.log("Did Ya click me?");
// SoFar += count;
// alert("You've Found" + SoFar);


// if(count===WinningNumber){
//     alert("Ya Must Have Cheated!");
// }else if( count>=WinningNumber){
//     alert("Ya gotta cheat better than that!");
// }
// })
// }