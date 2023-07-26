import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
};

refs.form.addEventListener('input', throttle(onInputChenge, 500));

// const STORAGE_KEY = 'feedback-form-state';

function onInputChenge(e) {
  const key = e.target.name;
  const value = e.target.value;
  localStorage.setItem(key, value);
}

const name = localStorage.getItem('email');
const message = localStorage.getItem('message');

refs.form.elements.email.value = name;
refs.form.elements.message.value = message;

refs.form.addEventListener('submit', onChangeSubmit);

function onChangeSubmit(e) {
  e.preventDefault();

  const name = e.target.elements.email.value;
  const message = e.target.elements.message.value;
  console.log({ name, message });

  localStorage.removeItem('email');
  localStorage.removeItem('message');

    e.target.reset();

  
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
