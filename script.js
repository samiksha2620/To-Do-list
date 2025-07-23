 const container =document.querySelector(".container ");
  const btn =document.querySelector("#btn ");
  let  notes=document.querySelectorAll(".input");
function update(){
    localStorage.setItem("notes",container.innerHTML);
}
function showNotes (){
    container.innerHTML=localStorage.getItem("notes")
}

   btn.addEventListener("click",function(){
    let input=document.createElement("p");
        let img=document.createElement("img");
    input.className ="input";
    input.setAttribute("contenteditable","true");
    img.src="https://www.freeiconspng.com/thumbs/remove-icon-png/remove-icon-png-25.png",
    container.appendChild(input).appendChild(img) ;
   })
     container.addEventListener('click',function(e){
if(e.target.tagName==="IMG"){
    e.target.parentElement .remove ();
    update();
}
else if(e.target.tagName ==="P"){
    notes=document.querySelectorAll(".input");
    notes.forEach(nt =>{
        nt.onkeyup=function(){
            update();
        }
    })
}

})
document.addEventListener("keydown",event=>{
    if(event.key==="enter "){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})