import throttle from 'lodash.throttle';
const FEEDBACK_FORM_STATE = 'feedback-form-state';
const localObject = {email:' ', message:' '};
const emailInput = document.querySelector("input");
const messageInput = document.querySelector("textarea");

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


  const dataLocalObject = localStorage.getItem(FEEDBACK_FORM_STATE);
  function insrtFromLocalStorage(object)
  {
    if(object && emailInput.name === "email"){
      emailInput.value = JSON.parse(object).email;
    }
    if(object && messageInput.name === "message"){
      messageInput.value = JSON.parse(object).message;
    }
  }
  insrtFromLocalStorage(dataLocalObject);

  form.addEventListener("submit", submitForm);

  function submitForm(event){
    event.preventDefault();
    event.target.reset();
    localStorage.removeItem(FEEDBACK_FORM_STATE);
  }


