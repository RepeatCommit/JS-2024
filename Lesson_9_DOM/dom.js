//- створити блок,
// - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

// let div = document.createElement('div');
// div.classList.add('wrap'); // таким чином додаються класси
// div.classList.add('collapse');
// div.classList.add('alpha');
// div.classList.add('beta');
// document.body.append(div); //додали в body усі елементи
//  const clone =div.cloneNode(true) //щоб клонувалось усе що є в середині елементів треба обовʼязково в дужках писати true
// document.body.append(div,clone); // основний блок та клон




//['Main','Products','About us','Contacts']
//Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)

// let arr = ['Main','Products','About us','Contacts'];
// const info = document.createElement('ul');
// info.classList.add('info');
// for (const infoEl of arr) {
//  const LI = document.createElement('li');
//  LI.innerText = infoEl;
//  info.appendChild(LI);
//
// }
// document.body.appendChild(info);
// console.log(document)


//Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// for (const user of coursesAndDurationArray) {
//
//  let paragraph =   document.createElement('p')
// paragraph.innerText = `${user.title} ${user.monthDuration}`
//     document.body.appendChild(paragraph)
// }

//другий спосіб через +

// let div = document.createElement('div');
// div.innerText = courses.title + ' ' + courses.monthDuration;
// document.body.appendChild(div);





