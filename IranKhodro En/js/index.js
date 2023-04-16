const favicon = document.getElementById('favicon');
window.addEventListener('scroll', function(){
    document.getElementById("No1").classList.toggle("active2",window.scrollY>0)
    document.getElementById("fixed").style.position="fixed"
    favicon.setAttribute('href','../img/Iran-Khodro-scrol.png');
})
function Search(){
   var No1=document.getElementById("Search")
   No1.classList.add("Search2")
   document.querySelector(".No3").style.display="inline-block"
}
const bg=document.querySelector('#bg');
window.addEventListener('scroll',function () {
    bg.style.opacity=1- window.pageYOffset/1000; 
})
function Company(){
    document.querySelector(".N1").style.display="none"
    document.querySelector(".N2").style.display="none"
    document.querySelector(".N3").style.display="none"
    document.querySelector(".N4").style.display="none"
    document.querySelector(".N6").style.display="flex"
    document.querySelector(".N7").style.display="flex"
    document.querySelector(".N9").style.display="none"
    document.querySelector(".Search").style.display="none"
    document.querySelector(".N8").innerText="History"
    document.getElementById("No1").classList.add("active3")
    document.querySelector(".N5").classList.add("active4")
}
function Back(){
    document.querySelector(".N1").style.display="flex"
    document.querySelector(".N2").style.display="flex"
    document.querySelector(".N3").style.display="iflex"
    document.querySelector(".N4").style.display="flex"
    document.querySelector(".N7").style.display="none"
    document.querySelector(".N9").style.display="flex"
    document.querySelector(".N6").style.display="none"
    document.querySelector(".N8").innerText="Company"
    document.querySelector(".Search").style.display="flex"
    document.getElementById("No1").classList.remove("active3")
    document.querySelector(".N5").classList.remove("active4")
}
function date(){
    var date=new Date();
    var Time2 =date.toLocaleString();
    document.getElementById("date").innerHTML=Time2
}
function date2(){
    document.getElementById("date").innerHTML="Date"
}
const ToTop = document.querySelector('.to-top');
window.addEventListener('scroll', function () {
    if (window.pageYOffset > 100) {
        ToTop.classList.add('active');
    }
    else {
        ToTop.classList.remove('active');
    }
})
function Loc1(){
    let Loc='Pages/404.html'
    window.open(Loc,'mainpage','height=700,width=700px')
}