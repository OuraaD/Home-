document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.burger');
    const menu = document.querySelector('.menu');

    burger.addEventListener('click', function() {
        console.log("Burger menu clicked!"); // Vérifiez si cet enregistrement s'affiche dans la console du navigateur
        menu.classList.toggle('active');
    });
});
