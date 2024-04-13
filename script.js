const typed = new Typed(".type", {
    strings: ["Web Sites", "Animation","Application"],
    typeSpeed: 60,
    backSpeed: 60,
    loop: true,
});


   
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
        console.log("wirjubg")

        document.body.scrollTop = 0; 
        document.documentElement.scrollTop = 0; 
    });
  });







