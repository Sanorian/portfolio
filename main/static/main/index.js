document.addEventListener("DOMContentLoaded", (event) => {
    let date = new Date();
    document.getElementsByTagName("footer")[0].innerHTML = date.getFullYear() == 2024 ? "2024" : `2024 - ${date.getFullYear()}`;
});
let streamSpaceImageArray = ["streamspace1.png", "streamspace2.png", "streamspace3.png"];
let squad47ImageArray = ["squad47_1.png", "squad47_2.png"];
let codexchangerImageArray = ["codexchanger1.png", "codexchanger2.png"];

function nextStreamSpaceImage() {
    let currentSrc = document.getElementById("streamSpaceImage").src;
    let currentImageName = currentSrc.substring(currentSrc.lastIndexOf("/") + 1);
    let currentIndex = streamSpaceImageArray.indexOf(currentImageName);
    let nextIndex = (currentIndex + 1) % streamSpaceImageArray.length;
    let newImageName = streamSpaceImageArray[nextIndex];
    document.getElementById("streamSpaceImage").src = currentSrc.substring(0, currentSrc.lastIndexOf("/") + 1) + newImageName;
}

function backStreamSpaceImage() {
    let currentSrc = document.getElementById("streamSpaceImage").src;
    let currentImageName = currentSrc.substring(currentSrc.lastIndexOf("/") + 1);
    let currentIndex = streamSpaceImageArray.indexOf(currentImageName);
    let prevIndex = (currentIndex - 1 + streamSpaceImageArray.length) % streamSpaceImageArray.length;
    let newImageName = streamSpaceImageArray[prevIndex];
    document.getElementById("streamSpaceImage").src = currentSrc.substring(0, currentSrc.lastIndexOf("/") + 1) + newImageName;
}

function nextSquad47Image() {
    let currentSrc = document.getElementById("squad47Image").src;
    let currentImageName = currentSrc.substring(currentSrc.lastIndexOf("/") + 1);
    let currentIndex = squad47ImageArray.indexOf(currentImageName);
    let nextIndex = (currentIndex + 1) % squad47ImageArray.length;
    let newImageName = squad47ImageArray[nextIndex];
    document.getElementById("squad47Image").src = currentSrc.substring(0, currentSrc.lastIndexOf("/") + 1) + newImageName;
}

function backSquad47Image() {
    let currentSrc = document.getElementById("squad47Image").src;
    let currentImageName = currentSrc.substring(currentSrc.lastIndexOf("/") + 1);
    let currentIndex = squad47ImageArray.indexOf(currentImageName);
    let prevIndex = (currentIndex - 1 + squad47ImageArray.length) % squad47ImageArray.length;
    let newImageName = squad47ImageArray[prevIndex];
    document.getElementById("squad47Image").src = currentSrc.substring(0, currentSrc.lastIndexOf("/") + 1) + newImageName;
}

function nextCodexchangerImage() {
    let currentSrc = document.getElementById("codexchangerImage").src;
    let currentImageName = currentSrc.substring(currentSrc.lastIndexOf("/") + 1);
    let currentIndex = codexchangerImageArray.indexOf(currentImageName);
    let nextIndex = (currentIndex + 1) % codexchangerImageArray.length;
    let newImageName = codexchangerImageArray[nextIndex];
    document.getElementById("codexchangerImage").src = currentSrc.substring(0, currentSrc.lastIndexOf("/") + 1) + newImageName;
}

function backCodexchangerImage() {
    let currentSrc = document.getElementById("codexchangerImage").src;
    let currentImageName = currentSrc.substring(currentSrc.lastIndexOf("/") + 1);
    let currentIndex = codexchangerImageArray.indexOf(currentImageName);
    let prevIndex = (currentIndex - 1 + codexchangerImageArray.length) % codexchangerImageArray.length;
    let newImageName = codexchangerImageArray[prevIndex];
    document.getElementById("codexchangerImage").src = currentSrc.substring(0, currentSrc.lastIndexOf("/") + 1) + newImageName;
}
