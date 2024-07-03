console.log("linked")
let textContainer = document.querySelector(".text");
let bookAfter = document.querySelector(".book");
let bookshelfButton = document.querySelector("#bookshelfButton")

textContainer.style.display = "none";

function appear() {
    console.log("after 3 seconds this should appear in console.");
    textContainer.style.display = "block";
    bookshelfButton.classList.add("bookshelfButtonAfter");
    // Allow the browser to render the display change before starting the transition
    setTimeout(() => {
        textContainer.classList.add("visible");
    }, 100); // Small delay to ensure display change is rendered

    bookshelfButton.addEventListener("click", () => {
        window.location = "bookshelf.html";
    });
}

setTimeout(appear, 3000);




