const globalRoom = "globalRoom";
const localImageEl = $('#local-image');
const localVideoEl = $('#local-video');
const remoteVideosEl = $('#remote-videos');
let remoteVideosCount = 0;

let getRemoteVideoCount = () => {
    return remoteVideosCount;
}

let incrementRemoteVideoCount = () => {
    remoteVideosCount++;
}

let decrementRemoteVideoCount = () => {
    remoteVideosCount--;
}