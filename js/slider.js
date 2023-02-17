const picturesViewedFilled = document.querySelector('.pictures-viewed--filled');
const sliderItem = document.querySelectorAll('.slider__item');

$(document).ready(function () {
  $('.slider').slick({
    draggable: false,
    variableWidth: true,
  });

  let counter = 100 / sliderItem.length;
  picturesViewedFilled.style.width = `${counter}%`;
  console.log(counter);
  // Вперёд
  $('.slick-next').on('click', function () {
    counter += 100 / sliderItem.length;
    if (counter > 101) {
      counter = 100 / sliderItem.length;
    }
    picturesViewedFilled.style.width = `${counter}%`;
  })

  $('.slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    nextSlideNumber = nextSlide;
    // console.log(nextSlideNumber);
    $('.slick-prev ').on('click', function () {
      console.log(11);
    })
  });

  // Назад
  // $('.slick-prev ').on('click', function () {
  //   let a = $(this).data("slick-index");
  //   console.log(a);
  // })
});
