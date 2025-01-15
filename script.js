document.addEventListener("DOMContentLoaded",()=>{
    const yesButton = document.querySelector('#yes-button');
    yesButton.addEventListener('click',()=>{
        window.location.href = "./end.html";
    });

    const noButton = document.getElementById("no-button");
    const buttonDiv = document.getElementById("button-div");
    
    noButton.addEventListener("mouseenter", () => {
        const maxWidth = buttonDiv.offsetWidth - noButton.offsetWidth;
        const maxHeight = buttonDiv.offsetHeight - noButton.offsetHeight;
    
        const randomX = Math.floor(Math.random() * maxWidth);
        const randomY = Math.floor(Math.random() * maxHeight);
    
        noButton.style.position = "absolute"; // Ensure the button moves within the div
        noButton.style.left = randomX + "px";
        noButton.style.top = randomY + "px";
    });
    
});