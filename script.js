// Initialize Swiper for each country (e.g., Rwanda, Ethiopia, Costa Rica, India)
const swiperConfigs = {
    rwanda: new Swiper('#rwanda .swiper-container', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 30,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        pagination: {
            el: '#rwanda .swiper-pagination',
            clickable: true,
            type: 'bullets',
        },
        navigation: {
            nextEl: '#rwanda .swiper-button-next',
            prevEl: '#rwanda .swiper-button-prev',
        },
    }),
    ethiopia: new Swiper('#ethiopia .swiper-container', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 30,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        pagination: {
            el: '#ethiopia .swiper-pagination',
            clickable: true,
            type: 'bullets',
        },
        navigation: {
            nextEl: '#ethiopia .swiper-button-next',
            prevEl: '#ethiopia .swiper-button-prev',
        },
    }),
    costarica: new Swiper('#costarica .swiper-container', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 30,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        pagination: {
            el: '#costarica .swiper-pagination',
            clickable: true,
            type: 'bullets',
        },
        navigation: {
            nextEl: '#costarica .swiper-button-next',
            prevEl: '#costarica .swiper-button-prev',
        },
    }),
    india: new Swiper('#india .swiper-container', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 30,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        pagination: {
            el: '#india .swiper-pagination',
            clickable: true,
            type: 'bullets',
        },
        navigation: {
            nextEl: '#india .swiper-button-next',
            prevEl: '#india .swiper-button-prev',
        },
    })
};

// Handle button clicks to display the correct Swiper
document.querySelectorAll('.acc button').forEach((button, index) => {
    button.addEventListener('click', () => {
        const countries = ['rwanda', 'ethiopia', 'costarica', 'india'];

        // Hide all country content
        document.querySelectorAll('.country-content').forEach(content => {
            content.style.display = 'none';
        });

        // Show the selected country content
        document.getElementById(countries[index]).style.display = 'block';

        // Update active button
        const buttons = document.querySelectorAll('.acc button');
        buttons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');

    navToggle.addEventListener('click', function () {
        navLinks.classList.toggle('active');
    });
});

// document.addEventListener('DOMContentLoaded', function () {
//     // Navigation toggle for mobile
//     const navToggle = document.getElementById('navToggle');
//     const navLinks = document.getElementById('navLinks');

//     navToggle.addEventListener('click', function () {
//         navLinks.classList.toggle('active');
//         // Toggle between menu and close icons
//         const icon = navToggle.querySelector('i');
//         icon.classList.toggle('fa-bars');
//         icon.classList.toggle('fa-times');
//     });

//     // Close mobile menu when clicking outside
//     document.addEventListener('click', function (e) {
//         if (!navLinks.contains(e.target) && !navToggle.contains(e.target) && navLinks.classList.contains('active')) {
//             navLinks.classList.remove('active');
//             const icon = navToggle.querySelector('i');
//             icon.classList.add('fa-bars');
//             icon.classList.remove('fa-times');
//         }
//     });

//     // Navbar scroll effect
//     const navbar = document.querySelector('.navbar');
//     window.addEventListener('scroll', function () {
//         if (window.scrollY > 50) {
//             navbar.classList.add('scrolled');
//         } else {
//             navbar.classList.remove('scrolled');
//         }
//     });

//     // Initialize cart count
//     updateCartCount(0);
// });



// Function to update cart count
function updateCartCount(count) {
    const cartCount = document.querySelector('.cart-count');
    if (cartCount) {
        cartCount.textContent = count;
    }
}

// Add smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
