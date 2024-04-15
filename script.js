const darkMode = document.getElementById("darkMode");
const lightMode = document.getElementById("lightMode");
const Mode = document.getElementById("mode");

const typed = new Typed(".type", {
    strings: ["Web Sites", "Animation","Application"],
    typeSpeed: 60,
    backSpeed: 60,
    loop: true,
});

const darkModeToggle = document.getElementById('darkModeToggle');
const stylesheet = document.getElementById('stylesheet');

darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem('darkMode', 'enabled'); // Store user preference
  } else {
    localStorage.setItem('darkMode', 'disabled');
  }
});

// Check user preference on page load
if (localStorage.getItem('darkMode') === 'enabled') {
  document.body.classList.add('dark-mode');
}



// document.body.style.backgroundColor="skyblue"


/* ***************buttom-top button**************** */

document.addEventListener("DOMContentLoaded", function () {
    
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");
  
    window.addEventListener("scroll", function () {
        // Show or hide the button based on the scroll position

        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }

        
    });
  
    scrollToTopBtn.addEventListener("click", function () {
        // Scroll to the top of the page when the button is clicked
       
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

        document.body.scrollTop = 0; 
        document.documentElement.scrollTop = 0; 
    });
  });







