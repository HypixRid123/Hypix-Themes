// ==========================
// Dark Mode Toggle
// ==========================

const themeBtn = document.getElementById("theme-toggle");

if(localStorage.getItem("theme") === "dark"){
    document.body.classList.add("dark");
}

if(themeBtn){
    themeBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark");

        if(document.body.classList.contains("dark")){
            localStorage.setItem("theme","dark");
        }else{
            localStorage.setItem("theme","light");
        }
    });
}

// ==========================
// Testimonials Slider
// ==========================

const testimonials = [
    {
        text: "Amazing website design and very fast delivery.",
        author: "- Rahul Sharma"
    },
    {
        text: "Professional service and great support.",
        author: "- Priya Verma"
    },
    {
        text: "My business website looks premium now.",
        author: "- Arjun Gupta"
    },
    {
        text: "Excellent experience. Highly recommended.",
        author: "- Sneha Kapoor"
    }
];

let currentTestimonial = 0;

const testimonialText =
document.getElementById("testimonial-text");

const testimonialAuthor =
document.getElementById("testimonial-author");

function changeTestimonial(){

    if(testimonialText && testimonialAuthor){

        testimonialText.textContent =
        testimonials[currentTestimonial].text;

        testimonialAuthor.textContent =
        testimonials[currentTestimonial].author;

        currentTestimonial++;

        if(currentTestimonial >= testimonials.length){
            currentTestimonial = 0;
        }
    }
}

setInterval(changeTestimonial, 4000);

// ==========================
// Smooth Fade Animation
// ==========================

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){
            entry.target.style.opacity = "1";
            entry.target.style.transform =
            "translateY(0)";
        }

    });

}, {
    threshold: 0.1
});

const animatedElements =
document.querySelectorAll(
".card, .price-card, .portfolio-grid img, .testimonial-box"
);

animatedElements.forEach(item => {

    item.style.opacity = "0";
    item.style.transform =
    "translateY(40px)";
    item.style.transition =
    "all 0.8s ease";

    observer.observe(item);

});

// ==========================
// Contact Form Validation
// ==========================

const form = document.querySelector("form");

if(form){

    form.addEventListener("submit", function(e){

        e.preventDefault();

        const inputs =
        form.querySelectorAll("input");

        let valid = true;

        inputs.forEach(input => {

            if(input.value.trim() === ""){
                valid = false;
            }

        });

        if(valid){

            alert(
                "Thank you! Your request has been submitted successfully."
            );

            form.reset();

        } else {

            alert(
                "Please fill all required fields."
            );

        }

    });

}

// ==========================
// Navbar Active Link
// ==========================

const navLinks =
document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.forEach(item =>
            item.classList.remove("active")
        );

        link.classList.add("active");

    });

});

// ==========================
// Scroll To Top Button
// ==========================

const scrollBtn =
document.createElement("button");

scrollBtn.innerHTML = "↑";

scrollBtn.id = "scrollTopBtn";

document.body.appendChild(scrollBtn);

scrollBtn.style.position = "fixed";
scrollBtn.style.bottom = "90px";
scrollBtn.style.right = "20px";
scrollBtn.style.width = "50px";
scrollBtn.style.height = "50px";
scrollBtn.style.border = "none";
scrollBtn.style.borderRadius = "50%";
scrollBtn.style.cursor = "pointer";
scrollBtn.style.fontSize = "20px";
scrollBtn.style.display = "none";
scrollBtn.style.zIndex = "999";
scrollBtn.style.background = "#2563eb";
scrollBtn.style.color = "#fff";

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }

});

scrollBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

// ==========================
// Console Welcome Message
// ==========================

console.log(
"Welcome to Hypix Themes Dashboard"
);
