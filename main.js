const elementsToAnimate = document.querySelectorAll('.animatable');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in'); 
            observer.unobserve(entry.target); 
        }
    });
}, { threshold: 0.1 }); 

// Apply the observer to all animatable elements
elementsToAnimate.forEach(el => observer.observe(el));
   
// Example: Animation triggered by button click
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', () => {
        const target = document.querySelector('#about');
        if (target) {
            target.classList.remove('fade-in');
            void target.offsetWidth; // Reset animation
            target.classList.add('fade-in');
        }
    });
});

// Scroll to sections smoothly
document.querySelectorAll('nav a, .btn').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const targetId = event.target.getAttribute('href');
        if (targetId.startsWith('#')) {
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});