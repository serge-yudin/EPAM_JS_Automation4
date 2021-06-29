//Создать объект car, добавить к нему свойство color со значением 'черный'
const car = {color: 'black'};

//Изменить свойство color объекта car на 'зеленый'
car.color = 'green';

//В объект car добавить свойство power, которое является функцией и выводит в консоль мощность двигателя
car.power = function power(){ console.log(this.engine_power) };

car.engine_power = '120';

console.log(car);

console.log(car.power());


//На склад принимают груши и яблоки, напишите функцию, которая возвращает результат сложения количества принятых груш и яблок
const sumFruits = (pears=0, apples=0) => { return pears + apples; };

console.log(sumFruits());  // 0
console.log(sumFruits(10));  // 10
console.log(sumFruits(20,30));  // 50


//В терминале оплаты сохранено ваше имя, напишите функцию для определения имени в терминале(если вы ввели ваше имя, то привет + имя, если нет, то нет такого имени)
const checkName = (name) => {
	let myName = 'Serge';
	return (name.toLowerCase() == myName.toLowerCase() ? `Hello, ${name}.` : `${name} wasn't found.`);
};

console.log(checkName('Serge'));
console.log(checkName('Pete'));


//Напишите функцию вычисления типа аргумента и вывод типа в консоль
const getArgType = (arg) => {
	console.log(typeof(arg));
};

getArgType('myname');
getArgType(+'342');
getArgType({});


//Напишите функцию, которая определяет является ли число простым или нет
const isPrimeNum = (num) => {
	// trial division algorithm
	let k = Math.ceil(num ** 0.5);
	for(let i=2; i<=k; i++){
		if (num % i == 0 ){
			return false;
		}
	}
	return true
};

const TestIsPrimeNum = (num) => {
	// checks every number if it is Prime in a range of numbers from 1 to 'num' and writes it to console 
	for (let i=1; i<=num; i++){
		console.log(`Is ${i} a prime number ->  ${isPrimeNum(i)}`);
	}
};

TestIsPrimeNum(100);
