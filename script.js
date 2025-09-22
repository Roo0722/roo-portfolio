// Scroll Spy and Animations
document.addEventListener('DOMContentLoaded', function() {
    // Scroll spy for navigation
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    function updateActiveNav() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }

    // Scroll animations
    function animateOnScroll() {
        const fadeElements = document.querySelectorAll('.fade-up');
        
        fadeElements.forEach((element, index) => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                const delay = element.dataset.delay || 0;
                
                setTimeout(() => {
                    element.classList.add('animate');
                }, delay);
            }
        });
    }

    // Initial animation for hero section
    setTimeout(() => {
        const heroElements = document.querySelectorAll('.hero .fade-up');
        heroElements.forEach(element => {
            element.classList.add('animate');
        });
    }, 300);

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 100;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Event listeners
    window.addEventListener('scroll', function() {
        updateActiveNav();
        animateOnScroll();
    });

    // Initial calls
    updateActiveNav();
    animateOnScroll();

    // Navbar background on scroll
    window.addEventListener('scroll', function() {
        const navbar = document.getElementById('navbar');
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = 'rgba(17, 17, 17, 0.98)';
        } else {
            navbar.style.backgroundColor = 'rgba(17, 17, 17, 0.95)';
        }
    });
});
