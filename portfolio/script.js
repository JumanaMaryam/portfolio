document.addEventListener("DOMContentLoaded", () => {
    console.log("Document loaded");

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function(e) {
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
            if (button.classList.contains('active')) {
                button.style.backgroundColor = '#388E3C';
            } else {
                button.style.backgroundColor = '#4CAF50';
            }
        });
    });

    // Download resume button
    document.getElementById('download-resume').addEventListener('click', function() {
        const link = document.createElement('a');
        link.href = '///C:/Users/HP/Desktop/Jum/vs%20code%20projects/resume.pdf.pdf';
        link.download = 'resume.pdf';  // Replace with the desired file name
        link.click();
    });
});

