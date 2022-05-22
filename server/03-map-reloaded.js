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


// Si quiero sacar solo uno de los elementos
const rta = orders.map(item => item.total);
console.log('rta', rta);



// Si quiero añadir un elemento pero SIN TRANSFORMAR el array original
const rta2 = orders.map(item => {
    item.tax = .19;
    return item;
})

//Esto da la confusión por que modifica el valor que hay en memoria
// solo ocurre con los objetos
console.log('rta2', rta2);

//Para evitar hacer copia nos tenemos que asegurar de generar un nuevo objeto
// con el spread operator

const rta3 = orders.map(item => {
    item.tax = .19;
    return {
        ...item,
        tax: .19
    };
});

console.log('original', orders);
console.log('rta3', rta3);