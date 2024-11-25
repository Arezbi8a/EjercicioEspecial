//Crear una función para responder el evento click

document.getElementById("ProductosClick").addEventListener("click", function(){

    
    fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(json)

});




