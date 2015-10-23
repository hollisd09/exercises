$(document).ready(function() {

var messageInput = $("#message-input");
var clearAll = $("#clear-all");
var userSelect = $("#select-user");
var darkTheme = $("#dark-theme");
var largeText = $("#large-text");

var results = $("#results");

var postedMessage = $(".posted-message");
var deleteMessage = $(".delete-message");

var messageCount = 0;
var editMode = false;

$("#clear-all").attr("disabled", true);


// User object
var users = {
  names: ["Danielle", "Anderson", "Mathew", "James", "Luke", "Lucas", "Steve"]
};

for (var i = 0; i < users.names.length; i++) {
	userSelect.prepend("<input type='radio' name='user' value='" + users.names[i] + "'>" + users.names[i]);
}

function postMessage () {

	messageCount++;
	if (messageCount > 20) {
		results.find('div:first').remove()
		messageCount--;
	} 

	for (var i = 0; i < users.names.length; i++) {
		if ($("[name='user']")[i].checked === true) {
			var selectedUser = $("[name='user']").eq(i).val();
		}
	}
	
	if (selectedUser === undefined) {
		selectedUser = "Guest";
	}
	var postPart1 = "<div class='posted-message'>";
	var time = new Date();
	var whoDisBe = " <span class='user'>" + selectedUser + ": </span>";
	var post = "<span>" + messageInput.val() + "</span>";
	var deleteMessage = "<button class='delete-message' type='button'>Delete</button>";
	var editMessage = "<button class='edit-message' type='button'>Edit</button>";
	var postPart2 = "</div>";
	var output = (postPart1 + time.toLocaleString() + whoDisBe + post + editMessage + deleteMessage + postPart2);

	results.append(output);
	messageInput.val("");
}

function editMe() {
	var editThis = $("#editme");
	editThis.text(messageInput.val());
	messageInput.val("");
	editThis.removeAttr("id");
	editMode = false;
}

messageInput.keypress(function (event) {
	if (event.keyCode === 13) {
		if (editMode === false) {
			postMessage();
			$("#clear-all").removeAttr("disabled");
		} else {
			editMe();
		}
	}

});

var clear = function () {
	results.html("");
	messageCount = 0;
	$("#clear-all").attr("disabled", true);
}

clearAll.click(clear);

$(document).on('click', '.edit-message', function(event) {
	editMode = true;
	messageInput.val($(this).prev().text());
	$(this).prev().attr("id", "editme");
	messageInput.select();
});

$(document).on('click', '.delete-message', function(event) {
	messageInput.focus();
	$(this).parent().remove();
});

darkTheme.change(function (event) {
	$("body").toggleClass("darkness");
});

largeText.change(function (event) {
	$("#container").toggleClass("large-text");
});


}); //End of JQuery
