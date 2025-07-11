//  Toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {

  menuIcon.classList.toggle('bx-x')
  navbar.classList.toggle('active')

}

// sticky navabr
let header = document.querySelector('header');
header.classList.toggle('sticky', window.scrollY > 100);


// remove toggle icon and navbar when click navbar link (scroll)

window.onscroll = () => {
menuIcon.classList.remove('bx-x')
navbar.classList.remove('active')
};


// scroll reveal
ScrollReveal({ 
  // reset: true,
  distance: '80px',
  duration: 2000,
  delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

//  Typed JS
// var typed = new typed('.multiple-text', {
  
// strings: ['Frontend Developer', 'Youtuber', 'Blogger'],
// typeSpeed: 100,
// backSpeed: 100,
// backDelay: 1000,
// loop: true


// });

var typed = new Typed('.multiple-text', {
  strings: ['Frontend Developer', 'Youtuber'],
  typeSpeed: 100,
  backSpeed: 50,
  backDelay: 1000,
  loop: true
});
