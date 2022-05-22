const numbers = [1, 30, 49, 29, 10, 13];

let rta = true;
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if (element >= 40){
        rta = false;
    }
}

console.log('for', rta);
const rta2 = numbers.every(item => item <= 40);



const team = [
    {
      name: "Nicolas",
      age: 12,
    },
    {
      name: "Andrea",
      age: 8,
    },
    {
      name: "Zulema",
      age: 2,
    },
    {
      name: "Santiago",
      age: 14,
    },
  ];


  const menores15 = team
    .map(item => item.age)
    .every(menores15 => menores15 <=15);
  console.log('menores15', menores15)