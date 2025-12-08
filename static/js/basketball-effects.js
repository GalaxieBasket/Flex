// Galaxie Basket - Dynamic Effects
document.addEventListener('DOMContentLoaded', function() {
    
    // Add floating logo particles (desktop only)
    function createLogoParticles() {
        if (window.innerWidth < 768) return; // Skip on mobile
        
        const particleContainer = document.createElement('div');
        particleContainer.id = 'basketball-particles';
        particleContainer.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: -1;
        `;
        document.body.appendChild(particleContainer);

        // Create particles every 20 seconds
        setInterval(() => {
            for (let i = 0; i < 3; i++) {
                setTimeout(() => {
                    const particle = document.createElement('div');
                    particle.style.cssText = `
                        position: absolute;
                        width: 35px;
                        height: 35px;
                        background: url('/theme/images/galaxie-logo.png') center/contain no-repeat;
                        background-size: contain;
                        opacity: 0.15;
                        animation: float ${15 + Math.random() * 10}s infinite linear;
                        left: ${Math.random() * 100}%;
                        top: 100%;
                        filter: brightness(1.2);
                    `;
                    particleContainer.appendChild(particle);

                    setTimeout(() => {
                        if (particle.parentNode) {
                            particle.remove();
                        }
                    }, 25000);
                }, i * 3000);
            }
        }, 20000);
    }

    // CSS for floating animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float {
            from {
                transform: translateY(0) rotate(0deg);
                opacity: 0.15;
            }
            10% {
                opacity: 0.3;
            }
            90% {
                opacity: 0.15;
            }
            to {
                transform: translateY(-100vh) rotate(360deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);

    // Initialize particles
    //createLogoParticles();

    // Smooth scroll for internal links
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
});