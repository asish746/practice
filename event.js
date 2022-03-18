

function toggleHide(){
    let para=document.getElementById("para");
    let btn=document.getElementById("btn");
   if(para.style.display!="none"){
   para.style.display="none";
   
   }
   else{
       para.style.display="block";
   }
}
let para = document.getElementById("para");

    para.addEventListener("mouseover", function run(){

    alert("Mouse Inside")
});