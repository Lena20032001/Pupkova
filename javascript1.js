const num1 = 5;
const num2 = 9;
const num3 = 13;
let min;
if (num1 > num2 > num3) {
   console.log (num3);
} else if (num2 > num1 > num3) {
    console.log (num3);
} else (num3 > num2 > num1); {
    console.log (num1);
}

let numberMonth = prompt ("Введите номер месяца")
    switch (numberMonth) {
        case '1': console.log (31); break;
        case '2': console.log (28); break;
        case '3': console.log (31); break;
        case '4': console.log (30); break;
        case '5': console.log (31); break;
        case '6': console.log (30); break;
        case '7': console.log (31); break;
        case '8': console.log (31); break;
        case '9': console.log (30); break;
        case '10': console.log (31); break;
        case '11': console.log (30); break;
        case '12': console.log (31); break; 
        default: break;  
    }

let num = 5.381
let exp = 4
let i = 1;
while(i <= exp) {
    console.log(num**i);
    i++;
}

function SayHello() {
    console.log ("Hello!");
    }
    SayHello();
    document.write("Hello!");

function getRandom(min, max) {
    return Math.random() * (max - min) + min;
    }
    let a = getRandom(1, 100);
    console.log (a ** 2);

reverPal = (arr) => arr.map(word => [...word].reverse().join(''))
console.log(reverPal(["fearless", "reputation", "folklore", "evermore"]))