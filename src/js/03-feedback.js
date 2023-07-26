import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

form.addEventListener('input', throttle(onInputChenge, 500));

// let STORAGT_KEY = 'feedback-form-state';

function onInputChenge(evt) {
  const key = evt.target.name;
  const value = evt.target.value;
  localStorage.setItem(key, value);

  // const data = {
  //   STORAGT_KEY: evt.target.name,
  //   value: evt.target.value
  // };
  // localStorage.setItem(JSON.stringify(data))
}

// const getLocalStorage = localStorage.getItem(JSON.parse(data))

const name = localStorage.getItem('email');
const message = localStorage.getItem('message');

form.elements.email.value = name;
form.elements.message.value = message;

form.addEventListener('submit', onChangeSubmit);

function onChangeSubmit(evt) {
  evt.preventDefault();

  const name = evt.target.elements.email.value;
  const message = evt.target.elements.message.value;
  console.log({ name, message });

  localStorage.removeItem('email');
  localStorage.removeItem('message');

    evt.target.reset();

  
}






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
