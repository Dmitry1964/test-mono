import { log } from 'console';
import IMask from 'imask';

const PHONE_ERROR = 'Введите корректный телефонный номер'

// const template = document.getElementById('popup') as HTMLTemplateElement;
const phoneField = document.getElementById('phone');
const phoneContainer = document.querySelector('.info__input-container--phone');
const nameContainer = document.querySelector('.info__input-container--name');
const form = document.getElementById('info-form');

const showErrorPopup = (message: string) => {
  const template = document.getElementById('popup') as HTMLTemplateElement;

  const errorPopup = template.content.cloneNode(true) as HTMLElement;
  errorPopup.querySelector('.popup__message').textContent = message;
  phoneContainer.append(errorPopup);
}

const removeErrorPopup = () => {
  const elem = phoneContainer.querySelector('.popup__wrapper');
  if (elem) {
    elem.remove()
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

  const handlePhoneField = (evt: FocusEvent) => {
    const target = evt.target as HTMLInputElement;

      if (!regPhone.test(target.value)) {
        phoneField.classList.add('isError');
        showErrorPopup(PHONE_ERROR)
      } else {
        removeErrorPopup()
      }
  }

const onChangePhoneField = () => {
  phoneField.classList.remove('isError')
}

  phoneField.addEventListener('blur', handlePhoneField);
  phoneField.addEventListener('input', onChangePhoneField )
  form.addEventListener('submit', aaa);
}
