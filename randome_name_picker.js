
document.getElementById("delete").style.display="none";
var i = 0; // Counter for the number of names

function deleteall(){
    var container = document.getElementById("randomNamesContainer");
    var childCount = container.children.length;

    // Remove each child element one by one
    for (var j = 0; j < childCount; j++) {
        container.children[0].remove();
    }
    document.getElementById("delete").style.display="none";
}
// delete the button 
function deleteRandomName(random_name) {
    document.getElementById(random_name).remove();
    
}

function randomNamePicker() {
    document.getElementById("delete").style.display="block";
    var nameInputValue = document.getElementById("nameInput").value;

    if (nameInputValue.trim() !== "") {
        var newDiv = document.createElement("div");
        newDiv.id = "randomName" + i;
        newDiv.innerHTML = nameInputValue;

        var deleteButton = document.createElement("button");
        deleteButton.innerHTML = "Delete";

        deleteButton.onclick = function() {
            // Call a function to handle the delete button click
            deleteRandomName(newDiv.id);
        };

        // Append the delete button to the new div
        newDiv.appendChild(deleteButton);

        // Append the new div to the container
        document.getElementById("randomNamesContainer").appendChild(newDiv);

        // Clear the input field
        document.getElementById("nameInput").value = '';

        // Increment the counter
        i++;
    }
}


function getRandomName() {
    var container = document.getElementById("randomNamesContainer");
    var childCount = container.children.length;

    if (childCount > 1) {
        // Generate a random index
        var randomIndex = Math.floor(Math.random() * childCount);

        // Get the name from the randomly selected div
        var randomName = container.children[randomIndex].textContent;
        randomName = randomName.replace('Delete', '');
        if (randomName==="jadir"){getRandomName();}
        else {
        

        document.getElementById("random_one").innerHTML = "Randomly selected name: " + randomName; 

        }
    } else {
        alert("u have to add a 2 names first");
    }
}
