const words = ['spray', 'limit', 'elite', 'exhuberant'];

const newArray = [];
for (let index = 0; index < words.length; index++) {
    const item = words[index];
    if (item.length >= 6) {
        newArray.push(item);
    }
}
console.log('newArray', newArray);
console.log('original', words);

// podemos reducir notablemente el código utilizando filter
const rta = words.filter(item => item.length >= 6);
console.log('rta', rta);


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


const search = (query) => {
    return orders.filter(item => {
        return item.customerName.includes(query);
    })
}


console.log(search('Nico'));