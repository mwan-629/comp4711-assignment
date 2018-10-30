let onJoinChatClick = () => {
    let element = document.getElementById("join-chat-row");
    joinChat();
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