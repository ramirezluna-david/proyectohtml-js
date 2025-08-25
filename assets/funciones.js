const form = document.getElementById("form-contacto")
const error = document.getElementById("mensaje_error")

form.addEventListener("submit", function(evento) {
    evento.preventDefault();

    let nombre = document.getElementById("nombre").value.trim();
    let email = document.getElementById("email").value.trim();
    let tel = document.getElementById("telefono").value.trim();
    let asunto = document.getElementById("asunto").value.trim();
    let mensaje = document.getElementById("mensaje").value.trim();

        // validar campos vacios
        if (nombre === "" || email === "" || tel === "" || asunto === "" || mensaje === ""){
            error.textContent = "Error: Debe llenar todos los campos!";
        }else{
            error.textContent = "";
            alert("Formulario completado con exito!.");
            form.reset();
        }
} );