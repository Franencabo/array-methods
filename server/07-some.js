const numbers = [1,2,3,4];

let rta = false;
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if (element %2 === 0){
        rta = true;
        break;
    }
}

console.log(rta);

// podemos reducir el codigo con SOME

const rta2 = numbers.some(item => item % 2 === 0);
console.log(rta2);


const orders = [
    {
        customerName: 'Nicolas',
        total: 60,
        delivered: true,
    },
    {
        customerName: 'Zulema',
        total: 120,
        delivered: false,
    },
    {
        customerName: 'Santiago',
        total:180,
        delivered: true,
    },
    {
        customerName: 'valentina',
        total: 240,
        delivered: true,
    }
];

const rta3 = orders.some(item => item.delivered);
console.log(rta3);
