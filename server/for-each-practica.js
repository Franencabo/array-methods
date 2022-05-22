const tasks = [
    {
        title: 'Ir al gym',
        description: 'Cada mañana a las 6:45',
        status: true
    },
    {
        title: 'Ir al trabajo',
        description: 'Cada día después del gym',
        status: true
    },
    {
        title: 'Estudiar inglés',
        decription: 'No siempre tengo ganas, pero tengo que tener voluntad',
        status: false
    }
]

const app = document.getElementById('app');
tasks.forEach(task => {
    if(task.status){
        let element = `<li>${task.title} - ${task.description}</li>`;
        app.innerHTML += element;
    }
});