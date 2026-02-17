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
});
