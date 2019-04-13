var crystalPoints;
var UserClick="";
var Crystal1="15";
var Crystal2="20";
var Crystal3="10";
var Crystals;
var TargetScore=75;

var Crystals = new Array={
    Crystal1,Crystal2,Crystal3
}
function crystalPoints(a,b,c){
$(".Crystal1").on("click",function(){
    if(UserClick){ 
        (UserClick).click(alert("you've found" + Crystals + "points"));
     console.log("ARGH YA CHEATER!")} 
})
$(".Crystal2").bind("click",function(){
    if(UserClick){ 
        (UserClick).click(alert("you've found" + Crystals + "points"));
     console.log("ARGH YA CHEATER!")} 
})
$(".Crystal").bind("click",function(){
    if(UserClick){ 
        (UserClick).click(alert("you've found" + Crystals + "points"));
     console.log("ARGH YA CHEATER!")}   
})
}
for(i=0; i<=Crystals.length;i++){
function math (form) {
    Crystal1 = form.Crystal1.value;
    Crystal2 = form.Crystal2.value;
    Crystal3= form.Crystal3.value;
    TargetScore=form.UserClick.value;
    document.write (input3);
}
}
