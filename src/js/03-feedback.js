import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
form.addEventListener('input', throttle(onInputChenge, 500));
form.addEventListener('submit', onChangeSubmit);

const STORAGT_KEY = 'feedback-form-state';
let userData = {};

function onInputChenge(evt) {
const target = evt.target;

const formValue = target.value;
const formName = target.name;

 userData[formName] = formValue;
 localStorage.setItem(STORAGT_KEY, JSON.stringify(userData));
 
}

function onChangeSubmit(evt) {
  evt.preventDefault();

  const {
    elements: {email, message}
  } = evt.currentTarget;

   if(email.value === "" || message.value === ""){
    return alert('привет')
   }
   localStorage.removeItem(STORAGT_KEY);
   evt.currentTarget.reset();
 
  userData = {}
}

 function fillFormFields(){
  const fillForm = JSON.parse(localStorage.getItem(STORAGT_KEY));
  if (fillForm){
    form.elements.email.value = fillForm.email || '';
    form.elements.message.value = fillForm.message || '';
  }
 };

fillFormFields()



// "// Напиши функцію, яка видалить дублікати і поверне обьекти з самим низьким price

// const phones = [
//   { name: 'Huawei', price: 800 },
//   { name: 'Apple', price: 1000 },
//   { name: 'Samsung', price: 900 },
//   { name: 'Apple', price: 1100 },
//   { name: 'Samsung', price: 700 },
//   { name: 'Apple', price: 800 },
//   { name: 'Huawei', price: 950 },
//   { name: 'Samsung', price: 1000 },
//   { name: 'Huawei', price: 650 },
// ];

// // приклад

// {name: 'Huawei', price: 650}
// {name: 'Samsung', price: 700}
// {name: 'Apple', price: 800}"

// function removeDublicate(phones){
//    return phones.sort((a, b) => a.price - b.price).filter((el, idx, arr) => {
//         const currentIndex = arr.findIndex((elem) => elem.name === el.name);
//         return currentIndex === idx
//     })
// }
// console.log(removeDublicate(phones));
