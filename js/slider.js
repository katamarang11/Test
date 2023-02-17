const picturesViewedFilled = document.querySelector('.pictures-viewed--filled');
const sliderItem = document.querySelectorAll('.slider__item');

$(document).ready(function () {
  $('.slider').slick({
    draggable: false,
    variableWidth: true,
  });

  let counter = 100 / sliderItem.length;
  picturesViewedFilled.style.width = `${counter}%`;

  // Вперёд
  $('.slick-next').on('click', function () {
    counter += 100 / sliderItem.length;
    if (counter > 101) {
      counter = 100 / sliderItem.length;
    }
    picturesViewedFilled.style.width = `${counter}%`;
  })

  // Назад
  $('.slick-prev ').on('click', function () {
    const slideNumber = $('.slider').slick('slickCurrentSlide');
    if (slideNumber === sliderItem.length - 1) {
      counter = 100;
    } else {
      counter -= 100 / sliderItem.length;
    }
    picturesViewedFilled.style.width = `${counter}%`;
  })
});
