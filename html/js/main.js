//Crear una función para responder el evento click

document.getElementById("ProductosClick").addEventListener("click", function obtenerProductos(){
     console.log("clickeaste");

//El evento debe realizar una llamada a la API
     fetch("https://fakestoreapi.com/products")
     .then(response => response.json())
     .then(data => {
        console.log("Productos:", data);
        mostrarProductos(data);
     })
     .catch(error=> console.error("Error al obtener productos:", error));
    
//Funcion para llenar cards

function mostrarProductos(productos) {
   const productosCardsContainer = document.querySelector('.album .row');
   productosCardsContainer.innerHTML = ""; 
    
   productos.forEach((producto) => {
    const card = document.createElement("div");
       card.className = "col-md-4 mb-4";
    
          
       card.innerHTML = `
             <div class="card">
                 <img src="${producto.image}" class="card-img-top" alt="${producto.title}">
                   <div class="card-body">
                       <h5 class="card-title">${producto.title}</h5>
                       <p class="card-text">${producto.description}</p>
                       <p class="card-text"><strong>Precio:</strong> $${producto.price}</p>
                    </div>
               </div>
           `;

           productosCardsContainer.appendChild(card);
     })
    window.onload = obtenerProductos;
    }
    
});
 
