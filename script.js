document.addEventListener("DOMContentLoaded", () => {
    console.log("Document loaded");

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Skill button toggle effect
    const buttons = document.querySelectorAll('.skill-list button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            button.classList.toggle('active');
            button.style.backgroundColor = button.classList.contains('active') ? '#388E3C' : '#f77a56';
        });
    });

    // Resume download (adjust path to relative or URL-based)
    const downloadBtn = document.getElementById('download-resume');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', function () {
            const link = document.createElement('a');
            link.href = 'resume.pdf'; // Use relative path or public URL
            link.download = 'resume.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    }

    // Reveal on scroll observer
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('section, form, footer, header, nav').forEach(el => {
        revealObserver.observe(el);
    });
});
