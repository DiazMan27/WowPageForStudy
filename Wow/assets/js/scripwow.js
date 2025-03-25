// Mostrar el loader durante 2 segundos al cargar la página
window.onload = function () {
    // Mostrar el loader
    const loader = document.getElementById('loader');
    loader.style.display = 'flex'; // Asegúrate que el loader se vea

    // Ocultar el loader después de 2 segundos
    setTimeout(function () {
        loader.style.display = 'none'; // Ocultar el loader después de 2 segundos
    }, 2000); // 2000 ms = 2 segundos
};

// Seguimiento del cursor
document.addEventListener("mousemove", function (e) {
    // Crear el rastro del cursor
    var trail = document.createElement("div");
    trail.classList.add("cursor-trail");
    document.body.appendChild(trail);
    trail.style.left = e.pageX + "px";
    trail.style.top = e.pageY + "px";

    // Eliminar el rastro después de 300ms
    setTimeout(function () {
        trail.remove();
    }, 300); // El rastro desaparece después de 300ms
});
