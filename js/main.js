document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Logic
    const menuBtn = document.querySelector('button[aria-label="Menu"]');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('open');
            const icon = menuBtn.querySelector('.material-icons');
            if (icon) icon.textContent = mobileMenu.classList.contains('open') ? 'close' : 'menu';
        });
    }

    // Scroll Reveal (IntersectionObserver)
    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    if (revealElements.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

        revealElements.forEach(el => observer.observe(el));
    }

    // Form Handling (both hero and contact forms)
    document.querySelectorAll('form').forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const inputs = form.querySelectorAll('input[required], select[required]');
            let isValid = true;

            inputs.forEach(input => {
                if (!input.value.trim() || (input.tagName === 'SELECT' && input.value === '')) {
                    isValid = false;
                    input.classList.add('border-red-500');
                    input.classList.remove('border-slate-700');
                } else {
                    input.classList.remove('border-red-500');
                    input.classList.add('border-slate-700');
                }
            });

            if (isValid) {
                const submitBtn = form.querySelector('button[type="submit"]');
                const originalHTML = submitBtn.innerHTML;
                submitBtn.disabled = true;
                submitBtn.innerHTML = '<span class="material-icons animate-spin mr-2">refresh</span> Enviando...';

                setTimeout(() => {
                    submitBtn.innerHTML = '<span class="material-icons mr-2">check_circle</span> Enviado con éxito';
                    submitBtn.classList.remove('bg-primary');
                    submitBtn.classList.add('bg-green-600');

                    setTimeout(() => {
                        form.reset();
                        submitBtn.disabled = false;
                        submitBtn.innerHTML = originalHTML;
                        submitBtn.classList.remove('bg-green-600');
                        submitBtn.classList.add('bg-primary');
                    }, 2500);
                }, 1500);
            }
        });
    });

    // Smooth Scrolling for Anchors
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                if (mobileMenu && mobileMenu.classList.contains('open')) {
                    mobileMenu.classList.remove('open');
                    const icon = menuBtn.querySelector('.material-icons');
                    if (icon) icon.textContent = 'menu';
                }
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Active nav highlight on scroll
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav a[href^="#"]');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            if (window.scrollY >= sectionTop) current = section.getAttribute('id');
        });
        navLinks.forEach(link => {
            link.classList.remove('text-primary');
            if (link.getAttribute('href') === '#' + current) link.classList.add('text-primary');

        });
    });

    // Initialize Glowing Effects
    const cards = document.querySelectorAll('.glow-effect');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
            card.style.setProperty('--opacity', '1');
        });

        card.addEventListener('mouseleave', () => {
            card.style.setProperty('--opacity', '0');
        });
    });
});

// Typewriter Effect
class Typewriter {
    constructor(el, text, speed = 50) {
        this.el = el;
        this.text = text;
        this.speed = speed;
        this.txt = '';
        this.tick();
    }

    tick() {
        this.txt = this.text.substring(0, this.txt.length + 1);
        this.el.innerHTML = this.txt;

        if (this.txt === this.text) return;

        setTimeout(() => this.tick(), this.speed);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const typewriterEl = document.getElementById('typewriter-text');
    if (typewriterEl) {
        // Initial delay before typing starts
        setTimeout(() => {
            new Typewriter(typewriterEl, "La ventaja competitiva que sus competidores no ven venir.", 40);
        }, 500);
    }

    // Initialize Falling Pattern
    const fallingContainer = document.getElementById('falling-pattern-container');
    if (fallingContainer) {
        new FallingPattern(fallingContainer);
    }
});

class FallingPattern {
    constructor(container) {
        this.container = container;
        this.color = '#2b8cee'; // var(--primary)
        this.duration = 150000; // 150s
        this.init();
    }

    init() {
        // Create Pattern DIV
        const pattern = document.createElement('div');
        pattern.style.position = 'absolute';
        pattern.style.inset = '0';
        pattern.style.zIndex = '0'; // Behind overlay

        // Generate Background Images
        const patterns = [
            `radial-gradient(4px 100px at 0px 235px, ${this.color}, transparent)`,
            `radial-gradient(4px 100px at 300px 235px, ${this.color}, transparent)`,
            `radial-gradient(1.5px 1.5px at 150px 117.5px, ${this.color} 100%, transparent 150%)`,
            `radial-gradient(4px 100px at 0px 252px, ${this.color}, transparent)`,
            `radial-gradient(4px 100px at 300px 252px, ${this.color}, transparent)`,
            `radial-gradient(1.5px 1.5px at 150px 126px, ${this.color} 100%, transparent 150%)`,
            `radial-gradient(4px 100px at 0px 150px, ${this.color}, transparent)`,
            `radial-gradient(4px 100px at 300px 150px, ${this.color}, transparent)`,
            `radial-gradient(1.5px 1.5px at 150px 75px, ${this.color} 100%, transparent 150%)`,
            `radial-gradient(4px 100px at 0px 253px, ${this.color}, transparent)`,
            `radial-gradient(4px 100px at 300px 253px, ${this.color}, transparent)`,
            `radial-gradient(1.5px 1.5px at 150px 126.5px, ${this.color} 100%, transparent 150%)`,
            `radial-gradient(4px 100px at 0px 204px, ${this.color}, transparent)`,
            `radial-gradient(4px 100px at 300px 204px, ${this.color}, transparent)`,
            `radial-gradient(1.5px 1.5px at 150px 102px, ${this.color} 100%, transparent 150%)`,
            `radial-gradient(4px 100px at 0px 134px, ${this.color}, transparent)`,
            `radial-gradient(4px 100px at 300px 134px, ${this.color}, transparent)`,
            `radial-gradient(1.5px 1.5px at 150px 67px, ${this.color} 100%, transparent 150%)`,
            `radial-gradient(4px 100px at 0px 179px, ${this.color}, transparent)`,
            `radial-gradient(4px 100px at 300px 179px, ${this.color}, transparent)`,
            `radial-gradient(1.5px 1.5px at 150px 89.5px, ${this.color} 100%, transparent 150%)`,
            `radial-gradient(4px 100px at 0px 299px, ${this.color}, transparent)`,
            `radial-gradient(4px 100px at 300px 299px, ${this.color}, transparent)`,
            `radial-gradient(1.5px 1.5px at 150px 149.5px, ${this.color} 100%, transparent 150%)`,
            `radial-gradient(4px 100px at 0px 215px, ${this.color}, transparent)`,
            `radial-gradient(4px 100px at 300px 215px, ${this.color}, transparent)`,
            `radial-gradient(1.5px 1.5px at 150px 107.5px, ${this.color} 100%, transparent 150%)`,
            `radial-gradient(4px 100px at 0px 281px, ${this.color}, transparent)`,
            `radial-gradient(4px 100px at 300px 281px, ${this.color}, transparent)`,
            `radial-gradient(1.5px 1.5px at 150px 140.5px, ${this.color} 100%, transparent 150%)`,
            `radial-gradient(4px 100px at 0px 158px, ${this.color}, transparent)`,
            `radial-gradient(4px 100px at 300px 158px, ${this.color}, transparent)`,
            `radial-gradient(1.5px 1.5px at 150px 79px, ${this.color} 100%, transparent 150%)`,
            `radial-gradient(4px 100px at 0px 210px, ${this.color}, transparent)`,
            `radial-gradient(4px 100px at 300px 210px, ${this.color}, transparent)`,
            `radial-gradient(1.5px 1.5px at 150px 105px, ${this.color} 100%, transparent 150%)`
        ];
        pattern.style.backgroundImage = patterns.join(', ');

        const backgroundSizes = [
            '300px 235px', '300px 235px', '300px 235px',
            '300px 252px', '300px 252px', '300px 252px',
            '300px 150px', '300px 150px', '300px 150px',
            '300px 253px', '300px 253px', '300px 253px',
            '300px 204px', '300px 204px', '300px 204px',
            '300px 134px', '300px 134px', '300px 134px',
            '300px 179px', '300px 179px', '300px 179px',
            '300px 299px', '300px 299px', '300px 299px',
            '300px 215px', '300px 215px', '300px 215px',
            '300px 281px', '300px 281px', '300px 281px',
            '300px 158px', '300px 158px', '300px 158px',
            '300px 210px', '300px 210px'
        ].join(', ');
        pattern.style.backgroundSize = backgroundSizes;

        const startPositions = '0px 220px, 3px 220px, 151.5px 337.5px, 25px 24px, 28px 24px, 176.5px 150px, 50px 16px, 53px 16px, 201.5px 91px, 75px 224px, 78px 224px, 226.5px 230.5px, 100px 19px, 103px 19px, 251.5px 121px, 125px 120px, 128px 120px, 276.5px 187px, 150px 31px, 153px 31px, 301.5px 120.5px, 175px 235px, 178px 235px, 326.5px 384.5px, 200px 121px, 203px 121px, 351.5px 228.5px, 225px 224px, 228px 224px, 376.5px 364.5px, 250px 26px, 253px 26px, 401.5px 105px, 275px 75px, 278px 75px, 426.5px 180px';
        const endPositions = '0px 6800px, 3px 6800px, 151.5px 6917.5px, 25px 13632px, 28px 13632px, 176.5px 13758px, 50px 5416px, 53px 5416px, 201.5px 5491px, 75px 17175px, 78px 17175px, 226.5px 17301.5px, 100px 5119px, 103px 5119px, 251.5px 5221px, 125px 8428px, 128px 8428px, 276.5px 8495px, 150px 9876px, 153px 9876px, 301.5px 9965.5px, 175px 13391px, 178px 13391px, 326.5px 13540.5px, 200px 14741px, 203px 14741px, 351.5px 14848.5px, 225px 18770px, 228px 18770px, 376.5px 18910.5px, 250px 5082px, 253px 5082px, 401.5px 5161px, 275px 6375px, 278px 6375px, 426.5px 6480px';

        // Use Web Animations API
        pattern.animate(
            [
                { backgroundPosition: startPositions },
                { backgroundPosition: endPositions }
            ],
            {
                duration: this.duration,
                iterations: Infinity,
                easing: 'linear'
            }
        );

        this.container.appendChild(pattern);

        // Create Grid Overlay
        const overlay = document.createElement('div');
        overlay.style.position = 'absolute';
        overlay.style.inset = '0';
        overlay.style.zIndex = '1';
        overlay.style.backdropFilter = 'blur(1px)'; // Using lighter blur
        // Dot Pattern mask: using background-dark color for the main fill, transparent for holes?
        // No, the requirement is "radial-gradient(circle at 50% 50%, transparent 0, transparent 2px, ${backgroundColor} 2px)"
        // This means it paints the BACKGROUND COLOR everywhere EXCEPT the dots (which are transparent).
        // This effectively creates a mask where you only see the falling pattern through the dots.
        // The background color of the hero is #101922 (background-dark).
        overlay.style.backgroundImage = `radial-gradient(circle at 50% 50%, transparent 0, transparent 2px, #101922 2px)`;
        overlay.style.backgroundSize = '8px 8px';

        this.container.appendChild(overlay);
    }
}
