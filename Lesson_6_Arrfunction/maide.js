//- Знайти та вивести довижину настипних стрінгових значень
//     'hello world', 'lorem ipsum', 'javascript is cool'

// let str = 'hello world';
// console.log(str.length);
// let sum = 'lorem ipsum';
// console.log(sum.length);
// let java = 'javascript is cool';
// console.log(java.length);

//- Перевести до великого регістру наступні стрінгові значення
//       'hello world', 'lorem ipsum', 'javascript is cool'

// let str = 'hello world';
// console.log(str.toUpperCase());
// let sum = 'lorem ipsum';
// console.log(sum.toUpperCase());
// let java = 'javascript is cool';
// console.log(java.toUpperCase());

//- Перевести до нижнього регістру настипні стрінгові значення
//       'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// let strings = ['HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'];
// for (const s of strings) {
//     console.log(s.toUpperCase());
// }


// let str = 'HELLO WORLD';
// console.log(str.toLowerCase());
// let sum = 'LOREM IPSUM';
// console.log(sum.toLowerCase());
// let java = 'JAVASCRIPT IS COOL';
// console.log(java.toLowerCase());

//- Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

// let str = ' dirty string  ';
// let b = str.trim();
// console.log(str.length);
// console.log(b);

//- Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
//     let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

// function stringToarray(str){
//    let connect =  str.split(' ');
//   return connect;
// }
//  console.log(stringToarray('Ревуть воли як ясла повні'));

//- є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
//Важливо пам'ятати, що метод map() не змінює початковий масив, а повертає новий масив.
//Функція, яку ви передаєте методу map(), приймає три аргументи: поточний елемент масиву, індекс поточного елемента та сам масив, які обробляються.

// let numbers = [10,8,-7,55,987,-1011,0,1050,0]
// let squaredNumbers = numbers.map(num => num + '');
// console.log(squaredNumbers);

// let someArr = [10,8,-7,55,987,-1011,0,1050,0];
// let string = someArr.map(numbers => {
//         return numbers + '';
//     }
// );
// console.log(string);

//- створити функцію sortNums(array,direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.

// function sortNums(sumArray,direction){
//
//     if (direction === 'ascending') {
//         return sumArray.sort((a, b) => a - b);
//
//     }
//       if (direction === 'descending'){
//             return sumArray.sort((a,b)=> b - a);
//     }
// }
// console.log(sortNums([11,21,3],'ascending')) // [3,11,21]
// console.log(sortNums([11,21,3],'descending')) // [21,11,3]



// -- відсортувати його за спаданням за monthDuration
//  -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
//  -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
//     let resultMonthFilter = coursesAndDurationArray.filter((month) => month.monthDuration > 5);
//     console.log(resultMonthFilter);

    //-- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

//     let mapNewResult = coursesAndDurationArray.map((value,index)=>{
//     let newField ={
//         id: index +5,
//         title:value.title,
//         monthDuration: value.monthDuration
//     }
//     return newField;
// });
// console.log(mapNewResult);
// console.log(coursesAndDurationArray);

//-- відсортувати його за спаданням за monthDuration
// coursesAndDurationArray.sort((duration1,duration2) =>{
//   return duration2.monthDuration - duration1.monthDuration
//
// });
// console.log(coursesAndDurationArray);

//описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
//  - всі шістки
//  - всі червоні карти
//  - всі буби
//  - всі трефи від 9 та більше

// let suits = ['spade', 'diamond', 'heart', 'club'];
// let values = ['6', '7', '8', '9', '10', 'jack', 'qeeen', 'king', 'ace'];
// const cards = [];
// for (const suit of suits) {
//     for (const value of values) {
//         const card = {cardSuit: suit, value:value};
//         if (suit === 'heart' || suit === 'diamond'){
//             card.color = 'red';
//         }else{
//             card.color = 'black';
//         }
//         cards.push(card);
//     }
// }
// console.log(cards);

// console.log(cards.find(card =>card.value === 'ace' && card.cardSuit === 'spade' ));
// console.log(cards.filter(card => card.value === '6'));
// console.log(cards.filter(card => card.color === 'red'));
// console.log(cards.filter(card => card.cardSuit === 'diamond'));


// const reduce = cards.reduce((accum, card) =>{
//     switch (card.cardSuit){
//         case 'spade':
//             accum.spades.push(card);
//             break;
//         case 'diamond':
//             accum.diamonds.push(card);
//             break;
//         case 'heart':
//             accum.hearts.push(card);
//             break;
//         case 'club':
//             accum.clubs.push(card);
//             break;
//     }
//     return accum;
// },{
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// })
// console.log(reduce);





















