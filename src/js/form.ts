import { log } from 'console';
import IMask from 'imask';

const phoneField = document.getElementById('phone');

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
        phoneField.classList.add('isError')
      }
    console.log(regPhone.test(target.value));
  }

const onChangePhoneField = () => {
  phoneField.classList.remove('isError')
}

  phoneField.addEventListener('blur', handlePhoneField);
  phoneField.addEventListener('input', onChangePhoneField )
}
