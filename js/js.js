/*
 * fil: js.js
 * purpose: introdction to jQuery
 */
console.log('file: js/js.js loaded');

// A $( document ).ready() block.
$(document).ready(function () { // kører så snart DOM er klar

    console.log("jQuery 3.5.1 running. Alert level green.");

    // ... min kode herfra ...

    // Får videoen til at afspille af sig selv
    document.getElementById('myVideo').play();


    // En funktion når som bliver vist når man scroller ned via intro-text
    // vi laver en variabel introPosition, hvor vi gerne vil have en afstand fra hvor teksten er til vinduet.
    // vi laver en funktion ScreenPosition med innerHeight for at den opløses ens på forskellige enheder.
    function scrollAppear() {
        var introText = document.querySelector('.intro-text');
        var introPosition = introText.getBoundingClientRect().top;
        var screenPoisition = window.innerHeight / 2;
        // hvis introPosition er mindre end vores screenPosition skal den bruge introText, hvor der koblet en classList på som giver os adgang til klassen ovenpå introText. .add hvor vi sætter intro-appear ind fra css delen
        if (introPosition < screenPoisition) {
            introText.classList.add('intro-appear');
        }
    }







    window.addEventListener('scroll', scrollAppear);




    //Billede karusel
    var slideIndex = 0;
    showSlides();

    function showSlides() {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace("active");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
        setTimeout(showSlides, 5000); // skifter billede hver femte sekund
    }
    // ... min kode slut ...

}); // denne line må ikke slettes
