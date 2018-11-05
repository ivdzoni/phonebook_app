var button = document.getElementById("button");
button.addEventListener("click", sendData);

function sendData() {
    event.preventDefault();
    
    var form = document.forms[0];

    var user_data = {
    first_name: form[0].value,
	last_name: form[1].value,
	telephone_number: form[2].value
	}

    var new_user = makeUserList.makeNewUser(user_data);

    var xhr = new XMLHttpRequest();
    xhr.onload = function() {
        if (xhr.status == 200)
            alert("User has been successfully added");
    }
    
    xhr.open("POST","http://localhost:3000/userlist");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(new_user));
}	
	