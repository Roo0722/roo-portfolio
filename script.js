:root {
    --primary-color: #00ffc8;
    --secondary-color: #00d4a8;
    --bg-dark: #111111;
    --bg-card: #1a1a1a;
    --text-light: #ffffff;
    --text-muted: #e0e0e0;
    --shadow-color: rgba(0, 255, 200, 0.3);
}

.light-theme {
    --bg-dark: #f5f5f5;
    --bg-card: #ffffff;
    --text-light: #111111;
    --text-muted: #666666;
    --shadow-color: rgba(0, 200, 150, 0.3);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    background-color: var(--bg-dark);
    color: var(--text-light);
    line-height: 1.7;
    overflow-x: hidden;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}

.navbar {
    position: fixed;
    top: 0;
    width: 100%;
    background-color: rgba(17, 17, 17, 0.95);
    backdrop-filter: blur(20px);
    padding: 1.2rem 0;
    z-index: 1000;
    border-bottom: 1px solid rgba(0, 255, 200, 0.1);
    transition: all 0.3s ease;
}

.nav-container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 2rem;
    position: relative;
}

#theme-toggle {
    position: absolute;
    right: 2rem;
    background: none;
    border: none;
    color: var(--primary-color);
    font-size: 1.2rem;
    cursor: pointer;
    transition: transform 0.3s ease;
}

#theme-toggle:hover {
    transform: scale(1.1);
}

.nav-links {
    display: flex;
    list-style: none;
    gap: 2.5rem;
}

.nav-link {
    color: var(--text-light);
    text-decoration: none;
    font-weight: 500;
    font-size: 0.95rem;
    transition: all 0.3s ease;
    padding: 0.75rem 1.25rem;
    border-radius: 12px;
    position: relative;
    overflow: hidden;
}

.nav-link::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent, var(--primary-color), transparent);
    transition: all 0.4s ease;
    transform: translateX(-50%);
}

.nav-link:hover::before,
.nav-link.active::before {
    width: 80%;
}

.nav-link:hover,
.nav-link.active {
    color: var(--primary-color);
    background-color: rgba(0, 255, 200, 0.08);
}

.nav-link:focus {
    outline: 2px solid var(--primary-color);
    outline-offset: 2px;
}

.hero {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background: linear-gradient(135deg, var(--bg-dark) 0%, var(--bg-card) 100%);
    position: relative;
    overflow: hidden;
    padding: 0 1rem;
}

.hero-glow {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 800px;
    height: 800px;
    background: radial-gradient(circle, rgba(0, 255, 200, 0.15) 0%, transparent 70%);
    transform: translate(-50%, -50%);
    animation: pulse 4s ease-in-out infinite;
    pointer-events: none;
}

@keyframes pulse {
    0%, 100% {
        transform: translate(-50%, -50%) scale(1);
        opacity: 0.6;
    }
    50% {
        transform: translate(-50%, -50%) scale(1.1);
        opacity: 0.8;
    }
}

.hero-content {
    position: relative;
    z-index: 2;
    max-width: 800px;
}

.hero-title {
    font-size: 4rem;
    font-weight: 900;
    margin-bottom: 1.5rem;
    background: linear-gradient(135deg, var(--text-light) 0%, var(--primary-color) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    letter-spacing: -0.02em;
    line-height: 1.1;
}

.hero-subtitle {
    font-size: 1.75rem;
    color: var(--primary-color);
    margin-bottom: 2rem;
    font-weight: 600;
    letter-spacing: -0.01em;
}

.hero-intro {
    font-size: 1.25rem;
    color: var(--text-muted);
    margin-bottom: 3rem;
    line-height: 1.6;
    font-weight: 400;
}

.hero-cta {
    margin-top: 2rem;
}

.cta-button {
    display: inline-flex;
    align-items: center;
    gap: 0.75rem;
    background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
    color: var(--bg-dark);
    text-decoration: none;
    font-weight: 600;
    font-size: 1.1rem;
    padding: 1rem 2.5rem;
    border-radius: 50px;
    transition: all 0.3s ease;
    box-shadow: 0 8px 25px var(--shadow-color);
}

.cta-button:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 35px var(--shadow-color);
}

.cta-button:focus {
    outline: 2px solid var(--primary-color);
    outline-offset: 2px;
}

.section {
    padding: 8rem 0;
    position: relative;
}

.section-title {
    font-size: 3rem;
    text-align: center;
    margin-bottom: 4rem;
    color: var(--primary-color);
    font-weight: 700;
    letter-spacing: -0.02em;
    position: relative;
}

.section-title::after {
    content: '';
    position: absolute;
    bottom: -1rem;
    left: 50%;
    width: 60px;
    height: 3px;
    background: linear-gradient(90deg, transparent, var(--primary-color), transparent);
    transform: translateX(-50%);
}

.about-content {
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
}

.about-text {
    font-size: 1.3rem;
    color: var(--text-muted);
    line-height: 1.8;
    font-weight: 400;
}

.skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 2.5rem;
    margin-top: 3rem;
}

.skill-card {
    background: linear-gradient(135deg, var(--bg-card) 0%, #242424 100%);
    padding: 2.5rem;
    border-radius: 20px;
    border: 1px solid rgba(0, 255, 200, 0.2);
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    text-align: center;
    position: relative;
    overflow: hidden;
    will-change: transform;
}

.skill-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
    transform: scaleX(0);
    transition: transform 0.4s ease;
}

.skill-card:hover::before {
    transform: scaleX(1);
}

.skill-card:hover {
    transform: translateY(-8px);
    border-color: rgba(0, 255, 200, 0.5);
    box-shadow: 0 20px 40px var(--shadow-color);
}

.skill-icon {
    font-size: 2.5rem;
    color: var(--primary-color);
    margin-bottom: 1.5rem;
    transition: transform 0.3s ease;
}

.skill-card:hover .skill-icon {
    transform: scale(1.1);
}

.skill-card h3 {
    color: var(--text-light);
    margin-bottom: 0.5rem;
    font-size: 1.2rem;
    font-weight: 600;
}

.experience-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 3rem;
    margin-top: 3rem;
}

.experience-card {
    background: linear-gradient(135deg, var(--bg-card) 0%, #242424 100%);
    padding: 3rem;
    border-radius: 20px;
    border: 1px solid rgba(0, 255, 200, 0.2);
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    will-change: transform;
}

.experience-card:hover {
    transform: translateY(-8px);
    border-color: rgba(0, 255, 200, 0.5);
    box-shadow: 0 20px 40px var(--shadow-color);
}

.experience-icon {
    font-size: 2rem;
    color: var(--primary-color);
    margin-bottom: 1.5rem;
    transition: transform 0.3s ease;
}

.experience-card:hover .experience-icon {
    transform: scale(1.1);
}

.experience-card h3 {
    color: var(--text-light);
    margin-bottom: 1rem;
    font-size: 1.4rem;
    font-weight: 600;
}

.experience-card .company {
    color: var(--text-muted);
    font-weight: 500;
    margin-bottom: 0.75rem;
    font-size: 1.05rem;
}

.experience-card .period {
    color: var(--primary-color);
    font-size: 0.95rem;
    font-weight: 500;
}

.projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 3rem;
    margin-top: 3rem;
}

.project-card {
    background: linear-gradient(135deg, var(--bg-card) 0%, #242424 100%);
    padding: 3rem;
    border-radius: 20px;
    border: 1px solid rgba(0, 255, 200, 0.2);
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    will-change: transform;
}

.project-card:hover {
    transform: translateY(-8px);
    border-color: rgba(0, 255, 200, 0.5);
    box-shadow: 0 20px 40px var(--shadow-color);
}

.project-icon {
    font-size: 2rem;
    color: var(--primary-color);
    margin-bottom: 1.5rem;
    transition: transform 0.3s ease;
}

.project-card:hover .project-icon {
    transform: scale(1.1);
}

.project-card h3 {
    color: var(--text-light);
    margin-bottom: 1.5rem;
    font-size: 1.4rem;
    font-weight: 600;
}

.project-card p {
    color: var(--text-muted);
    margin-bottom: 2rem;
    line-height: 1.7;
    font-size: 1.05rem;
}

.project-link {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--primary-color);
    text-decoration: none;
    font-weight: 600;
    padding: 0.75rem 1.5rem;
    border: 2px solid var(--primary-color);
    border-radius: 12px;
    transition: all 0.3s ease;
    font-size: 0.95rem;
}

.project-link:hover {
    background-color: var(--primary-color);
    color: var(--bg-dark);
    transform: translateY(-2px);
}

.project-link:focus {
    outline: 2px solid var(--primary-color);
    outline-offset: 2px;
}

.certificates-list {
    max-width: 900px;
    margin: 0 auto;
}

.certificate-item {
    background: linear-gradient(135deg, var(--bg-card) 0%, #242424 100%);
    padding: 2rem;
    margin-bottom: 2rem;
    border-radius: 20px;
    border: 1px solid rgba(0, 255, 200, 0.2);
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
    will-change: transform;
}

.certificate-item:hover {
    transform: translateY(-5px);
    border-color: rgba(0, 255, 200, 0.5);
    box-shadow: 0 15px 35px var(--shadow-color);
}

.certificate-icon {
    font-size: 2rem;
    color: var(--primary-color);
    min-width: 60px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
}

.certificate-icon svg {
    color: var(--primary-color);
    transition: all 0.3s ease;
}

.certificate-item:hover .certificate-icon svg {
    transform: scale(1.1);
}

.certificate-info {
    flex: 1;
}

.certificate-info h3 {
    color: var(--text-light);
    margin-bottom: 0.5rem;
    font-size: 1.2rem;
    font-weight: 600;
}

.certificate-info .period {
    color: var(--primary-color);
    font-size: 0.95rem;
    font-weight: 500;
}

.certificate-link {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--primary-color);
    text-decoration: none;
    font-weight: 600;
    padding: 0.75rem 1.5rem;
    border: 2px solid var(--primary-color);
    border-radius: 12px;
    transition: all 0.3s ease;
    white-space: nowrap;
    font-size: 0.9rem;
}

.certificate-link:hover {
    background-color: var(--primary-color);
    color: var(--bg-dark);
    transform: translateY(-2px);
}

.certificate-link:focus {
    outline: 2px solid var(--primary-color);
    outline-offset: 2px;
}

.contact-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2.5rem;
    margin-top: 3rem;
}

.contact-item {
    background: linear-gradient(135deg, var(--bg-card) 0%, #242424 100%);
    padding: 3rem 2rem;
    border-radius: 20px;
    border: 1px solid rgba(0, 255, 200, 0.2);
    text-align: center;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    will-change: transform;
}

.contact-item:hover {
    transform: translateY(-8px);
    border-color: rgba(0, 255, 200, 0.5);
    box-shadow: 0 20px 40px var(--shadow-color);
}

.contact-icon {
    font-size: 2.5rem;
    color: var(--primary-color);
    margin-bottom: 1.5rem;
    transition: transform 0.3s ease;
}

.contact-item:hover .contact-icon {
    transform: scale(1.1);
}

.contact-item h3 {
    color: var(--text-light);
    margin-bottom: 1rem;
    font-size: 1.2rem;
    font-weight: 600;
}

.contact-link {
    color: var(--text-muted);
    text-decoration: none;
    font-weight: 500;
    transition: all 0.3s ease;
    font-size: 1.05rem;
}

.contact-link:hover {
    color: var(--primary-color);
}

.contact-link:focus {
    outline: 2px solid var(--primary-color);
    outline-offset: 2px;
}

.footer {
    background-color: #0d0d0d;
    text-align: center;
    padding: 3rem 0;
    border-top: 1px solid rgba(0, 255, 200, 0.2);
    color: var(--text-muted);
    font-size: 0.95rem;
}

.fade-up {
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.fade-up.animate {
    opacity: 1;
    transform: translateY(0);
}

@media (max-width: 768px) {
    .navbar {
        padding: 0.8rem 0;
    }
    
    .nav-links {
        flex-wrap: wrap;
        gap: 0.8rem;
        justify-content: center;
        padding: 0 1rem;
    }

    #theme-toggle {
        right: 1rem;
        font-size: 1rem;
    }

    .nav-link {
        padding: 0.5rem 0.8rem;
        font-size: 0.85rem;
        border-radius: 8px;
    }

    .hero {
        min-height: 100vh;
        padding: 6rem 1.5rem 4rem;
        justify-content: center;
    }

    .hero-title {
        font-size: 2.2rem;
        margin-bottom: 1rem;
        line-height: 1.2;
    }

    .hero-subtitle {
        font-size: 1.1rem;
        margin-bottom: 1.5rem;
        line-height: 1.3;
    }

    .hero-intro {
        font-size: 1rem;
        margin-bottom: 2rem;
        line-height: 1.5;
        padding: 0 1rem;
    }

    .cta-button {
        font-size: 1rem;
        padding: 0.9rem 2rem;
    }

    .section {
        padding: 4rem 0;
    }

    .section-title {
        font-size: 2rem;
        margin-bottom: 2.5rem;
    }

    .container {
        padding: 0 1.5rem;
    }

    .about-text {
        font-size: 1.1rem;
        line-height: 1.6;
    }

    .skills-grid,
    .experience-grid,
    .projects-grid {
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }

    .skill-card,
    .experience-card,
    .project-card,
    .contact-item {
        padding: 2rem 1.5rem;
    }

    .certificate-item {
        flex-direction: column;
        text-align: center;
        gap: 1.5rem;
        padding: 2rem 1.5rem;
    }

    .certificate-link {
        font-size: 0.85rem;
        padding: 0.6rem 1.2rem;
    }

    .contact-grid {
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }
}

@media (max-width: 480px) {
    .hero {
        padding: 5rem 1rem 3rem;
    }
    
    .hero-title {
        font-size: 1.8rem;
        margin-bottom: 0.8rem;
    }

    .hero-subtitle {
        font-size: 1rem;
        margin-bottom: 1.2rem;
    }

    .hero-intro {
        font-size: 0.95rem;
        margin-bottom: 1.5rem;
        padding: 0;
    }

    .section-title {
        font-size: 1.6rem;
        margin-bottom: 2rem;
    }

    .nav-links {
        gap: 0.5rem;
        padding: 0 0.5rem;
    }

    .nav-link {
        padding: 0.4rem 0.6rem;
        font-size: 0.8rem;
    }

    .container {
        padding: 0 1rem;
    }

    .skill-card,
    .experience-card,
    .project-card,
    .certificate-item,
    .contact-item {
        padding: 1.5rem 1rem;
    }

    .cta-button {
        font-size: 0.9rem;
        padding: 0.8rem 1.5rem;
    }
}

@media (max-width: 768px) and (orientation: landscape) {
    .hero {
        min-height: 100vh;
        padding: 4rem 1.5rem 2rem;
    }
    
    .hero-title {
        font-size: 2rem;
    }
    
    .hero-subtitle {
        font-size: 1rem;
    }
    
    .hero-intro {
        font-size: 0.9rem;
        margin-bottom: 1.5rem;
    }
}
