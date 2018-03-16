export function GotoRegister(){
    document.getElementById("login_permition").style.display = "none"
    document.getElementById("register_permition").style.display = "block"
}

export function GotoLogin(){
    document.getElementById("login_permition").style.display = "block"
    document.getElementById("register_permition").style.display = "none"
}