document.addEventListener('DOMContentLoaded', function() {
  const nameElement = document.getElementById('name');
  const words = ["Mustapha Abdulsalam", "Frontend Dev", "Web3 Enthusiast", "AI Specialist", "Crypto Trader", "Graphics Designer", "Ethical Hacker"];
  let wordIndex = 0;
  let charIndex = 0;
  let deleting = false;
  
  function type() {
    const currentWord = words[wordIndex];
    if (!deleting) {
      nameElement.textContent = currentWord.slice(0, charIndex + 1);
      charIndex++;
      if (charIndex === currentWord.length) {
        deleting = true;
        setTimeout(type, 1500);
        return;
      }
    } else {
      nameElement.textContent = currentWord.slice(0, charIndex - 1);
      charIndex--;
      if (charIndex === 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
      }
    }
    setTimeout(type, deleting ? 100 : 150);
  }
  
  setTimeout(type, 1000);
  
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-menu a');
  
  hamburger.addEventListener('click', function() {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
  });
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      if (this.getAttribute('href').startsWith('#')) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        const offsetTop = targetSection.offsetTop - 80;
        
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
      
      navMenu.classList.remove('active');
      hamburger.classList.remove('active');
    });
  });
  
  window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
      navbar.style.background = 'rgba(31, 41, 55, 0.95)';
    } else {
      navbar.style.background = 'rgba(255, 255, 255, 0.1)';
    }
  });
  
  const skillCards = document.querySelectorAll('.skill-card');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });
  
  skillCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
  });
  
  window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
      navMenu.classList.remove('active');
      hamburger.classList.remove('active');
    }
  });
});