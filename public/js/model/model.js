const globalRoom = "globalRoom";
const localImageEl = $('#local-image');
const localVideoEl = $('#local-video');
const remoteVideosEl = $('#remote-videos');
let remoteVideosCount = 0;
let displayName;
let sessionId;

let getRemoteVideoCount = () => {
    return remoteVideosCount;
}

let incrementRemoteVideoCount = () => {
    remoteVideosCount++;
}

let decrementRemoteVideoCount = () => {
    remoteVideosCount--;
}

let setDisplayName = (name) => {
    displayName = name;
} 

let getDisplayName = () => {
    return displayName;
} 

let setSessionId = (id) => {
    sessionId = id;
} 

let getSessionId = () => {
    return sessionId;
} 