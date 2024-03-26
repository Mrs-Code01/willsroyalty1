const testimonials = [
  {
    image: "girl4.png",
    name: "Tina John",
    testimonial: "I love every bit of the service rendered, I will definitely recommend to others!",
  },
  {
    image: "girl8.png",
    name: "Amaiah Dave",
    testimonial: "Fast delivery...Exactly what I want from a laundry service",
  },
  {
    image: "girl1.png",
    name: "Amake Daniel",
    testimonial: "Very polite and service is also neat with proper packaging...Will definitely recommend to someone",
  }
];

let i = 0;
let j = testimonials.length;

let testimonialContainer = document.getElementById("testimonial-container");
console.log(testimonialContainer);
let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("prev");

let displayTestimonial = () => {
  testimonialContainer.innerHTML = `
  <img src=${testimonials[i].image}>
  <h3>${testimonials[i].name}</h3>
  <p>${testimonials[i].testimonial}</p>
  `;
}
displayTestimonial();

nextBtn.addEventListener('click', () => {
  i = (j + i + 1) % j;
  displayTestimonial();
})
prevBtn.addEventListener('click', () => {
  i = (j + i - 1) % j;
  // i--;
  // if (i > (j - 1)) {
  //   i = 0;
  // }
  displayTestimonial();
})


// const currentLocation = location.href;
// const menuItem = document.querySelectorAll('a');
// const menuLength = menuItem.length;
// for (i = 0; i < menuLength; i++) {
//   if (menuItem[i].href === currentLocation) {
//     menuItem[i].className = "active"
//   }
// }