const password=document.querySelector('#No2');
const warning=document.querySelector('#warning');

password.addEventListener('keyup',function(e){
    if(e.getModifierState('CapsLock')){
        warning.style.display="block"
    }
    else{
        warning.style.display="none"
    }
})
function Login() {
    var Validate = document.getElementById("No1").value
    var Validate2 = String(document.getElementById("No2").value)
    if (Validate == "") {
        alert("نام کاربری نمی تواند خالی باشد");
    }
    else if (Validate2.length < 6) {
        alert("رمز عبور نمی تواند کمتر از 6 حرف باشد");
    }
    else {
        alert("ورود با موفقیت انجام شد");
        window.open("../Index.html")
    }
}
function Cancel(){
    window.open("../Index.html")
}