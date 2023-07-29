const bar =document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');




if(bar){
    bar.addEventListener('click',()=>{
        nav.classList.add('active');
    })
    const navLinks = document.querySelectorAll(".nav-links");

// Add click event listeners to each link
navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent default link behavior

    // Remove the active class from all links
    navLinks.forEach((link) => {
      link.classList.remove("active");
    });

    // Add the active class to the clicked link
    link.classList.add("active");
    nav.classList.remove('active');
    

    // Get the target section ID from the link's href attribute
    const targetSectionID = link.getAttribute("href");

    // Scroll to the target section
    document.querySelector(targetSectionID).scrollIntoView({
      behavior: "smooth",
    });
  });
});
}

if(close){
    close.addEventListener('click',()=>{
      nav.classList.remove('active'); 
    })
}