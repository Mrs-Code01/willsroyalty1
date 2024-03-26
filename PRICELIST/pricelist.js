const native = document.querySelector('.native');
const corporate = document.querySelector('.corporate');
const casual = document.querySelector('.casual');
const beddings = document.querySelector('.beddings');

const sectionOne = document.querySelector('.section-1');
const sectionTwo = document.querySelector('.section-2');
const sectionThree = document.querySelector('.section-3');
const sectionFour = document.querySelector('.section-4');

const catA = document.querySelector('.cat-a')
const catB = document.querySelector('.cat-b')
const catC = document.querySelector('.cat-c')
const catD = document.querySelector('.cat-d')

native.addEventListener('click', () => {
  catA.classList.add('green');
  catB.classList.remove('green');
  catC.classList.remove('green');
  catD.classList.remove('green');
  sectionOne.classList.add('reveal');
  sectionTwo.classList.remove('reveal');
  sectionThree.classList.remove('reveal');
  sectionFour.classList.remove('reveal');
})

corporate.addEventListener('click', () => {
  catB.classList.add('green');
  catA.classList.remove('green');
  catC.classList.remove('green');
  catD.classList.remove('green');
  sectionTwo.classList.add('reveal');
  sectionOne.classList.remove('reveal');
  sectionThree.classList.remove('reveal');
  sectionFour.classList.remove('reveal');
})

casual.addEventListener('click', () => {
  catC.classList.add('green');
  catB.classList.remove('green');
  catA.classList.remove('green');
  catD.classList.remove('green');
  sectionThree.classList.add('reveal');
  sectionTwo.classList.remove('reveal');
  sectionOne.classList.remove('reveal');
  sectionFour.classList.remove('reveal');
})

beddings.addEventListener('click', () => {
  catD.classList.add('green');
  catC.classList.remove('green');
  catB.classList.remove('green');
  catA.classList.remove('green');
  sectionFour.classList.add('reveal');
  sectionThree.classList.remove('reveal');
  sectionTwo.classList.remove('reveal');
  sectionOne.classList.remove('reveal');
})