let taskdata = require('../data.json');

function handleSubmit(event) {
    event.preventDefault();
  
    const data = new FormData(event.target);
  
    const taskName = data.get('taskName');
    const startTime = data.get('startTime');

    let newTask = {
        "index": "7",
        "name": taskName,
        "time": startTime
    }
    
    taskdata.tasks.push(newTask);
  
    console.log({ value });
  }
  
  const form = document.querySelector('form');
  form.addEventListener('submit', handleSubmit);