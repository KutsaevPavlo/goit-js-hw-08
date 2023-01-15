import throttle from 'lodash.throttle';
const FEEDBACK_FORM_STATE = 'feedback-form-state';
const localObject = {email:' ', message:' '};

const form = document.querySelector('.feedback-form');

form.addEventListener("input", (event) => {
    event.preventDefault();
    
    localObject[event.target.name] = event.target.value

    // const localObject = {
    //   elements: { email, message }
    // } = event.currentTarget;

    // console.log(email.value, message.value);
    localStorage.setItem(FEEDBACK_FORM_STATE, JSON.stringify(localObject));
  });
