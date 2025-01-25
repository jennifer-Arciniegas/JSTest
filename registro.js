function registrarCuenta(){
    document.getElementById("formu-registro").addEventListener("submit", (event) => {
        event.preventDefault();
        
        const formData = {
            user:[ {
            nombre: document.getElementById("nombre").value,
            edad: document.getElementById("edad").value,
            genero: document.getElementById("genero").value,
            user: document.getElementById("user").value,
            password: document.getElementById("password").value,
             }
            ]

        };
        //guardar datos en el localstorage
        localStorage.setItem("formData", JSON.stringify(formData))
        alert("datos guardados ");
       window.location.href="./index.html"
    })
}
registrarCuenta()