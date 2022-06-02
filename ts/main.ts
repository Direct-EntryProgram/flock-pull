const pointer=document.getElementById("pointer")!;

pointer.style.position = 'relative';
window.addEventListener("mousemove",(e)=>{
    pointer.style.left=(e.clientX +15)+"px";
    pointer.style.top=(e.clientY+15)+"px";
});

console.log("Working");