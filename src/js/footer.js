import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import axios from 'axios';

const form = document.querySelector(".footer-form");
const formEmail = document.querySelector(".form-email");
const successMessage = document.querySelector('.email-success-message');
const errorMessage = document.querySelector('.email-error-message');
const formComment = document.querySelector(".form-comment");
const backdrop = document.querySelector(".footer-backdrop");
const modalWindow = document.querySelector(".footer-modal");
const modalCloseBtn = document.querySelector(".modal-button");

// Validación del email
formEmail.addEventListener('input', function () {
  const email = formEmail.value.trim();
  if (emailPattern.test(email)) {
    formEmail.classList.add('success');
    formEmail.classList.remove('error');
    successMessage.style.display = 'block';
    errorMessage.style.display = 'none';
  } else {
    formEmail.classList.add('error');
    formEmail.classList.remove('success');
    successMessage.style.display = 'none';
    errorMessage.style.display = 'block';
  }
});

const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// Limita el texto del comentario a 100 caracteres
formComment.addEventListener('blur', function () {
  const maxLength = 100;
  if (formComment.value.length > maxLength) {
    formComment.value = formComment.value.substring(0, maxLength) + '...';
  }
});

// Guarda datos en LocalStorage
formComment.addEventListener('input', function () {
  localStorage.setItem('comments', formComment.value);
});
formEmail.addEventListener('input', function () {
  localStorage.setItem('email', formEmail.value);
});

// Recupera datos guardados al recargar la página
document.addEventListener('DOMContentLoaded', function () {
  const savedComments = localStorage.getItem('comments');
  const savedEmail = localStorage.getItem('email');
  if (savedComments) {
    formComment.value = savedComments;
  }
  if (savedEmail) {
    formEmail.value = savedEmail;
  }
});

// Abre modal
function openModal() {
    document.body.classList.add('no-scroll');
    backdrop.classList.add("is-open");
    modalWindow.classList.add("is-visible");
  modalCloseBtn.addEventListener('click', closeModal);
    backdrop.addEventListener('click', function (event) {
      if (event.target === backdrop) {
        closeModal();
      }
    });
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        closeModal();
      }
    });
  form.reset();
}

 // Cierra modal
function closeModal() {
    document.body.classList.remove('no-scroll');
    backdrop.classList.remove("is-open");
    modalWindow.classList.remove("is-visible");
    modalCloseBtn.removeEventListener('click', closeModal);
    document.removeEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        closeModal();
      }
    });
  }

  // Envío del formulario
form.addEventListener('submit', async function (event) {
  event.preventDefault();
  const emailValue = formEmail.value.trim();
  const textComment = formComment.value;
  try {
    const response = await axios.post(
      'https://portfolio-js.b.goit.study/api/requests/',
      {
        email: emailValue,
        comment: textComment,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    // Limpia formulario y abre modal
    formEmail.classList.remove('success');
    successMessage.style.display = 'none';
      openModal();
    localStorage.removeItem('email');
    localStorage.removeItem('comments');
  } catch (error) {
    iziToast.error({
      position: 'topRight',
      theme: 'dark',
      messageColor: 'white',
      backgroundColor: '#ef4040',
      message: 'Error: ' + (error.response?.data?.message || 'Something went wrong'),
    });
  }
});