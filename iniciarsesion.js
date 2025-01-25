           // para cuando inicie sesion
           document.getElementById("iniciarSession").addEventListener("click", function(e) {
            e.preventDefault();
              //traer datos igresados
              const usuario = document.getElementById("user").value;
              const contraceña = document.getElementById("password").value;
      
              //traer datos almacenados
              const storedData = JSON.parse(localStorage.getItem("formData"));
              
          
          if(!storedData){
              alert("no existe el registro")
              return;
          }

              if(usuario === storedData.user && contraceña === storedData.password){
                  alert("inicio de session exitoso");
                  
              } else{
                  alert("fallo el inicio de session")
                  
              }
          }
          )
