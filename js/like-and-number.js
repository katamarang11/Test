const iLikeBtn = document.querySelectorAll('.i-like-btn');
const showNumberBtn = document.querySelectorAll('.show-number-btn');
const btnTel = document.querySelectorAll('.btn-tel');
const goToLink = document.querySelectorAll('.go-to-link');

for (let i = 0; i < iLikeBtn.length; i++) {
  iLikeBtn[i].addEventListener('click', function () {
    if (iLikeBtn[i].classList.contains('i-like-btn--active')) {
      iLikeBtn[i].classList.remove('i-like-btn--active');
    } else {
      iLikeBtn[i].classList.add('i-like-btn--active');
    }
  });

  goToLink[i].addEventListener('click', function () {
    const parent = goToLink[i].parentNode;
    parent.removeChild(goToLink[i]);
    btnTel[i].classList.remove('btn-tel');
  });
}