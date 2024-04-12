
// var type = new Typed(document.getElementsByClassName("type"), {
//     strings: ["WEB DESIGN", "WEB ANIMATION"],
//     typeSpeed: 60,
//     backSpeed: 60,
//     loop: true,
//   });

    // const text = "Hello, World! This is a typing effect.";
    // let index = 0;

    // function typeWriter() {
    //   document.querySelectorAll(".type").textContent += text[index];
    //   index++;

    //   if (index < text.length) {
    //     setTimeout(typeWriter, 100); // Adjust typing speed (milliseconds)
    //   }
    // }

    // typeWriter();


    /* ***************buttom-top button**************** */

document.addEventListener("DOMContentLoaded", function () {
    var scrollToTopBtn = document.getElementById("scrollToTopBtn");
  
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
        console.log("clicked")
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
    });
  });
