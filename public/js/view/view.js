//Event when Join Chat button is clicked
let onJoinChatClick = () => {
    let element = document.getElementById("join-chat-row");
    joinChat();
    saveDisplayName();
    element.parentNode.removeChild(element);

}

//Sets the local display name
let setLocalDisplayName = (displayName) => {
    let element = document.getElementById("local-display-name");
    element.innerHTML = "Your Display Name: " + displayName;
}

//Shows message if you are the only user in the room
let showOnlyPersonMessage = () => {
    let element = document.getElementById("onlyPersonMsg");
    element.style.display = "block";
    element.innerHTML = onlyPersonMessage;
    
}

//Hides message if you aren't the only user in the room
let hideOnlyPersonMessage = () => {
    let element = document.getElementById("onlyPersonMsg");
    element.style.display= "none";
}

//adds remote user display name to the list
let addToNameList = (name,id) => {
    let existingEl = document.getElementById(id);
    if (existingEl === null) {
        let element = document.getElementById("name-list");
        let h4 = document.createElement('h4');
        h4.setAttribute("id", id);
        h4.appendChild(document.createTextNode(name));
        element.appendChild(h4);
    }
    
}

//removes remote user display naem from list
let removeNameFromList = (id) => {
    let element = document.getElementById(id);
    element.parentNode.removeChild(element);
}


//displays the remote user list
let displayUserList = () => {
    let element = document.getElementById("name-list");
    element.style.display = "block";
    document.getElementById("user-in-call-msg").innerHTML = usersInCallMsg;

}

//Sets the messages of all the static html elements
let setMessages = () => {
    let header = document.getElementById("title");
    header.innerHTML = title;

    let instructionsTitle = document.getElementById("instruction-msg");
    instructionsTitle.innerHTML = instructionsMsg;

    let instructionsStep1 = document.getElementById("step1-msg");
    instructionsStep1.innerHTML = instruction_step1;

    let instructionsStep2 = document.getElementById("step2-msg");
    instructionsStep2.innerHTML = instruction_step2;

    let instructionsStep3 = document.getElementById("step3-msg");
    instructionsStep3.innerHTML = instruction_step3;

    let cameraMsg = document.getElementById("camera-label");
    cameraMsg.innerHTML = cameraLabel;

    let joinButton = document.getElementById("join-btn");
    joinButton.innerHTML = joinBtnMsg;
}
setMessages();
