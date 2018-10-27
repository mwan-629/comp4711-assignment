let onJoinChatClick = () => {
    let element = document.getElementById("joinChatRow");
    joinChat();
    element.parentNode.removeChild(element);

}