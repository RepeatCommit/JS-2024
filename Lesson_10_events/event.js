

//- Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".

// document.getElementById('text'); // отримали наш дів по id
// let but = document.getElementsByTagName("button")[0]; //так як це запит на html колекцію ми обираємо під яким індексом наш батон тобто 0
//
// but.onclick = function () { //визначаємо подію onclick для button
//   // document.getElementById('text').remove() // в середині функцію звертаємось ждо уже існуючого дів з id=text
// }
// document.getElementById('text').style.display = 'none'; //ще варіант                                            //через remove це простіший спосіб вирішення завдання пвсля натискання на кнопку дів зникає


//- створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

 //Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом
//сворено форму в body див.

// const ourForm  = document.forms.ourForm; //forms api дозволяє знаходити усі форми в документі і виводити в документ
//
// ourForm.addEventListener('submit', () => {
//     const nameValue = ourForm.name.value; //доступ до інпутів за характеристиками name вказані в body
//     const SurnameValue = ourForm.surname.value;
//     const ageValue = ourForm.age.value; // value цу значення вказані в body " " характеристика обʼєкта
//     let obj = {nameValue, SurnameValue, ageValue};
//     console.log(obj);
//
// })

//є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1

//  let myNumber = +localStorage.getItem('number');
// localStorage.setItem('number', myNumber);

//Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessionsList зберігається інформація про дату та час відвідування сторінки. Є  сторінка sessionsListPage.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html.
// Інфу НЕ виводити в консоль, а малювати в DOM

// const page = JSON.parse(localStorage.getItem('sessionList')) // ток робиться коли в local шіснує массив який потрубен sessionList

//будуємо массив

let arrSession = [];
arrSession.push(new Date());// пушнули в пустий массив arrSession new Date fun
localStorage.setItem('sessionList', JSON.stringify(arrSession)) // записуємо в localstorage


