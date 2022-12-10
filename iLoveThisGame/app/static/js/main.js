const form = document.getElementById("formulario");

form.addEventListener("submit", e=>{
    e.preventDefault()
    const email = document.getElementById("emailInput");
    const nombre = document.getElementById("nameInput");
    const apellido = document.getElementById("apellidoInput");
    const telefono = document.getElementById("telInput");
    const parrafo = document.getElementById("warnings");

    let warnings = ""
    let entrar = false
    let regexEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
    let regexTelefono = /^\d{7,14}$/
    parrafo.innerHTML = ""
    
    if(nombre.value.length <6){
        warnings += `El nombre no es valido <br>`
        entrar = true
    }
    if(!regexEmail.test(email.value)){
        warnings += `El email no es valido <br>`
        entrar = true
    }
    if(!regexTelefono.test(telefono.value)){
        warnings += `El telefono es invalido <br>`
        entrar = true
    }
    if(entrar){
        parrafo.innerHTML = warnings
    }else{
        parrafo.innerHTML = "Tu comentario fue enviado exitosamente!"
    }
})




