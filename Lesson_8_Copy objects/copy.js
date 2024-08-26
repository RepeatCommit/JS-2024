//Створити функцію, яка робить глибоку копію об'єкту.
// Додати перевірки на undefined, null, NaN.


function clone(obj){
    if(obj) {
        let functions = [];
        for (const objKey in obj) {  //перевіряємо чи чи є в нашому обʼєкті функція
           if (typeof obj[objKey]==='function'){ //у випадку якщо objkey еквівалентно function,робимо копію и додаємо в наш массив functions
          const functionClone =  obj[objKey].bind({});//стоврюємо функцію bind  з пустим обʼєктом this
          functions.push(functionClone) //після того як зробили clone пушим що б він там зберігся
           }
        }
        console.log(functions); //після всієї ітерації виввели functions який містить нашу функцію
        const s = JSON.stringify(obj);
        const parse = JSON.parse(s);
        console.log(parse); //перевіряємо чи є там наша копія
        return parse
    }

}

clone({name:'Boss', id: 222, greeting(){}}); //додали функцію

//за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration
//     Зробити все ВИКЛЮЧНО за допомоги інлайн конструкції

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

console.log(coursesAndDurationArray.map((course,index)=>({...course,id: index +2})));
