const form = document.getElementById("form");
const textInput = document.getElementById("textInput");
const msg = document.getElementById("msg");
const dateInput = document.getElementById("dateInput");

const tasks = document.getElementById("tasks");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  formValidation();
});

const formValidation = () => {
  if (textInput.value === "") {
    msg.innerHTML = "failed";
  } else {
    console.log("success");
    msg.innerHTML = "";
    acceptData();
  }
};

const data = {};

const acceptData = () => {
  data.text = textInput.value;
  data.date = dateInput.value;
  data.description = textarea.value;

  console.log(data);
  createTask();
};

const createTask = () => {
  tasks.innerHTML += `
    <div>
          <span class="fw-bold">${data.text}</span>
          <span class="small text-secondary">${data.date}</span>
          <p>${data.description}</p>

          <span class="options">
            <i onClick = "editTask(this)" data-bs-toggle="modal" data-bs-target="#form" class="fas fa-edit" onClick = "updateTask(this)"></i>
            <i class="fas fa-trash-alt" onClick = "deleteTask(this)"></i>
          </span>
    </div>
    `;
  resetForm();
};

const resetForm = () => {
  textInput.value = "";
  dateInput.value = "";
  textarea.value = "";
};

const editTask = (e) => {
  const selectedTask = e.parentElement.parentElement;
  textInput.value = selectedTask.children[0].innerHTML;
  dateInput.value = selectedTask.children[1].innerHTML;
  textarea.value = selectedTask.children[2].innerHTML;
  selectedTask.remove();
};
const deleteTask = (e) => {
  e.parentElement.parentElement.remove();
};
