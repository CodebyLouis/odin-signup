const password = document.querySelector("#password")
const confirmPass = document.querySelector("#confirmpassword")

confirmPass.addEventListener("blur",function(){
    if(password.value !==confirmPass.value){
        confirmPass.classList.add("error")
    }
    else {
        confirmPass.classList.remove("error")
    }
})