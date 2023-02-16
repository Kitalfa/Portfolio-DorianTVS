/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');   

function linkAction(){
  /*Active link*/
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');
  
  /*Remove menu mobile*/
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

/*SCROLL HOME*/
sr.reveal('.home__title',{}); 
sr.reveal('.button',{delay: 200}); 
sr.reveal('.home__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 

/*SCROLL ABOUT*/
sr.reveal('.about__img',{}); 
sr.reveal('.about__subtitle',{delay: 400}); 
sr.reveal('.about__text',{delay: 400}); 

/*SCROLL SKILLS*/
sr.reveal('.skills__subtitle',{}); 
sr.reveal('.skills__text',{}); 
sr.reveal('.skills__data',{interval: 200}); 
sr.reveal('.skills__img',{delay: 600});

/*SCROLL WORK*/
sr.reveal('.work__img',{interval: 200}); 

/*SCROLL CONTACT*/
sr.reveal('.contact__input',{interval: 200}); 

/*WORK ANIMATION */

const workImg1 = document.querySelector(".work__img1");
const workImg2 = document.querySelector(".work__img2");
const workTech1 = document.querySelector(".tech1");
const workTech2 = document.querySelector(".tech2");


function filtreOver(container, div){
    container.addEventListener("mouseover", function() 
    {
        div.classList.add("hidden")
    })
    container.addEventListener("mouseout", function() 
    {
        div.classList.remove("hidden")
    })}

filtreOver(workImg1, workTech1);
filtreOver(workImg2, workTech2)


/*SKILLS ANIMATION */

// let text = document.querySelector('.skills__text');

// function typeWriter(text) {
    
//     let splitText = text.innerText.split('');
    
//     text.innerHTML = '';
//     i = 0
//     setInterval(function(){
//       AjoutDeLettre()}
//       , 20 )
    
//     function AjoutDeLettre(){
//     if(i < splitText.length){
//       text.innerHTML += splitText[i];
//       i++;
//     }
//     }
// }


// window.addEventListener("scroll", () => {
//     if (window.scrollY = "100") {    
           
//         typeWriter(text);
        
       
//     }
  
//     }
// )
// window.removeEventListener("scroll", () => {
//     if (window.scrollY = "100") {    
           
//         typeWriter(text);
        
       
//     }
  
//     }
// )


