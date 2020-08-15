'use strict';
const menuToggle = document.querySelector('.toggle');
menuToggle.addEventListener('click', toggleMenu);

function toggleMenu() {
  const banner = document.querySelector('.banner');
  menuToggle.classList.toggle('active');
  banner.classList.toggle('active');
}