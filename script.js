document.addEventListener('DOMContentLoaded', () => {
    // Utility: Debounce function
    const debounce = (func, wait) => {
        let timeout;
        return (...args) => {
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(this, args), wait);
        };
    };

    // Scroll Spy
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    const updateActiveNav = () => {
        let current = '';
        sections.forEach(section => {
            if (section && section.getAttribute('id')) {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (window.pageYOffset >= sectionTop - 200) {
                    current = section.getAttribute('id');
                }
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    };

    // Intersection Observer for Animations
    const fadeElements = document.querySelectorAll('.fade-up');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const delay = element.dataset.delay || 0;
                setTimeout(() => {
                    element.classList.add('animate');
                }, delay);
                observer.unobserve(element);
            }
        });
    }, { threshold: 0.1 });

    fadeElements.forEach(element => observer.observe(element));

    // Initial animation for hero section
    setTimeout(() => {
        const heroElements = document.querySelectorAll('.hero .fade-up');
        heroElements.forEach(element => element.classList.add('animate'));
    }, 300);

    // Smooth scrolling
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 100;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                targetSection.focus({ preventScroll: true });
                if (document.activeElement !== targetSection) {
                    targetSection.setAttribute('tabindex', '-1');
                    targetSection.focus();
                }
            }
        });
    });

    // Navbar background on scroll
    const updateNavbar = () => {
        const navbar = document.getElementById('navbar');
        if (navbar) {
            navbar.style.backgroundColor = window.scrollY > 50 
                ? 'rgba(17, 17, 17, 0.98)' 
                : 'rgba(17, 17, 17, 0.95)';
        }
    };

    // Theme Toggle
    const themeToggle = document.getElementById('theme-toggle');
    const setTheme = (theme) => {
        document.body.classList.toggle('light-theme', theme === 'light');
        themeToggle.textContent = theme === 'light' ? '🌙' : '☀️';
        localStorage.setItem('theme', theme);
    };

    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);

    themeToggle.addEventListener('click', () => {
        const currentTheme = document.body.classList.contains('light-theme') ? 'dark' : 'light';
        setTheme(currentTheme);
    });

    // Event listeners
    window.addEventListener('scroll', debounce(() => {
        updateActiveNav();
        updateNavbar();
    }, 10));

    // Initial calls
    updateActiveNav();
});
