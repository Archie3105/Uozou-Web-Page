const socket = io('http://localhost:7500')


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


  // ********************Live Chat******************

const name = document.getElementsByClassName('nameInput').value;
const email = document.getElementsByClassName('message-input').value;
const phone = document.getElementsByClassName('message-input').value;
const startBtn = document.getElementsByClassName('startBtn');
const form = document.getElementById('send-container');
const  messageInput = document.getElementById("messageInp");
const messageContainer = document.querySelector(".liveChat");
var audio = new Audio('./media/ting.mp3');


//   const name = prompt("Enter your name to join");

  const append = (message, position) => {
      const messageElement = document.createElement('div');
      messageElement.innerText = message;
      messageElement.classList.add('message');
      messageElement.classList.add(position);
      messageContainer.append(messageElement);
  
      if(position == 'left' ){
          audio.play();
      }
  }



//   function nextPage(e) {
//     e.preventDefault();
// //     const name = document.getElementsByClassName('nameInput').value;
//     const email = document.getElementsByClassName('message-input').value;
//     const phone = document.getElementsByClassName('message-input').value;

//     const liveChatContainer = document.getElementsByClassName('liveChatContainer');
//     const chatbox = document.getElementById('chatbox');
//     // Display the username on the next page
//     // document.getElementById("output").textContent = name;

//     // Hide the current page and display the next page
//     chatbox.style.visibility = "hidden";
//     liveChatContainer.style.visibility = "visible";

// }
const nextPage = (e) =>{
  e.preventDefault();
  chatbox.style.display = "none";
  liveChatContainer.style.display = "block";

}
  
  
  form.addEventListener('submit',(e) => {
      e.preventDefault();
      const message = messageInput.value;
      append(`You: ${message}`, 'right');
      socket.emit('send',message);
      messageInput.value="";
  })
  
  
  
  socket.emit('new-user-joined', name);
  
  socket.on('user-joined', name => {
      append(`${name} joined the chat`, 'right')
  })
  
  socket.on('receive', data => {
      append(`${data.name}: ${data.message}`, 'left')
  })
  
  socket.on('left', name => {
      append(`${data.name} left the chat`, 'left')
  })
    

