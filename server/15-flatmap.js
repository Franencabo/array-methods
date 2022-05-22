const users = [
    { userId: 1, username: "Tom", attributes: ["Nice", "Cutte"]},
    { userId: 2, username: "Mike", attributes: ["Lovely"]},
    { userId: 1, username: "NIco", attributes: ["Nice", "Cool"]}
]

// Si quisieramos recopilar todos los atributos dados en un array de datos

const rta = users.map(user => user.attributes).flat();
console.log(rta);

// Aunque tenemos la función flatmap para hacer eso

const rta2 = users.flatMap(user => user.attributes);
console.log(rta2);


// en el siguiente ejercicio vamos a sacar un array de fechas de inicio de los
// appointments que vienen dados en un objeto

const calendars = {
    primaryCalendar: [
      {
        startDate: new Date(2021, 1, 1, 15),
        endDate: new Date(2021, 1, 1, 15, 30),
        title: "Cita 1",
      },
      {
        startDate: new Date(2021, 1, 1, 17),
        endDate: new Date(2021, 1, 1, 18),
        title: "Cita 2",
      },
    ],
    secondaryCalendar: [
      {
        startDate: new Date(2021, 1, 1, 12),
        endDate: new Date(2021, 1, 1, 12, 30),
        title: "Cita 2",
      },
      {
        startDate: new Date(2021, 1, 1, 9),
        endDate: new Date(2021, 1, 1, 10),
        title: "Cita 4",
      },
    ],
  };

  const rta3 = Object.values(calendars).flatMap(item => {
      console.log('item', item);
      return item.map(date => date.startDate);
  })

  console.log(rta3);