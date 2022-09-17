function validar(){
    let usuario = document.loginF.usuario.value;
    let pass = document.loginF.password.value;

    if(usuario === "acadrasc0" && pass === "12345"){
        location.href = "principal.html";
        alert("Hola bienvenido.")
    }
}