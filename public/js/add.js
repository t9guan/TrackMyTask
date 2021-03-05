import taskdata from '../../data.json';
let index = 7;
function handleSubmit(event) {
    event.preventDefault();
  
    const data = new FormData(event.target);
  
    const taskName = data.get('taskName');
    const startTime = data.get('startTime');

    let newTask = {
        "index": index,
        "name": taskName,
        "time": startTime,
        "endtime": "-----",
        "timetaken": "-----"
    }
    
    taskdata.tasks.push(newTask);
    index = index + 1;
    console.log(taskdata);
  }
  
  const form = document.querySelector('form');
  form.addEventListener('submit', handleSubmit);