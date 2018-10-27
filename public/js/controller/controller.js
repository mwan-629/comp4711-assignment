let joinChat = () => {
    webrtc.joinRoom(globalRoom);
    console.log("joined " +globalRoom);
}