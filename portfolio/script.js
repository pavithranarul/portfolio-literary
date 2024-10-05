function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
function smoothScrollTo(yPosition) {
  window.scrollTo({
    top: yPosition,
    behavior: 'smooth'
  });
}

// Example usage: Scroll to 500px down after 2 seconds
setTimeout(() => {
  smoothScrollTo(500);
}, 2000);