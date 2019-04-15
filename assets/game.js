var WinningNumber = Math.floor(Math.random()*100);
var score;
 var Currency=document.getElementById("Currency");
 Currency.innerHTML = 0;
UserClick="click";


function Added(val){
    var increment = parseInt(val);
    var score = parseInt(Currency.innerHTML);
    Currency.innerHTML = increment + score;
}
$("#WinNumber").text(WinningNumber);

var crystals=$(".crystal");
for(i=0; i<crystals.length;i++){
    $(crystals[i]).attr("dataValue", Math.floor(Math.random()*12));
}
 
if(UserClick){
$(".crystal").on("click",function(){
console.log(this);

var dataValue= $(this).attr("dataValue");
   console.log(dataValue)

      

   alert("You Have Found"+ dataValue + "Crystals");


        var NewValue = $("#Currency")+dataValue; 



   if (NewValue<WinningNumber){
   
}
   if(NewValue===WinningNumber){
    alert("Ya Must Have Cheated!");
}else if( NewValue>WinningNumber){
    alert("You shoulda cheated better than that")
}
})
}

