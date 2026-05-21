let currentSlide = 0;

const slides = document.querySelectorAll(".swiper-slide");

const nextBtn = document.querySelector(".swiper-button-next");

const prevBtn = document.querySelector(".swiper-button-prev");


function showSlide(index) {

  slides.forEach((slide) => {
    slide.style.display = "none";
  });

  slides[index].style.display = "block";
}


function nextSlide() {

  currentSlide++;

  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }

  showSlide(currentSlide);
}


function prevSlide() {

  currentSlide--;

  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }

  showSlide(currentSlide);
}


nextBtn.addEventListener("click", nextSlide);

prevBtn.addEventListener("click", prevSlide);



setInterval(nextSlide, 2000);


showSlide(currentSlide);
