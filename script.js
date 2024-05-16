//Menu responsivo
const responsiveMenu = document.getElementById('responsive-menu');
const menuUl = document.querySelector('#navegador ul');
const menuItems = document.querySelectorAll('#navegador li');


responsiveMenu.addEventListener('click', () => 
    {
    menuUl.classList.toggle('visible');
    }
);

menuItems.forEach(function(item)
        {
            item.addEventListener('click', function()
            {
                menuUl.classList.remove('visible');
            });
        }
    );

//seccion contacto
function enviarCorreo(event) {
    event.preventDefault();
    
    var nombre = document.getElementById('nombre').value;
    var asunto = document.getElementById('asunto').value;
    var email = document.getElementById('email').value;
    var mensaje = document.getElementById('mensaje').value;

    var cuerpoCorreo = "Nombre: " + nombre + "\n" + "Mensaje: \n" + mensaje;

    window.location.href = "mailto:tomasvalero22@gmail.com?subject=" + encodeURIComponent(asunto) + "&body=" + encodeURIComponent(cuerpoCorreo);
}