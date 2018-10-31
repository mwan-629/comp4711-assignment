const globalRoom = "T-+K*iQsGia%ej@S";
const localImageEl = $('#local-image');
const localVideoEl = $('#local-video');
const remoteVideosEl = $('#remote-videos');
let remoteVideosCount = 0;
let displayName;
let sessionId;

//Gets the remote video count
let getRemoteVideoCount = () => {
    return remoteVideosCount;
}

//Increments the remote video count
let incrementRemoteVideoCount = () => {
    remoteVideosCount++;
}

//Decrements the remote video count
let decrementRemoteVideoCount = () => {
    remoteVideosCount--;
}

//Sets Display Name
let setDisplayName = (name) => {
    displayName = name;
} 

//Gets display name
let getDisplayName = () => {
    return displayName;
} 

//sets session id of your video
let setSessionId = (id) => {
    sessionId = id;
} 

//gets session id of your video
let getSessionId = () => {
    return sessionId;
} 