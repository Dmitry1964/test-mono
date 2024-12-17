import { log } from 'console';
import IMask from 'imask';

const PHONE_ERROR = 'Введите корректный телефонный номер';
const NAME_ERROR = 'Введите имя'

// const template = document.getElementById('popup') as HTMLTemplateElement;
const phoneField = document.getElementById('phone');
const nameField = document.getElementById('name');
const checkField = document.getElementById('agreement');
const submitButton = document.querySelector('.info__form-button');
const phoneContainer = document.querySelector('.info__input-container--phone') as HTMLElement;
const nameContainer = document.querySelector('.info__input-container--name') as HTMLElement;
const form = document.getElementById('info-form');

const showErrorPopup = (message: string, elem: HTMLElement) => {
  const template = document.getElementById('popup') as HTMLTemplateElement;

  const errorPopup = template.content.cloneNode(true) as HTMLElement;
  errorPopup.querySelector('.popup__message').textContent = message;
  elem.append(errorPopup);
}

const removeErrorPopup = (elem: HTMLElement) => {
  const popup = elem.querySelector('.popup__wrapper');
  console.log(popup);

  if (popup) {
    popup.remove()
  }
}

const handleCheckBoxInput = (evt: Event) => {
  const target = evt.target as HTMLInputElement;
  if (target.checked) {
    submitButton.classList.remove('info__form-button--disabled');
  }

  if (!target.checked) {
    submitButton.classList.add('info__form-button--disabled');
  }
}


const aaa = (evt: SubmitEvent) => {
  evt.preventDefault()
  console.log('sdsdsdsdsd');

}

export const initForm = () => {

  const phoneMask = IMask(phoneField, {
    mask: "+{7} (000) 000-00-00",
  })
  return phoneMask;

}

export const initValidate = () => {
  const regPhone = /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/;
  const regLetters = /^[A-Za-zА-Яа-яЁё]+$/;

  const handleInputField = (evt: FocusEvent) => {
    const target = evt.target as HTMLInputElement;
    const inputName = target.getAttribute('name');

    if (inputName === 'phone') {
      if (!regPhone.test(target.value)) {
        phoneField.classList.add('isError');
        showErrorPopup(PHONE_ERROR, phoneContainer)
      } else {
        removeErrorPopup(phoneContainer)
      }
    }

    if (inputName === 'name') {
      if (!regLetters.test(target.value)) {
        nameField.classList.add('isError');
        showErrorPopup(NAME_ERROR, nameContainer)
      }
    } else {
      removeErrorPopup(nameContainer);
    }

  }

const onChangeInputField = () => {
  phoneField.classList.remove('isError')
  nameField.classList.remove('isError');

  console.log(nameField);

}

  phoneField.addEventListener('blur', handleInputField);
  phoneField.addEventListener('input', onChangeInputField );
  nameField.addEventListener('blur', handleInputField);
  nameField.addEventListener('input', onChangeInputField )
  checkField.addEventListener('change', handleCheckBoxInput)
  form.addEventListener('submit', aaa);
}
