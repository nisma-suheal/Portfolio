// Header
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

menuToggle.addEventListener('click', () => {
  if (mobileMenu.classList.contains('hidden')) {
    mobileMenu.classList.remove('hidden');
    mobileMenu.classList.add('slide-down');
  } else {
    mobileMenu.classList.add('hidden');
    mobileMenu.classList.remove('slide-down');
  }
  mobileMenu.classList.toggle('flex');
});


// back-to-top
const backToTop = document.getElementById('back-to-top');

window.onscroll = () => {
  if(window.scrollY > 300){
    backToTop.classList.remove('opacity-0');
    backToTop.classList.add('opacity-100');
  }else{
    backToTop.classList.add('opacity-0');
    backToTop.classList.remove('opacity-100');
  }
}

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});



const typed = new Typed('#typed-text', {
   strings: ["Frontend Developer 💻", "Creative Coder 💡", "Responsive Web Design 📱", "Always Learning 🚀"],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true
  });