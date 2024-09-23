// JavaScript for dynamic content
document.addEventListener('DOMContentLoaded', () => {
    // Scroll to section smoothly
    document.querySelectorAll('header nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        });
    });

    // Sticky header effect
    const header = document.querySelector('header');
    const showcase = document.getElementById('showcase');

    window.addEventListener('scroll', () => {
        if (window.scrollY > showcase.offsetHeight - header.offsetHeight) {
            header.style.background = '#0f0f0f';
            header.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.5)';
        } else {
            header.style.background = '#1e1e1e';
            header.style.boxShadow = 'none';
        }
    });

    // Dynamic project content (for future implementation)
    // This can be expanded with AJAX calls to load project data dynamically
});
