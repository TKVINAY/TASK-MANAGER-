let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function showTasks(){

let taskList = document.getElementById("taskList");

taskList.innerHTML = "";

tasks.forEach((task,index)=>{

let li = document.createElement("li");

li.innerHTML = `
${task}
<button class="delete" onclick="deleteTask(${index})">Delete</button>
`;

taskList.appendChild(li);

});

localStorage.setItem("tasks",JSON.stringify(tasks));

}

function addTask(){

let taskInput = document.getElementById("taskInput");

let task = taskInput.value;

if(task === "") return;

tasks.push(task);

taskInput.value = "";

showTasks();

}

function deleteTask(index){

tasks.splice(index,1);

showTasks();

}

showTasks();