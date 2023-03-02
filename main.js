//Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5
for (let i = 20; i <=30; i+= 0.5) {
    console.log(i);
}

//Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.
let dollar = 27;
for (let i = 10; i <=100; i +=10) {
    let hryvnias = dollar * i;
    console.log(`${i} доларів коштують ${hryvnias} гривень`)
}

//Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.
let number = 250;
for (let i = 1; i <= 100; i ++) {
    if (i**2 <= number) {
        console.log(i);
    }
}

//Дане ціле число. З'ясувати, чи є воно простим
function primeNumber(number) {
    if (number < 2) {
      return false;
    }
    for (let i = 2; i <= number / 2; i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  }
console.log(primeNumber(7));

//Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь.
function exponentiation(number) {
    if (number <= 0) {
      return false;
    }
    while (number % 3 === 0) {
      number /= 3;
    }
    return number === 1;
  }
  console.log(exponentiation(21));