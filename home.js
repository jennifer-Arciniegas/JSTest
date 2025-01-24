document.addEventListener("DOMContentLoaded", () =>{
    document.getElementById("newTask").addEventListener("click", ()=>{
        const espacio = document.getElementById("espacio");
        const espacioPendiente = document.getElementById("espacioPendiente")
        const espacioProceso = document.getElementById("espacioProceso")
        const espacioCompletado = document.getElementById("espacioCompletado")
        

        //crear form de tarea
        const formTarea = document.createElement("div")
        formTarea.classList.add("m-10", "bg-sky-100", "py-2", "rounded-lg")
        formTarea.innerHTML = `
        <form action="http://localhost:3000/tareas/" method="POST" onsubmit="crearTarea(this)" id="formTareaNueva   ">
            <label for="title">Titulo de la tarea</label>
            <input type="text" name="title" id="title" class="bg-white rounded-lg m-1 p-1" required>
            <br>
            <label for="descrition">Descripcion</label>
            <input type="text" name="descrition" id="descrition" class="bg-white rounded-lg m-1 p-1 required">
            <br>
            <label for="imagen">Url de la imagen</label>
            <input type="text" name="imagen" id="imagen" class="bg-white rounded-lg m-1 p-1">
            <br>
            <label for="fInici">Fecha incio de la tarea</label>
            <input type="date" name="fInici" id="fInici" class="bg-white rounded-lg m-1 p-1" required>
            <br>
            <label for="fFin">Fecha finalizacion de la tarea</label>
            <input type="date" name="fFin" id="fFin" class="bg-white rounded-lg m-1 p-1" required>
            <br>
            <select name="tipoTarea" id="tipoTarea" required>
                <option value="pendiente">Pendiente</option>
                <option value="proceso"> En proceso</option>
                <option value="terminada">terminada</option>
            </select>
            <br>
            <div class="flex justify-center">
                <button class="bg-green-300 p-2 m-1 rounded-lg" id="formu" type="submit">subir tarea</button>
            </div>
           
        </form>
        
        `;
        espacio.appendChild(formTarea)
    })
   

    function mostrarTareas(tareas){         
            espacioPendiente.innerHTML = '';
            tareas.forEach((tarea) => {
            const listado = document.createElement("div")   
            listado.classList.add("flex", "justify-between", "items-center", "bg-white", "p-3", "rounded", "shadow", "m-3"  )  
            let tareaTexto = document.createElement("div");
            
            listado.innerHTML= `<div> 
                <div class="flex justify-center">
                    <h1>${tarea.title} </h1> </div>
                
                <p>${tarea.descrition} </p>
                <div> <img src="${tarea.imagen}" alt="tarea"  class="w-30 h-40"> </div>
                <div class=" flex flex-col-2 gap-6 m-2"> 
                    <div>inicio: ${tarea.fInici} </div>
                    <div>fin: ${tarea.fFin} </div> </div>


                <div>
                    <button class="bg-rose-400 rounded-lg p-1 m-1" onclick="borrarTarea(${tarea.id})""> Borrar </button>
                    </div>

                </div>`;

            listado.querySelector('div').appendChild(tareaTexto);
            

            if(tarea.tipoTarea === "pendiente"){
                espacioPendiente.appendChild(listado)
           } else if(tarea.tipoTarea === "proceso"){
                espacioProceso.appendChild(listado)
           }else if(tarea.tipoTarea === "terminada"){
             espacioCompletado.appendChild(listado)
           }else{
            console.log("no existe estado")
           }
        
          

        })
    
    }
   
    const borrarTarea = document.getElementById("borrarTarea")
    window.borrarTarea = function(id) {
        fetch(`http://localhost:3000/tareas/${id}`, {
            method: "DELETE",
        })
        .then((response) => response.json())
        .then((data) => {
            cargarTareas();
        })
        .catch((error) => console.error("Error al eliminar la tarea:", error));
    

    }
    



    function cargarTarea (){
        fetch("http://localhost:3000/tareas")
        .then((responde) => responde.json())
        .then((tareas) => mostrarTareas(tareas))
        .catch((error) => console.error("error al cargar las tareas"+ error))
    }
    //document.getElementById("formTareaNueva").addEventListener("submit", (event)=>{
    //    event.preventDefault()
    //})
    


    cargarTarea()
})
