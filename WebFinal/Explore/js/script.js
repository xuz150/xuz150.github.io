// place to save added search
var searchArray = [];

// update search list
var updateSearch = function(){
	var searchListHolding = document.getElementById("searchList");

	// empty the search list
	searchListHolding.innerHTML = '';

	// determine searchlist length
	var len = searchArray.length
	var i;

	for (i=0; i < len; i++) {
	// check if for loop is running
	console.log('search' + i + ":" + searchArray[i])

	// create element

	var newSearch = document.createElement('div');	
	
	// defining the new divs ID and its class
	newSearch.className = 'search';
	newSearch.id = i;

	// create the search paragraph
	var search = document.createElement('p');

	// assign the 'task' to the task div
	search.innerHTML = searchArray[i];

// 	// create the detele button
// 	var deletButton = document.createElement('button');

// 	// add id button
// 	deteleButton.id = 'deleteButton';

// 	// add the text content to the button(adding a value to the button)
// 	deleteButton.innerText = 'X';

// 	// listen for the click
// 	deleteButton.addEventListener('click', function(e){
// 		e.preventDefault();
// 		deleteTask(e);
// 	});

// 	}
// }
// // Missing codes from here

// // delete task
// var deleteTask =  function(e){
// 	var taskNumber = e.
// }


// // Aug 15 class
// // deleting all tasks
// var deleteAllTask = function(e){
// 	var answer = prompt("Would you like to delete tasks?");
// 	if (answer === "sure" || answer === "Sure" || answer === "Yes" || answer === "yes" || answer === "");
// 		taskArray.splise(0, taskArray.length);
// 		updateTasks();
// 	};

// };

// var init = function(){
// 	//define "add"button
// 	var addButton =  document.getElementById("addButton");

// 	//add event listener to the button
// 	addButton.addEventListener('click', function(e){
// 		e.preventDefault();
// 		saveTask();
// 	})
// };