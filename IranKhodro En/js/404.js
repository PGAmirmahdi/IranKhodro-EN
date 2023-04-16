const container= document.querySelector("#Back");
window.onmousemove=function(e){
    let x=e.clientX /7;
    let y=e.clientY / 7;
    container.style.backgroundPositionX=x +"px"
    container.style.backgroundPositionY=y +"px"

}