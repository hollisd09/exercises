var messageInput = document.getElementById("message-input");
var clearAll = document.getElementById("clear-all");

var darkTheme = document.getElementsByName("dark-theme");
var largeText = document.getElementsByName("large-text");

var results = document.getElementById("results");

var postedMessage = document.getElementsByClassName("posted-message");
var deleteMessage = document.getElementsByClassName("delete-message");


var bdy = document.getElementsByTagName("body");

var outputArray = []
var editMode = false;

document.getElementById("clear-all").setAttribute("disabled", true);
console.log(document.getElementById("clear-all"));


function postMessage () {
	var post = "<span>" + messageInput.value + "</span>";
	var postPart1 = "<div class='posted-message'>";
	var deleteMessage = "<button class='delete-message' type='button'>Delete</button>";
	var editMessage = "<button class='edit-message' type='button'>Edit</button>";
	var postPart2 = "</div>";
	var output = (postPart1 + post + editMessage + deleteMessage + postPart2);
	if (outputArray.length < 20) {
		outputArray.push(output);
	} else {
		outputArray.shift();
		outputArray.push(output);
	}
	results.innerHTML = "";
	for (var i = 0; i < outputArray.length; i++) {
		results.innerHTML += outputArray[i];
	}


	messageInput.value = "";

console.log("Delete message?", deleteMessage);
}

messageInput.addEventListener("keypress", function (e) {
	if (e.keyCode === 13) {
		if (editMode === false) {
		postMessage();
		document.getElementById("clear-all").removeAttribute("disabled");
		} else {
			
			editMode = false;
		}
	}

});

var clear = function () {
	results.innerHTML = "";
	outputArray = [];
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
	console.log(elem);
	messageInput.value = elem.target.previousSibling.innerText;
}
console.log("Delete message?", deleteMessage);
// deleteMessage.addEventListener("click", deletePost);

document.querySelector("div.posted-message button.delete-message")




document.querySelector("body").addEventListener("click", function(event) {
  console.log(event);

  // Handle the click event on any li
  if (event.target.className === "delete-message") {
    console.log("You clicked on a button element");
    deletePost(event);
}	else if (event.target.className === "edit-message") {
	console.log("SOMETHINGHAPPENED");
	editMode = true;
	editPost(event);
}
});


var yark = document.querySelector('input[name=dark-theme]');
yark.addEventListener("change", function (event) {
	console.log(bdy);
	document.getElementsByTagName("body")[0].classList.toggle("darkness");
});








var yark = document.querySelector('input[name=large-text]');
yark.addEventListener("change", function (event) {
	console.log(bdy);
	document.getElementById("container").classList.toggle("large-text");
});



/* This is where the edit button will be */







