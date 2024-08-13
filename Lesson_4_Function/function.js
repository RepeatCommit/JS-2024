//
// function square(height, weight){
//
//     return height * weight;
// }
// let result = square(20,40);
// console.log(result);

// function circle(radius){
//    return  Math.PI * radius * radius
// }
// let result = circle(Math.PI,2,2);
// console.log(result)

// function cilinder(radius,height){
//     return 2 * Math.PI * radius * height
// }
// console.log(cilinder(6,10));

// let array =['name','age','status'];
// function someprint(arr){
//     for (const arrElement of arr) {
//         console.log(arrElement);
//     }
// }
// someprint(array);

// function someInDocument(text){
//     document.write(`<p>${text}</p>`)
// }
// someInDocument('Give me more');
//- створити функцію яка створює ul з трьома елементами li та виводить його через document.write. Текст li задати через аргумент всім однаковий
// function kurse(some){
//     document.write(`
//     <ul>
//     <li>${some}</li>
//     <li>${some}</li>
//     <li>${some}</li>
// </ul>`)
//
// }
// kurse(`Who is this`)

// function createLi(text,item){
//     document.write('<ul>')
//     for (let i = 0; i < item; i++) {
//       document.write(`<li>${text}</li>`);
//     }
//      document.write('</ul>');
// }
// createLi('go for it',10)

// function bar (arrayValuables){
//     document.write(`<ul>`)
//     for (const value of arrayValuables) {
//          document.write(`<li>${value}</li>`);
//     }
//     document.write(`</ul>`);
// }
// bar(['name','age',true,false,434,565])

//створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// function item(users){
//     for (const user of users) {
//         document.write(`<div>${user.id} ${user.age} ${user.name}</div>`)
//         }
// }
// item([
//     {name: 'Gus', id:1, age:23},
//     {name: 'Kus', id:2, age:24},
//     {name: 'Lus', id:3, age:25},
//     {name: 'Pus', id:4, age:26},
// ])

// function minValueFromArr(items){
//     let min = items[0];
//     for (let i = 0; i < items.length; i++) {
//        let item = items[i];
//         if (item < min){
//             min = item
//     }
//
//     }
//     return min;
// }
// console.log(minValueFromArr([34,54,12,65,87]))

// function all(massive){
//     let box = 0;
//     for (const element of massive) {
//         box = box + element;
//     }
//     return box;
// }
// console.log(all([1,2,10]));


//створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відповідних індексах

// function swap(massive,index1,index2){
//     let some = massive[index1];
//     massive[index1] = massive[index2];
//     massive[index2] = some;
//     return massive;
// }
// console.log(swap([11,22,33,44],0,1));

function exchange(sumUAH,currencyValues,exchangeCurrency) {
    let currencyChoose;
    for (const Element of currencyValues) {
        if (Element.currency === exchangeCurrency) {
            currencyChoose = Element;
        }
        let result = sumUAH / currencyChoose.value
        return result;
    }
}
console.log(exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD'));
