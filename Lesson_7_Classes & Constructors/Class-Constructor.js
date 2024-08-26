


// Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone

// function User(id, name, surname , email, phone){ // створюємо фун User з великої літери бо так правильно для побудови  конструктора
//     this.id = id;  //this це обьєкт User новий майбутній
//     this.name = name;
//     this.surname = surname;                //  <---------- Це все і є конструкто який треба використовувати для створення чогось.Модель того що ми хочемо побудувати
//     this.email = email;
//     this.phone = phone;
// }


// function User(name,age,status){
//     this.name = name;
//     this.age = age;                 //створили контруктор для юзера
//     this.status = status;
//
// }
//
// const user = new User('dqd',43,true); // вивели юезра
// console.log(user);


//
// let user= new User(22,'Semen', 'Alen','fdfdf@gmail.com','+938232424');
// console.log(user); //маємо готовий контруктор одного обьєкта юзер

// створити пустий масив, наповнити його 10 об'єктами new User(....) функція вище має працювати при цьому

// let users = [
//     new User(22,'Semen', 'Alen','fdfdf@gmail.com','+938232424'),
//     new User(34,'Kolen','Malen','trtwrwrw@hmail.com','=454654632'),
//     new User(323,'Olya','Koshka','Koska@som.com','+2242424'),
//     new User(435,'Lyon','Tigra','tigra@vbm.com','+3432342'),
//     new User(452,'Katya','Mala','mala@nnn.com','+3424242'),
//     new User(998,'Tom','Cruz','Cruz@dwd.com', '+232332'),
//     new User(3232,'Halya','Kot','kot@rrr.com','+3423232'),
//     new User(877,'Sonya','Akula','sonta@vvv.com','+34242424'),
//     new User(676,'Loma','Chevo','loma@hhh.com','+58398530'),
//     new User(989,'Nata','Hulya','nata@wewew.com','+899776789')
//
// ]
// console.log(users);

//- Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

// let users = [
//     new User(22,'Semen', 'Alen','fdfdf@gmail.com','+938232424'),
//     new User(34,'Kolen','Malen','trtwrwrw@hmail.com','=454654632'),
//     new User(323,'Olya','Koshka','Koska@som.com','+2242424'),
//     new User(435,'Lyon','Tigra','tigra@vbm.com','+3432342'),
//     new User(452,'Katya','Mala','mala@nnn.com','+3424242'),            // <----що б працювало підключи конструктор User
//     new User(998,'Tom','Cruz','Cruz@dwd.com', '+232332'),
//     new User(3232,'Halya','Kot','kot@rrr.com','+3423232'),
//     new User(877,'Sonya','Akula','sonta@vvv.com','+34242424'),
//     new User(676,'Loma','Chevo','loma@hhh.com','+58398530'),
//     new User(989,'Nata','Hulya','nata@wewew.com','+899776789')
//
// ];
 // let filterFunction = (user)=> user.id % 2 === 0
 // console.log(users.filter(filterFunction));


// Prototype дає змогу щось додати до массиву який вам не належить

// function User(name,age,status){
//     this.name = name;
//     this.age = age;                 //створили контруктор для юзера
//     this.status = status;
//
// }
// User.prototype.surname = 'Lonel';  // додане значення додаєтсья в prototype консолі
//
// let user1 = new User('dnadnad',43,true);
// console.log(user1);

//- створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
//створити пустий масив, наповнити його 10 об'єктами Client

// function Client(id, name, surname , email, phone, order){ // створюємо функцію контруктор для Clientiv
//           this.id =id;
//           this.name = name;
//           this.surname = surname;
//           this.email = email;
//           this.phone = phone;
//           this.order = order;
// }
//
// let clients = [
//     new Client(2,'wewe','fgfgd','rer@gmail.com','+3889808000',['kettle','bottle','tv','hokcet']), // для order ми створили массив
//     new Client(2,'wewe','fgfgd','rer@gmail.com','+3889808000',['fen','cup','milk','soccer','car']),
//     new Client(2,'wewe','fgfgd','rer@gmail.com','+3889808000',['tea','coffee']),
//     new Client(2,'wewe','fgfgd','rer@gmail.com','+3889808000',['picture','light','tea','shnaps']),
//     new Client(2,'wewe','fgfgd','rer@gmail.com','+3889808000',['car']),
//     new Client(2,'wewe','fgfgd','rer@gmail.com','+3889808000',['lighter','water','meat','clothes','socks','jeans']),
//     new Client(2,'wewe','fgfgd','rer@gmail.com','+3889808000',['t-shirt','wallet','pocket']),
// ]
// console.log(clients);

//- Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

// const sort =clients.sort((client1,client2)=> client1.order.length - client2.order.length) // коли сортуємо ми віднімаємо в пярмому сенсі -
//  console.log(sort)    //викликаэмо функцію sort та передаємо коллбек функцію що б щось сортувати треба це порівнювати ми порівнюємо Client1 Client2 і так функція переврить кожного

//- Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//-- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//-- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//-- changeYear (newValue) - змінює рік випуску на значення newValue
//-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// function Car(model,produce,year,maxSpeed,engineVolume){
//     this.model = model;
//     this.produce = produce;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.engineVolume = engineVolume;
//     this.drive = function (){
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
//     }
//     this.info = function (){
//         for (const valueOfFields in this) {
//             console.log(valueOfFields, this[valueOfFields])
//         }
//     }
//    this.increaseMaxSpeed = function (newSpeed){
//         this.maxSpeed = this.maxSpeed + newSpeed;
//     }
//    this.changeYear = function (newValue){
//         if(newValue > 1815) this.year = newValue
//
//    }
//    this.addDriver = function (driverObject){
//         if(driverObject) this.driver = driverObject
//    };
//
// }
//
//  const car= new Car('Honda','Japan',2017,350,3.5);
// console.log(car);
// // знизу ми виводимо функції
// car.drive();
// car.info();
// car.increaseMaxSpeed(100); // додали нову швидкість 100 отримаємо 450 в суммі
// car.changeYear(2002); // змінили рік випуску
// car.addDriver()
// console.log(car);
//
//
// function User(name,id,surname,age){
//     this.name = name;
//     this.id = id;
//     this.surname = surname;
//     this.age = age;
// }
// let user = new User('Kolya',5,'honda',45);
// console.log(user);
// console.log(user instanceof User); // за допомогою instanceof можемо перевірити чи належить наш новостворений user до нашого контруктора User

//(Те саме, тільки через клас) інша конструкція

// class Car{ // можна натиснути command N та сгенерувати одразу конструктор
//     constructor(model,produce,year,maxSpeed,engineVolume) {
//         this.model = model;
//         this.produce = produce;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.engineVolume = engineVolume;
//
//         }
//         drive () {
//             console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
//         }
//         info() {
//             for (const valueOfFields in this) {
//                 console.log(valueOfFields, this[valueOfFields]);
//             }
//         };
//     increaseMaxSpeed(newSpeed) {
//         if(newSpeed > 0) this.maxSpeed = this.maxSpeed + newSpeed;
//     }
//    changeYear = function (newValue){
//         if(newValue > 1815) this.year = newValue;
//
//    }
//    addDriver = function (driverObject){
//         if(driverObject) this.driver = driverObject
//    };
//     }
//
//  const car= new Car('Honda','Japan',2017,350,3.5);
// console.log(car);
// // знизу ми виводимо функції
// car.drive();
// car.info();
// car.increaseMaxSpeed(100); // додали нову швидкість 100 отримаємо 450 в суммі
// car.changeYear(2002); // змінили рік випуску
// car.addDriver()
// console.log(car);




//-створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
//Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
 //   За допомоги циклу знайти яка попелюшка повинна бути з принцом.
   // Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку


// function Cinderella(name,age,sizeFeet){
//       this.name = name;
//       this.age = age;
//       this.sizeFeet = sizeFeet;
// }

// class Prince{
//      constructor(name,age,hijacker) {
//          this.name = name;
//          this.age = age;
//          this.hijacker = hijacker;
//      }
// }

// let Cinderellas = [
//     new Cinderella('Sonya',15,28),
//     new Cinderella('Katya',14,27),
//     new Cinderella('Lena',16,26),
//     new Cinderella('Valya',17,30),
//     new Cinderella('Jenya',16,27),
//     new Cinderella('Elvira',19,31),
//     new Cinderella('Xena',14,27),
//     new Cinderella('Anna',19,29),
//     new Cinderella('Nina',13,25),
//     new Cinderella('Sara',17,28),
// ];

// const prince= new Prince('Garold',22,29)

//За допомоги циклу знайти яка попелюшка повинна бути з принцом.

// for (let i = 0; i < Cinderellas.length; i++) {
//       if(Cinderellas[i].sizeFeet === prince.hijacker){
//             console.log(Cinderellas[i]);
//       }
// }

//Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

// const findCinderella = Cinderellas.find(cinderella => cinderella.sizeFeet === prince.hijacker);
// console.log(findCinderella);

// let sortCinderella = Cinderellas.filter(cinderella => cinderella.age > 15);
// console.log(sortCinderella);
// let cinderellaFind = Cinderellas.find(cinderela =>cinderela.sizeFeet === 30);
// console.log(cinderellaFind);

// console.log(Cinderellas);

// let cinderellasort = Cinderellas.filter(cinderella =>cinderella.sizeFeet > 27);
// console.log(cinderellasort);

// class Cinderella{
//     constructor(name,age,sizeFeet) {
//        this.name = name;
//        this.age = age;
//        this.sizeFeet = sizeFeet;
//
//     };



// let Cinderellas = [
//
//     new Cinderella('Agness',20,25),
//     new Cinderella('Ira',18,22),
//     new Cinderella('Sveta',16,24),
//     new Cinderella('Sara',16,30),
//     new Cinderella('Tanya',15,23),
//     new Cinderella('Anna',18,22),
//     new Cinderella('Katya',17,31),
// ];

// const findCinderella = Cinderellas.find(cinderella => cinderella.age >=20);
// console.log(findCinderella);

// class Prince{
//     constructor(name,age,weapon) {
//         this.name = name;
//         this.age = age;
//         this.weapon = weapon;
//     }
// }
//
// let princes =[
//    new Prince ("Garold",25,'beretta'),
//    new Prince ("Kevin",27,'pistol'),
//    new Prince ("Snake",22,'bazuka'),
//    new Prince ("John",28,'knife'),
//    new Prince ("Steven",30,'fire'),
//    new Prince ("Curtis",26,'beretta'),
//
// ];


// const findPrince = princes.find(prince =>prince.age ===30);
// console.log(findPrince);

// const filterPrince = princes.filter(prince=>prince.age < 25);
// console.log(filterPrince);






















//додавання обьекту в масив

// function Cinderella(name,age,sizeFeet){
//       this.name = name;
//       this.age = age;
//       this.sizeFeet = sizeFeet;
// }
//
// let Cinderellas = [
//     new Cinderella('Sonya',15,28),
//     new Cinderella('Katya',14,27),
//     new Cinderella('Lena',16,26),
//     new Cinderella('Valya',17,30),
//     new Cinderella('Jenya',16,27),
//     new Cinderella('Elvira',19,31),
//     new Cinderella('Xena',14,27),
//     new Cinderella('Anna',19,29),
//     new Cinderella('Nina',13,25),
//     new Cinderella('Sara',17,28),
// ];
//
// function addObjectToCinderella(obj){
//     Cinderellas.push(obj)
// }
//
// addObjectToCinderella({name:'Klara',age:35,sizeFeet:38});
// console.log(Cinderellas);


















