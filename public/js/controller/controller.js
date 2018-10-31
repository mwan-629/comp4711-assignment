const webrtc = new SimpleWebRTC({
    localVideoEl: 'local-video',
    remoteVideosEl: 'remote-videos',
    autoRequestMedia: true,
    enableDataChannels: true
  });
  webrtc.on('connectionReady', (sessionId) => {
    setSessionId(sessionId);
  })


  webrtc.on('localStream', () => {
    localImageEl.hide();
    localVideoEl.show();
  });

  

webrtc.on('videoAdded', (video, peer) => {
    incrementRemoteVideoCount();
    if (getRemoteVideoCount() === 1) {
      showOnlyPersonMessage();
    } else {
      hideOnlyPersonMessage();
    }
    let displayName = getDisplayName();
    let id = getSessionId();
    webrtc.sendToAll('name', {name: displayName, sessionId:id})
    
  });


webrtc.on('videoRemoved', (video, peer) => {
  remoteVideosCount -= 1;
  removeNameFromList(peer.id);
  if (getRemoteVideoCount() === 1) {
    showOnlyPersonMessage();
  }
});

webrtc.connection.on('message', (data) => {
  if (data.type === 'name') {
    const message = data.payload;
    addToNameList(data.payload.name, data.payload.sessionId);
  }
});


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
}

let saveDisplayName = () => {
  let element = document.getElementById("display-name");
  setDisplayName(element.value);
  //set display name locally
  setLocalDisplayName(element.value);
}