const activePage = location.pathname;
console.log(activePage);
const navLinks = document.querySelectorAll('nav a');
let hamburger = document.querySelector('.hamburger')
let navigation = document.querySelector('.navigation')
let cancel = document.querySelector('.cancel')
navLinks.forEach(link => {
  if (link.href.includes(`${activePage}`)) {
    link.classList.add('active');
  }
  //WE ARE SIMPLY SAYING 'IF THE href IN THE FUNCTION(link) INCLUDES THE PATHNAME (activePage), THEN GIVE IT THE ACTIVE CLASS!
})

hamburger.addEventListener('click', () => {
  navigation.style.display = 'block';
})
cancel.addEventListener('click', () => {
  navigation.style.display = 'none';
})


