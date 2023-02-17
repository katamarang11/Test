const dropBtnOpen = document.querySelector('.drop-btn-open');
const dropBtnOpen2 = document.querySelector('.drop-btn-open__2');
const dropBtnOpen3 = document.querySelector('.drop-btn-open__3');

const dropdownFormRoominess = document.querySelector('.dropdown-form-roominess');
const dropBtnClose = document.querySelector('.drop-btn-close');
const dropdownFormContent = document.querySelector('.dropdown-form-content');
const amountRange = document.querySelector('.amount-range');

dropBtnOpen2.addEventListener('click', function () {
  let a = dropdownFormRoominess.classList.contains('dropdown-content__none1');
  if (a) {
    dropdownFormRoominess.classList.remove('dropdown-content__none1');
  } else {
    dropdownFormRoominess.classList.add('dropdown-content__none1');
  }
});

dropBtnOpen.addEventListener('click', function () {
  dropdownFormContent.classList.remove('dropdown-content__none');
});

dropBtnClose.addEventListener('click', function () {
  dropdownFormContent.classList.add('dropdown-content__none');
});

dropBtnOpen3.addEventListener('click', function () {
  let a = amountRange.classList.contains('amount-range--none');
  if (a) {
    amountRange.classList.remove('amount-range--none');
  } else {
    amountRange.classList.add('amount-range--none');
  }
});

document.addEventListener('keydown', function () {
  dropdownFormRoominess.classList.add('dropdown-content__none1');
  amountRange.classList.add('amount-range--none');
  dropdownFormContent.classList.add('dropdown-content__none');
});

