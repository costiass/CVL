document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section");
    let currentSection = 0;

    function showSection(index) {
        sections.forEach((section, i) => {
            if (i === index) {
                setTimeout(() => {
                    section.style.opacity = 1;
                }, 250);
                section.style.display = "flex";
            } else {
                section.style.opacity = 0;
                setTimeout(() => {
                    section.style.display = "none";
                }, 1000);
            }
        });
    }

    function nextSection() {
        currentSection = (currentSection + 1) % sections.length;
        showSection(currentSection);
    }

    showSection(currentSection);
    setInterval(nextSection, 2000);
});