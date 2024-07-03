console.log('linked');

let aboutMeButton = document.querySelector(".aboutMeButton");
aboutMeButton.addEventListener("click", function () {
    console.log("aboutMe Clicked");
    window.location.href = "bookshelf.html#aboutMeTakeHere"
});

let projectsButton = document.querySelector(".projectsButton");
projectsButton.addEventListener("click", function () {
    console.log("projets Clicked");
    window.location.href = "bookshelf.html#projectsTakeHere";
});


// On Page Buttons
let backButton = document.querySelector(".backButton");
backButton.addEventListener("click", function () {
    window.location = "index.html";
});

let sourcesButton = document.querySelector(".sourcesButton");
sourcesButton.addEventListener("click", function () {
    window.location = "sources.html";
});
