const iLikeBtn = document.querySelectorAll('.i-like-btn');
console.log(iLikeBtn);

for (let i = 0; i < iLikeBtn.length; i++) {
  iLikeBtn[i].addEventListener('click', function () {
    if (iLikeBtn[i].classList.contains('i-like-btn--active')) {
      iLikeBtn[i].classList.remove('i-like-btn--active');
    } else {
      iLikeBtn[i].classList.add('i-like-btn--active');
    }
  });
}