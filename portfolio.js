let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.recommendation-item');
    const dots = document.querySelectorAll('.dot');
    let currentIndex = 0;

    function showRecommendation(index) {
        items.forEach((item, i) => {
            item.classList.remove('active');
            dots[i].classList.remove('active');
        });
        items[index].classList.add('active');
        dots[index].classList.add('active');
    }

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index;
            showRecommendation(currentIndex);
        });
    });


    setInterval(() => {
        currentIndex = (currentIndex + 1) % items.length;
        showRecommendation(currentIndex);
    }, 6000);
});



window.onscroll = () => {
    let top = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });


    let header= document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY>100);

    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');

};


ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-contact p, .about-content', { origin: 'right' });


const typed = new Typed('.multiple-text'.{
    strings:['Frontend Developer , Web Designer , Video Editor '],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
});