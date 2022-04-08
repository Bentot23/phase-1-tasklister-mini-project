document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector('#create-task-form')
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    //console.log the e
    console.log(e)
    toDoList(e.target[0].value) // 0 is the id of description

    form.reset()
  })
});

function toDoList(toDo) {
  let li = document.createElement('li') //to make a list for toDo
  let btn = document.createElement('button') //to make a button beside the toDo
  btn.addEventListener('click', deleteTask)
  btn.textContent = 'X'
  let ul = document.querySelector('#tasks')
  ul.appendChild(li)
  li.innerText = `${toDo} `
  li.appendChild(btn)
}

function deleteTask(e) {
  e.target.parentNode.remove()
}