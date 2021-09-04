//"use strict";
let tasks = [];

const getPriorityName = function (priority) {
  switch (priority) {
    case "1":
      return "High";
    case "2":
      return "Medium";
    case "3":
      return "Low";
    default:
      return "";
  }
};

// Function to make the Taskname field take the user input once the user click on the field
const edit_taskname = function(i){
  
  let td_name = document.querySelectorAll("#taskname_table")[i];
  let textArea = document.createElement('input');
  textArea.style.width = td_name.width + 'px';
  textArea.style.height = td_name.height + 'px';
  textArea.id = 'taskname_input'
  textArea.className = 'form-control';
  td_name.innerHTML = '';
  
  td_name.appendChild(textArea);
  
}
// Function to make the Priority field take the user input once the user click on the field
const edit_priority = function(i){

  let td_priority = document.querySelectorAll("#priority_table")[i];
  let optionsArea = document.createElement('select');
  let opt1 = document.createElement("option");
  let opt2 = document.createElement("option");
  let opt3 = document.createElement("option");

  opt1.value = "1";
  opt1.text = "High";

  opt2.value = "2";
  opt2.text = "Medium";

  opt3.value = "3";
  opt3.text = "Low";

  optionsArea.add(opt1, null);
  optionsArea.add(opt2, null);
  optionsArea.add(opt3, null);

  optionsArea.style.width = td_priority.width + 'px';
  optionsArea.style.height = td_priority.height + 'px';
  optionsArea.className = 'form-control';

  td_priority.innerHTML = '';
  td_priority.appendChild(optionsArea);
  
}

// Function to edit the tasks once the user click on Edit button
const editTask = function(i){
  document.querySelectorAll("#save")[i].style.display ="inline"
  document.querySelectorAll("#cancel")[i].style.display ="inline"

  let editName_ON = false;
  let editPriority_ON = false;

  let TaskTable = document.querySelectorAll("#taskname_table")[i];
  TaskTable.onclick = function() {
    if(editName_ON == false){
      edit_taskname(i)
      editName_ON = true;
      }
    }
  
  let PriorityTable = document.querySelectorAll("#priority_table")[i];
  PriorityTable.onclick = function() {
    if(editPriority_ON == false){
      edit_priority(i)
      editPriority_ON = true;
      }
    }
    
   
   let SaveButton = document.querySelectorAll("#save")[i];
   SaveButton.onclick = function(){
     tasks[i].name = document.querySelectorAll("#taskname_table")[i].firstChild.value;
     tasks[i].priority = document.querySelectorAll("#priority_table")[i].firstChild.value;
     renderTable();
   }
   
   let CancelButton = document.querySelectorAll("#cancel")[i];
   CancelButton.onclick = function(){
     renderTable();
    }

}

const deleteTask = function (i) {
  if (!confirm("Are you sure ?")) return;
  tasks.splice(i, 1);
  renderTable();
};
const moveUp = function (i) {
  if (i == 0) return;
  const oldTask = tasks[i];
  tasks[i] = tasks[i - 1];
  tasks[i - 1] = oldTask;
  renderTable();
};
const moveDown = function (i) {
  if (i == tasks.length - 1) return;
  const oldTask = tasks[i];
  tasks[i] = tasks[i + 1];
  tasks[i + 1] = oldTask;
  renderTable();
};

const renderTable = function () {
  const tbody = document.querySelector("#tasks_tbody");
  tbody.innerHTML = "";
  tasks.forEach((t, i) => {
    const row = `
        <tr>
        <td>${i + 1}</td>
        <td  id="taskname_table" type = "text">${t.name}</td>
        <td  id="priority_table"  >${getPriorityName(t.priority)}</td>
        <td>
        ${
          i > 0
            ? `<button id="up" class="btn btn-sm btn-secondary" onclick="moveUp(${i})">Up</button>`
            : ``
        }
        ${
          i < tasks.length - 1
            ? `<button id="down" class="btn btn-sm btn-secondary" onclick="moveDown(${i})">Down</button>`
            : ``
        }
        </td>
        <td>
        <button id="edit" class="btn btn-primary btn-sm" onclick="editTask(${i})">Edit</button>
        <button id="save" class="btn btn-success btn-sm"  style="display:none;">Save</button>
        <button id="cancel" class="btn btn-danger btn-sm" style="display:none;">Cancel</button>
        <button id="delete" class="btn btn-danger btn-sm" onclick="deleteTask(${i})">Delete</button></td>
        </tr>
        `;
    tbody.insertAdjacentHTML("beforeEnd", row);
  });
};
const addTask = function () {
  const taskName = document.querySelector("#task_name").value;
  const priority = document.querySelector("#task_priority").value;
  if (taskName !== "" && priority > 0) {
    tasks.push({
      name: taskName,
      priority: priority,
    });
    renderTable();
  }
};

document.querySelector("#add").addEventListener("click", addTask);
