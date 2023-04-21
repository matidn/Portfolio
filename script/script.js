

document.body.style.overflow = "clip";

var toggleButton = document.getElementById("switchbox_V2VVB"); 

// CONTENIDO DE ANIMACION AL SCROLLEAR HORIZONTALMENTE
const containerAnim = document.querySelector('.container-anim');
const eng = document.querySelector('.example-switchbox-yes');
const esp = document.querySelector('.example-switchbox-no');


// CONTENIDO DE ANIMACION AL SCROLLEAR HORIZONTALMENTE

const tll = gsap.timeline({
    paused: "true"
});

// ANIMACION DE LA NAVBAR
// const tllnav = gsap.timeline({
//     paused: "true"
// });
// tllnav.from(".li",{ 
//     duration: .5,
//     y: -60,
//     stagger: 0.1,
//     ease: "power4.out"
// });
// ANIMACION DE LA NAVBAR

const tllArrow = gsap.timeline({
    paused: "true"
});
tllArrow.from(".arrow-down", {
    duration: 1,
    y: 150,

    onComplete: function() {
        // Desbloquear el scroll
        document.body.style.overflow = "auto";
    }
});

// ANIMACION DE LA NAVBAR AL HACER SCROLL
// const showAnim = gsap.from('.navbar', { 
//     yPercent: -100,
//     paused: true,
//     duration: 0.2
//   }).progress(1);
  
// ANIMACION DE LA NAVBAR AL HACER SCROLL


// tll.to("#bar",{
//     duration:.2,
//     opacity: 0,
//     zIndex: -1,
// });
tll.to(".progress",{
    duration: .8,
    width: "0%",
    
});
tll.from("#home",{
    duration: .8,
    opacity: 0,
    ease: "Power4.out",
} ,"-=.5");
tll.to("#home h1",{
    duration: .5,
    delay: .5,
    y: 0,
    opacity: 1,
    skewY: 4,
    
}, "-=1");
tll.to("#home h2",{
    duration: .5,
    delay: .5,
    y: 0,
    opacity: 1,
    skewY: 4,
    
    
    // Una vez completada la animacion se realiza la animacion de la navbar
    onComplete: function(){
        tllnav.play();
    },
    onComplete: function(){
        tllArrow.play();
    }
}, "-=1");


var bar = document.getElementById("barconfrm");
var id, width = 1;
function loading(){
    id = setInterval(frame,10);
}
function frame(){
    if(width>=100){
        clearInterval(id);
        tll.play();
    }
    else{
        width++;
        bar.style.width = width + "%";
    }
}
window.onload  = function(){
    loading();
}

toggleButton.addEventListener('click', function(){
    cambiarIdioma();
});

function cambiarIdioma(){
    if (toggleButton.classList.contains('is-pressed')) {
        console.log('ojooooo');
        // eng.style.opacity = 0;
        esp.style.opacity = 1;
        location.href = "eng/index.html";
        
    } else {
        console.log('letsgo');
        eng.style.opacity = 1;
        // esp.style.opacity = 0;
        location.href="../index.html";
    };
}


// ANIMACION DE LOS LOGOS MEDIA 
// const animateLeft = gsap.from(".media a", {
//   x: "-160%",
//   opacity: 1,
//   duration: 0.5,
//   stagger: 0.2
// });

// ScrollTrigger.create({
//   trigger: "#contact",
//   start: "top center",
//   animation: animateLeft,
//   once: true
// });

// ANIMACION DE LOS LOGOS MEDIA
