window.addEventListener('load',()=>{
let ocultar = document.getElementById('ocultar');
let mostrar = document.getElementById('mostrar');
let datos = document.getElementById('img');

//Boton de Ocultar
  ocultar.addEventListener('click',()=>{
  datos.innerHTML = "";
});

//Boton de Mostrar las IMG
mostrar.addEventListener('click',()=>{

fetch('https://usuarios-71872.firebaseio.com/Imagenes.json')
    .then(Response => Response.json())
    .then(data=>{
        for(rows of data){
           datos.innerHTML += `
           <div class="col">
           <div class="card">
             <img src="${rows.img}" class="card-img-top" alt="...">
             <div class="card-body">
               <h5 class="card-title">${rows.nombre}</h5>
               <p class="card-text"></p>
             </div>
           </div>
         </div>
           `  
        }
    })   
            
        
    })
});



