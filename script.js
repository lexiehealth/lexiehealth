// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      });
    }
  });
});

// Header scroll effect
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.style.padding = "10px 0";
    header.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
  } else {
    header.style.padding = "15px 0";
    header.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.05)";
  }
});

// Form submission
const contactForm = document.querySelector(".contact-form form");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Get form values
    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const message = this.querySelector("textarea").value;

    // Here you would typically send the form data to a server
    // For now, we'll just show an alert
    alert(
      `Thank you, ${name}! Your message has been received. We'll contact you at ${email} shortly.`
    );

    // Reset the form
    this.reset();
  });
}

const baseUrl = "https://lexiehealth.com";

// Demo image click handler
const demoImage = document.querySelector(".demo-image");
if (demoImage) {
  demoImage.addEventListener("click", function () {
    // This would typically open a video or detailed demo
    // For now, we'll just trigger the same action as the demo button
    window.location.href =
      "mailto:lexiehealthai@gmail.com?subject=Demo%20Request&body=I'm%20interested%20in%20seeing%20a%20demo%20of%20LexieHealth%20AI.";
  });
}
