document.addEventListener("DOMContentLoaded", (event) => {
    let date = new Date();
    document.getElementsByTagName("footer")[0].innerHTML = date.getFullYear() == 2024 ? "2024" : `2024 - ${date.getFullYear()}`;
});