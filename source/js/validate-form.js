
const form = document.querySelector('.contacts__form-main-form');
const nameInput = document.querySelector('[name="userName"]');
const phoneInput = document.querySelector('[name="userNumberPhone"]');
let formSubmitted = false;

const validateName = () => {
  const value = nameInput.value.trim();
  if (!formSubmitted && value === '') {
    return '';
  } // Не показываем ошибку до отправки
  return /^[A-Za-zА-Яа-яЁё\s]+$/.test(value) ? '' : 'Имя может содержать только буквы и пробелы.';
};

const validatePhone = () => {
  const value = phoneInput.value.trim();
  if (!formSubmitted && value === '') {
    return '';
  }
  return /^[0-9]+$/.test(value) ? '' : 'Телефон может содержать только цифры.';
};

const showError = (input, message) => {
  let errorMessage = input.nextElementSibling;

  if (!errorMessage || !errorMessage.classList.contains('contacts__form-error-message')) {
    errorMessage = document.createElement('span');
    errorMessage.classList.add('contacts__form-error-message');
    input.after(errorMessage);
  }

  if (message) {
    errorMessage.textContent = message;
    input.classList.add('error');
  } else {
    errorMessage.textContent = '';
    input.classList.remove('error');
  }
};

form.addEventListener('submit', (event) => {
  event.preventDefault();
  formSubmitted = true; // Теперь можно показывать ошибки

  const nameError = validateName();
  const phoneError = validatePhone();

  showError(nameInput, nameError);
  showError(phoneInput, phoneError);

  if (!nameError && !phoneError) {
    form.requestSubmit();
  }
});

// Скрытие ошибок при вводе
[nameInput, phoneInput].forEach((input) => {
  input.addEventListener('input', () => {
    if (formSubmitted) {
      showError(input, input === nameInput ? validateName() : validatePhone());
    }
  });
});
