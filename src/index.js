document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let desc = document.querySelector("#new-task-description");
  let form = document.querySelector("#create-task-form");
  form.addEventListener("submit", function(e) {
    const li = document.createElement('li');
    const button = document.createElement('button')
    button.innerText = "X"
    button.id = "del-item"
    let task = document.querySelector("#tasks").appendChild(li);
    task.innerHTML = `${desc.value}`;
    task.appendChild(button);
    e.preventDefault();
  });

  let complete = document.querySelector('#tasks');
  complete.addEventListener("click", function(e) {
    complete.querySelector('li').remove();
  });
});


