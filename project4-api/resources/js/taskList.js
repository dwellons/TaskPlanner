// define global variables
const xhr = new XMLHttpRequest();
const url = "http://localhost:3000/api/tasks/";

const init = () => {

    // click event on add button
    document.querySelector("#newTask").addEventListener("click", addNewTask);

    // load tasks
    displayTasks();

    // click event on a delete button
    document.addEventListener("click", function(event) {
        if (event.target && event.target.className == "deleteTask") {

            // get task description associated with the clicked delete button
            let taskDescription = event.target.getAttribute("data-description");

            // pass taskDescription to deleteTasks method
            deleteTasks(taskDescription);
        }
    });
}


// ADD A NEW TASK
const addNewTask = () => {

    // get the response data and convert to JSON
    let data = JSON.parse(xhr.responseText);

    // create a new ID for the task
    let newId = data.length + 1;

    // define local variable
    let taskDescription = document.querySelector("#task").value;

    // define body
    let params = {
        id: newId,
        description: taskDescription
    }

    // define the method
    xhr.open("post", url + "post/");

    // define the header
    // have to happen after we open the request
    xhr.setRequestHeader("Content-Type", "application/json");

    // callback
    xhr.onreadystatechange = () => {
        if(xhr.readyState == 4) {
            console.log("New task was added..." + taskDescription);

            // re load tasks
            displayTasks();
        }
    }
    // the information we want in the http body
    // have to stringify the parameters
    xhr.send(JSON.stringify(params));
}


// DISPLAY TASKS
const displayTasks = () => {

    // loading message in console
    console.log("Loading tasks...");

    // define the method
    xhr.open("get", url);

    // define the header
    // have to happen after we open the request
    xhr.setRequestHeader("Content-Type", "application/json");

    // callback
    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4) {

            // get the response data and convert to JSON
            let data = JSON.parse(xhr.responseText);

            // build task list
            let tasksHTML = "";

            // loop through tasks and add to list
            // have to assign each task a data-description to be able to select it when deleting
            data.forEach(task => {
                tasksHTML += "<tr><td>" + task.description + "</td><td><button type=\"button\" class=\"deleteTask\" " +
                    "data-description=\"" + task.description + "\">Delete</button></td></tr>";
            });

            // add tasks to page
            document.getElementById("results").innerHTML =
                "<table id='resultsTable'>" +
                tasksHTML +
                "</table>";
        }
    }
    xhr.send();
    // finished loading message in console.
    console.log("All tasks loaded.")
}


// DELETE TASKS
// taskID comes from click event
const deleteTasks = (taskId) => {
    // define the method
    xhr.open("delete", url + "delete/" + taskId);

    // define the header
    // have to happen after we open the request
    xhr.setRequestHeader("Content-Type", "application/json");

    // callback
    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4) {
            // delete confirmation in console
            console.log("The task was deleted...");

            // re load tasks
            displayTasks();
        }
    }
    // send the request
    xhr.send();
}

// Trigger an init method in the js file. This method should be automatically triggered with no user interaction.
window.onload = init;