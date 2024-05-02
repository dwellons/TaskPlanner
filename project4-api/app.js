// fs is file system
const fs = require("fs");

// Include ExpressJS as a npm package
const express = require("express");

// create an app using the express library
const app = express();

// app should use json middleware
app.use(express.json());

// name of the file to be handled
const fileName = "tasks.json";


/*
GET ALL TASKS
Your api has to handle requests to the url: api/tasks
Your api must support the following verbs: get, post, and delete
Installed nodemon. run nodemon app.js creates server with auto refresh. ctrl c to stop.
localhost:3000/api/tasks
 */
app.get("/api/tasks", (req,res)=>{

    // read the file
    fs.readFile(fileName, (err, data) => {
        // can change content type to tell browser you are sending xml
        res.setHeader("Content-Type", "application/json");
        // parse json data
        let jsonData = JSON.parse(data);
        // respond with the json data
        res.json(jsonData);
        res.end();
    })
})


/*
GET TASK BY ID
The http get endpoint wil accept 1parameter named id and will return the tasks
corresponding to that parameter value. The return value must have the content-type
set to application/json and return a json collection of tasks. fI no tasks exist with the
associated :id parameter, return an empty collection.
localhost:3000/api/tasks/get/1,2,3 etc.
 */
app.get("/api/tasks/get/:id", (req,res)=>{

    // read the file
    fs.readFile(fileName, (err, data) => {
        // parse json data
        let jsonData = JSON.parse(data);
        // search for a course in the tasks
        let task = jsonData.find(c=> c.id === parseInt(req.params.id))
        // if course has something, return it
        if(task) res.json(task);
        // if not, empty object
        else res.json({});
        res.end();
    })
})


/*
CREATE A NEW TASK
The http post endpoint will accept 2 parameters named :id and :description and will return a
confirmation of the new task created. The http post should handle an insert of a task into the data collection.
Send a new task to http://localhost:3000/api/tasks/post/
Using post method on postman.
 */
app.post("/api/tasks/post/", (req, res) => {

    // read the file
    fs.readFile(fileName, (err, data) => {

            // parse json data
            let jsonData = JSON.parse(data);

            // Create a new ID for the task
            let newId = jsonData.length + 1;

            // create a new task object
            let newTask = {
                id: newId,
                description: req.body.description
            };

            // add it to the json data
            jsonData.push(newTask);

            // write it back to the file
            fs.writeFileSync(fileName, JSON.stringify(jsonData));

            // On success, send back JSON with the new task
            res.json(newTask);
            });
});


/*
DELETE A TASK
The http delete endpoint will accept 2 parameters named :id and :description and will return a confirmation
of the task deleted. The htto delete should handle a removal of a task that has a matching id and description.
Delete task http://localhost:3000/api/tasks/delete/(id number)
Using delete method on postman
 */
app.delete("/api/tasks/delete/:id", (req,res)=> {

    // read the file
    fs.readFile(fileName, (err, data) => {
        // parse json data
        let jsonData = JSON.parse(data);
        // search for a course in the tasks
        let taskToRemove = jsonData.find(c=> c.id === parseInt(req.params.id));
        // find index, where it is located in the array
        let index = jsonData.indexOf(taskToRemove);
        // remove it from the array
        jsonData.splice(index, 1);
        // respond with course that was removed.
        res.json(taskToRemove);
        // write the data back to the file
        fs.writeFileSync(fileName, JSON.stringify(jsonData));
        res.end();
    })
})


//define a path - root of website, then callback function request and response
app.get("/", (req, res) => {

    // going here is homepage. localhost:3000/
    res.sendFile(__dirname + '/index.html');
})

// serve static files from the 'public' directory
app.use('/resources', express.static('resources'));

// call back function that executes when we listen on port 3000
app.listen(3000, ()=> {
    console.log("listening on port 3000");
})