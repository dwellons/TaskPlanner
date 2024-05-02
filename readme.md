## Project 4 - NodeJS w/ Express

### Project Image
![Start Page](project4-api/resources/images/appImage.png)

#### Objectives:
* NodeJS APIs
* ExpressJS APIs
* Http Verbs & Actions
* Using NPM Packages

#### Project Details:
* Expanding on project 3, your boss has asked you to create your own api so eventually your todo
application can be easily exported to iOS and Android. 
* Your job is to rebuild the api that you used in project 3 using NodeJS & ExpressJS with a backend of your choice - you can choose where to store your data. 
* Good choices would be a relational database or a json file. 
* Your 2nd job is to refactor project 3 to use your newly built api so that you have a fully functioning api as well as a fully function web application written in javascript.
  * Create a NodeJS application named project4-api
  * Include ExpressJS as an npm package
  * Your api has to handle requests to the url: apitasks
  * Your api must support the following verbs: get, post, and delete
  * The http get endpoint wil accept 1parameter named id and will return the tasks
  corresponding to that parameter value. The return value must have the content-type set to application/json and return a json collection of tasks. fI no tasks exist with the associated :id parameter, return an empty collection.
  * The http post endpoint will accept 2 parameters named :id and :description and will return a confirmation of the new task created. The http post should handle an insert of a task into the data collection.
  * The http delete endpoint will accept 2 parameters named :id and :description and will return a confirmation of the task deleted. The htto delete should handle a removal of a task that has
  a matching id and description.

### How the application works
* The tasks are stored as JSON data in tasks.json.
* When the page loads, it will first make a GET request for all of the current tasks or items stored. If the
  request is good, it will load the current stored tasks or items.
* If the user adds an item, it will send the description the user entered in the body of the POST
  request to the URL. If the request is good, it will load the current stored tasks or items.
* If the user deletes an item, it will send the description of the deleted item in the body of the DELETE
  request to the URL. If the request is good, it will load the current stored tasks or items.
*  This application also allows the user to use these features as an API, allowing the future use of data in other 
projects and resources. 
* To use the API:
   * GET: /api/tasks/ - Returns all of the tasks in the list.
   * GET: /api/tasks/get/:id - Returns a task by its ID number.
   * POST: /api/tasks/post/ - Adds a new task. Include task description as JSON in request body.
   * DELETE: /api/tasks/delete/:id - Deletes a task by its ID number.


### What did I Learn?
* Running JS on the server using NodeJS Creating a web server using ExpressJS
* Http Verbs &Actions
* How to respond to different HTTP Verbs
* Using the NPM package manager

### Resources Used
* Background Image - https://commons.wikimedia.org/wiki/File:Wikipedia_notebook_pencil_puzzles.jpg
* This file is made available under the Creative Commons CC0 1.0 Universal Public Domain Dedication.
  The person who associated a work with this deed has dedicated the work to the public domain by waiving all of their
  rights to the work worldwide under copyright law, including all related and neighboring rights, to the extent
  allowed by law. You can copy, modify, distribute and perform the work, even for commercial purposes,
  all without asking permission.
* Send index file in response - https://forum.freecodecamp.org/t/basic-node-and-express-serve-an-html-file/542093
* Serving CSS, images, JS files - https://expressjs.com/en/starter/static-files.html


