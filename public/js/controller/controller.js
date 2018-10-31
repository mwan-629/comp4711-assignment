const webrtc = new SimpleWebRTC({
    localVideoEl: 'local-video',
    remoteVideosEl: 'remote-videos',
    autoRequestMedia: true,
    enableDataChannels: true
  });
  
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
    webrtc.sendToAll('chat', {name:displayName});
  });


webrtc.on('videoRemoved', (video, peer) => {
  remoteVideosCount -= 1;
  if (getRemoteVideoCount() === 1) {
    showOnlyPersonMessage();
  }
});

// webrtc.on('channelMessage', (channel, label, data) => {
//   console.log("some message sent")
//   if (label === "names") {
//     console.log(data.payload.name)
//   }
// })

webrtc.connection.on('message', (data) => {
  console.log("message received")
  if (data.type === 'chat') {
    const message = data.payload;
    console.log("user named: " + data.payload.name + " has joined");
    addToNameList(data.payload.name);
  }
});


let joinChat = () => {
    webrtc.joinRoom(globalRoom);
    console.log("joined " +globalRoom);
    let element = document.getElementById("display-name");
    console.log(element.value)
    incrementRemoteVideoCount();
    if (getRemoteVideoCount() === 1) {
      showOnlyPersonMessage();
    } else {
      hideOnlyPersonMessage();
    }
}

let sendDisplayName = () => {
  let element = document.getElementById("display-name");
  //set display name locally
  setLocalDisplayName(element.value);
  setDisplayName(element.value);

}