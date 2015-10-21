var messageInput = document.getElementById("message-input");
var clearAll = document.getElementById("clear-all");
var userSelect = document.getElementById("select-user");
var darkTheme = document.getElementsByName("dark-theme");
var largeText = document.getElementsByName("large-text");

var results = document.getElementById("results");

var postedMessage = document.getElementsByClassName("posted-message");
var deleteMessage = document.getElementsByClassName("delete-message");


var bdy = document.getElementsByTagName("body");

var messageCount = 0;
var editMode = false;

document.getElementById("clear-all").setAttribute("disabled", true);


// User object
var users = {
  names: ["Danielle", "Anderson", "Mathew", "James", "Luke", "Lucas", "Steve"]
};

for (var i = 0; i < users.names.length; i++) {
	userSelect.innerHTML += "<input type='radio' name='user' value='" + users.names[i] + "'>" + users.names[i];
}

function postMessage () {

	messageCount++;
	if (messageCount > 20) {
		results.removeChild(results.firstChild);
		messageCount--;
	} 

	for (var i = 0; i < users.names.length; i++) {
		if (document.getElementsByName("user")[i].checked === true) {
			var selectedUser = document.getElementsByName("user")[i].value;
		}
	}
	
	if (selectedUser === undefined) {
		selectedUser = "Guest";
	}
	var postPart1 = "<div class='posted-message'>";
	var time = new Date();
	var whoDisBe = " <span class='user'>" + selectedUser + ": </span>";
	var post = "<span>" + messageInput.value + "</span>";
	var deleteMessage = "<button class='delete-message' type='button'>Delete</button>";
	var editMessage = "<button class='edit-message' type='button'>Edit</button>";
	var postPart2 = "</div>";
	var output = (postPart1 + time.toLocaleString() + whoDisBe + post + editMessage + deleteMessage + postPart2);

	results.innerHTML += output;
	messageInput.value = "";
}

function editMe() {
	var editThis = document.getElementById("editme");
	editThis.innerText = messageInput.value;
	messageInput.value = "";
	editThis.removeAttribute("id");
	editMode = false;
}

messageInput.addEventListener("keypress", function (e) {
	if (e.keyCode === 13) {
		if (editMode === false) {
			postMessage();
			document.getElementById("clear-all").removeAttribute("disabled");
		} else {
			editMe();
		}
	}

});

var clear = function () {
	results.innerHTML = "";
	messageCount = 0;
	document.getElementById("clear-all").setAttribute("disabled", true);
}

clearAll.addEventListener("click", clear);

var deletePost = function(elem) {
	console.log(elem);
	elem.target.parentNode.remove(elem);
	console.log("What's goin on");
	console.log("this", this);
}

var editPost = function(elem) {
	messageInput.value = elem.target.previousSibling.innerText;
	elem.target.previousSibling.setAttribute("id", "editme");	
}

document.querySelector("div.posted-message button.delete-message")

document.querySelector("body").addEventListener("click", function(event) {

  // Handle the click event on any li
  if (event.target.className === "delete-message") {
    deletePost(event);
	}	else if (event.target.className === "edit-message") {
	editMode = true;
	editPost(event);
	}
	messageInput.focus();
});

var yark = document.querySelector('input[name=dark-theme]');
yark.addEventListener("change", function (event) {
	document.getElementsByTagName("body")[0].classList.toggle("darkness");
});


var yarp = document.querySelector('input[name=large-text]');
yarp.addEventListener("change", function (event) {
	document.getElementById("container").classList.toggle("large-text");
});