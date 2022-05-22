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

console.log('original', orders);
const rta = orders.map(item => item.total);
console.log('rta', rta);