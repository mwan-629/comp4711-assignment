// create our WebRTC connection
const webrtc = new SimpleWebRTC({
    // the id/element dom element that will hold "our" video
    localVideoEl: 'local-video',
    // the id/element dom element that will hold remote videos
    remoteVideosEl: 'remote-videos',
    // immediately ask for camera access
    autoRequestMedia: true,
  });
  
  // We got access to local camera
  webrtc.on('localStream', () => {
    localImageEl.hide();
    localVideoEl.show();
  });

  
// Remote video was added
webrtc.on('videoAdded', (video, peer) => {
    // displayNewRemoteVideo(video,peer);
    incrementRemoteVideoCount();
    if (getRemoteVideoCount() === 1) {
      showOnlyPersonMessage();
    } else {
      hideOnlyPersonMessage();
    }
  });

// Remote video was added
webrtc.on('videoRemoved', (video, peer) => {
  // displayNewRemoteVideo(video,peer);
  remoteVideosCount -= 1;
  if (getRemoteVideoCount() === 1) {
    showOnlyPersonMessage();
  }
});

let joinChat = () => {
    webrtc.joinRoom(globalRoom);
    console.log("joined " +globalRoom);
    incrementRemoteVideoCount();
    if (getRemoteVideoCount() === 1) {
      showOnlyPersonMessage();
    } else {
      hideOnlyPersonMessage();
    }
}