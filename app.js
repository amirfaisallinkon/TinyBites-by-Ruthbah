
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').slice(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    const backToTopBtn = document.getElementById("backToTop");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            backToTopBtn.style.display = "block";
        } else {
            backToTopBtn.style.display = "none";
        }
    });

    backToTopBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
function sendToWhatsApp() {
    let name = document.querySelector('input[placeholder="Your name"]').value;
    let location = document.querySelector('input[placeholder="Your location"]').value;
    let phone = document.querySelector('input[placeholder="Your phone number"]').value;
    let cake = document.querySelector('input[placeholder="Cake name and Amount"]').value;

    let msg = `Name: ${name}%0ALocation: ${location}%0APhone: ${phone}%0ACake: ${cake}`;
    let phoneNumber = "8801738205144";

    window.open(`https://wa.me/${phoneNumber}?text=${msg}`, "_blank");
}
