
document.addEventListener(`DOMContentLoaded`, ()=>{
  const form = document.querySelector(`form`);
    form.addEventListener(`submit`, (e)=>{
      e.preventDefault();
      addsTasks();
      form.reset();
  })
});

function addsTasks(){
  const tasks = document.querySelector(`#tasks`); 
  const todo = document.querySelector(`#new-task-description`).value;
  const li = document.createElement(`li`);
  li.textContent = `${todo}  `;
  tasks.appendChild(li);

  const btn = document.createElement('button');
  btn.addEventListener(`click`, deleteTask)
  btn.textContent = `x`;
  li.appendChild(btn)
}

function deleteTask(e){
  e.target.parentNode.remove()
}