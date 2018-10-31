  //Define the webRTC object
  const webrtc = new SimpleWebRTC({
      localVideoEl: 'local-video',
      remoteVideosEl: 'remote-videos',
      autoRequestMedia: true
    });

  //Event listener when the Connection is Ready
  webrtc.on('connectionReady', (sessionId) => {
    setSessionId(sessionId);
  })

  //Event listener when the Local Stream is Connected
  webrtc.on('localStream', () => {
    localImageEl.hide();
    localVideoEl.show();
  });

  
  //Event listener when the video is added
  webrtc.on('videoAdded', (video, peer) => {
    incrementRemoteVideoCount();
    if (getRemoteVideoCount() === 1) {
      showOnlyPersonMessage();
    } else {
      hideOnlyPersonMessage();
    }
    let displayName = getDisplayName();
    let id = getSessionId();
    webrtc.sendToAll('name', {name: displayName, sessionId:id});
    
  });

//Event listener when the video is removed
webrtc.on('videoRemoved', (video, peer) => {
  remoteVideosCount -= 1;
  removeNameFromList(peer.id);
  if (getRemoteVideoCount() === 1) {
    showOnlyPersonMessage();
  }
});

//Event listener when a message is received
webrtc.connection.on('message', (data) => {
  if (data.type === 'name') {
    const message = data.payload;
    addToNameList(data.payload.name, data.payload.sessionId);
  }
});

//Joins the room, and displays the list of users
let joinChat = () => {
    webrtc.joinRoom(globalRoom);
    let element = document.getElementById("display-name");
    incrementRemoteVideoCount();
    if (getRemoteVideoCount() === 1) {
      showOnlyPersonMessage();
    } else {
      hideOnlyPersonMessage();
    }
    displayUserList();
    hideInstructions();
}

//Saves the display name locally
let saveDisplayName = () => {
  let element = document.getElementById("display-name");
  setDisplayName(element.value);
  //set display name locally
  setLocalDisplayName(element.value);
}