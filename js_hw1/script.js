// 1-2 
// Створіть об'єкт room з параметри:
// ключ height зі значенням 3
// ключ tv зі значенням samsung
// ключ big зі значенням true
// 2 Виведіть в alert тип даних параметра big
    let room = {
    height: 3,
    tv: "samsung",
    big: true,
    };
    alert(typeof room.big);
// 3 Перевірте, що цей об'єкт не є порожнім і що в ньому є ключ age.
    let user = {
        name: "John",
        age: 30
      };
      if (user) {
        console.log(user);
      }
      if (user.age) {
        console.log(user.age);
      }
// 4 Отримайте з цього об'єкту елемент, де name == "Bob" і збережіть це в будь-якій змінній.

    let users = {
    user_1: {
        name: "John",
        age: 30
    },
    user_2: {
        name: "Bob",
        age: 21
    },
    user_3: {
        name: "Anna",
        age: 19
    }
    }
    let nameBob;
    for (let key in users) {
        if (users[key].name === "Bob") {
        nameBob = users[key];
        }
    }
    console.log(nameBob);
    for ( let key in users) {
        if (users[key].name === "Anna") {
            delete (users[key]);
        }
    }
    console.log (users);

//Отримайте з об'єкта obj значення id у констанду id, не використовуючи вираз obj.id
    const obj = {
    id: 5,
    token: 12343423
    };
    const id = obj["id"];
    console.log (id);

//6 Створи об'єкт, що описує автомобіль (виробник, модель, рік випуску, середня швидкість, обсяг паливного баку,
//середня витрата палива на 100 км., водії), і наступні методи для роботи з цим об'єктом:
//Метод, який виводить на екран інформацію про автомобіль.
//Додавання ім’я водія у список
//Перевірка водія на наявність його ім’я у списку
//Підрахунок необхідного часу та кількості палива для подолання переданої відстані з середньою швидкістю. 
//Враховуй, що через кожні 4 години дороги водієві необхідно робити перерву на 1 годину. 
    
let car = {
    mark: "Mercedes",
    country: "Germany",
    model: "e-class",
    year: 2020,
    averageSpeed: 100,
    volume: 2,
    fuelConsumption: 7,
    driver: [],
    getInfo: function () {
        console.log ( `Mark: ${this.mark}, Country: ${this.country}, Model: ${this.model}, Year: ${this.year}, 
        averageSpeed ${this.averageSpeed}, Volume: ${this.volume}, FuelConsumprion ${this.fuelConsumption}, driver ${this.driver}`);
    },
    addDriver: function () {
        let name = prompt('Введіть водія');
        car.driver.push(name);
    },
    checkDriver: function () {
        let checkInDriver = prompt('Введіть водія, якщо він є в списку');
            if (car.driver.includes(checkInDriver)) {
            console.log('Такий водій є в списку');
            }
            else { 
              console.log('Такого водія немає в списку');
            }
    },
    calculate: function () {
        let distance = prompt('Введіть відстань (км):');
      let time = distance / this.averageSpeed;
      const hoursPerBreak = 4;
      const breakDuration = 1;
      let numberOfBreaks = time / hoursPerBreak;
      let totalBreakTime = numberOfBreaks * 1;
      let totalTravelTime = time + totalBreakTime;
      let fuelNeeded = (distance * this.fuelConsumption) / 100;
      alert("totalTravelTime = " + time + " + " + totalBreakTime + " = " + totalTravelTime + " (hours)");
      alert("Fuel = " + fuelNeeded + " (l)");
},
}

car.getInfo();
car.addDriver();
car.checkDriver();
car.calculate()



      
      
      
      