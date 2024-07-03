let eBookButton = document.querySelector("#eBookButton");

eBookButton.addEventListener("click", () => {
    console.log("eBook clicked");
    bookAppear();
    setTimeout(appear, 3000);
    bookContainer.style.zIndex = 999;
});

let eBookText = document.querySelector(".eBookText");
let bookAfter = document.querySelector(".book");
let bookshelfButton = document.querySelector("#bookshelfButton");
let bookContainer = document.querySelector(".eBookContainer");


eBookText.style.display = "none";
bookContainer.style.display = "none";


function appear() {
    console.log("after 3 seconds this should appear in console.");
    eBookText.style.display = "block";
    // Allow the browser to render the display change before starting the transition
    setTimeout(() => {
        eBookText.classList.add("visible");
    }, 100); // Small delay to ensure display change is rendered

    bookshelfButton.addEventListener("click", () => {
        eBookText.style.display = "none";
        bookContainer.style.display = "none";
    });
}

function bookAppear() {
    bookContainer.style.display = "block";
    console.log("eBook display: block")
}



// 
// 
// 
// 
// 
// 
// 
// 
// 

let project2Button = document.querySelector("#project2Button"); /* yes */

project2Button.addEventListener("click", () => {
    console.log("project2 clicked");
    project2BookAppear();
    setTimeout(project2Appear, 3000);
    project2Container.style.zIndex = 999;

});


let project2Text = document.querySelector(".project2Text");
// let bookAfter = document.querySelector(".book"); //I Dont even use this one
let project2BookshelfButton = document.querySelector("#project2BookshelfButton"); //DOne
let project2Container = document.querySelector(".project2Container"); /* DONE */
let project2ContainerButton = document.querySelector(".project2ContainerButton"); //WTH???


project2Text.style.display = "none"; //DONE
project2Container.style.display = "none"; //DONE


function project2Appear() {
    console.log("after 3 seconds this should appear in console.");
    project2Text.style.display = "block";
    // Allow the browser to render the display change before starting the transition
    setTimeout(() => {
        project2Text.classList.add("visible");
    }, 100); // Small delay to ensure display change is rendered

    project2BookshelfButton.addEventListener("click", () => {
        project2Text.style.display = "none";
        project2Container.style.display = "none";
    });
}

// DONE
function project2BookAppear() {
    project2Container.style.display = "block";
}

project2ContainerButton.addEventListener("click", () => {
    project2BookAppear();
    setTimeout(project2Appear, 3000);
    project2Container.style.zIndex = 999;
});
