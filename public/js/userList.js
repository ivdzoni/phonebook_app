var xhr = new XMLHttpRequest();
var xhr2 = new XMLHttpRequest();


// Creating list of users
xhr.onload = function () {
    if (xhr.status == 200) {
        var start = document.getElementById("start");
        var table = document.createElement("TABLE");
        table.className = "table table-hover";
        start.appendChild(table);
        table.innerHTML = "<tr><th>First Name</th><th>Last Name</th><th>Telephone Number</th><th></th></tr>";
        var user_list = JSON.parse(xhr.responseText);
		for (x in user_list) {
              table.innerHTML = table.innerHTML + "<tr><td>" + user_list[x].first_name + "</td><td>" + user_list[x].last_name + "</td><td>" + user_list[x].telephone_number + "</td><td><button id = " + user_list[x]._id + " onclick='removeUser();'>Delete User</button></td></tr>";
            var button = document.getElementById(user_list[x]._id);
            button.addEventListener("click", removeUser);          
        }
    }
}

xhr.open("GET", "http://localhost:3000/userlist");
xhr.setRequestHeader("Content-Type", "application/json");
xhr.send();


// Deleting user
xhr2.onload = function () {
    if (xhr2.status == 200) {
        var resp = JSON.parse(xhr2.responseText);
        var id = resp._id;
		var x = document.getElementById(id).parentNode;
		var y = x.parentNode;
		y.parentNode.removeChild(y);

        //$("#" + id)[0].parentNode.parentNode.remove();
    }
	alert("User has been successfully removed");
}

function removeUser() {
    var id = event.srcElement.id;
    xhr2.open("DELETE", "http://localhost:3000/userlist/user_id/" + id);
    xhr2.send();
	
}







 