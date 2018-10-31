let onJoinChatClick = () => {
    let element = document.getElementById("join-chat-row");
    joinChat();
    sendDisplayName();
    element.parentNode.removeChild(element);

}

let displayNewRemoteVideo = (video,peer) => {
    const id = webrtc.getDomId(peer);
    console.log(id)
    // const html = 
    //             `<div class="col remote-video">
    //                 <video autoplay="" id=`+id+`></video>
    //             </div>`;
    // remoteVideosEl.append(html);
    console.log("appending")
    // $(`#${id}`).html(video);
    // $(`#${id} video`).addClass('ui image medium'); // Make video element responsive
}

let setLocalDisplayName = (displayName) => {
    let element = document.getElementById("local-display-name");
    element.innerHTML = displayName;
}

let showOnlyPersonMessage = () => {
    let element = document.getElementById("onlyPersonMsg");
    element.style.display = "block";
    element.innerHTML = onlyPersonMessage;
    
}

let hideOnlyPersonMessage = () => {
    let element = document.getElementById("onlyPersonMsg");
    element.style.display= "none";
}

let addToNameList = (name) => {
    let element = document.getElementById("name-list");
    let h4 = document.createElement('h4');
    h4.setAttribute("id", name);
    h4.appendChild(document.createTextNode(name));
    element.appendChild(h4);
}