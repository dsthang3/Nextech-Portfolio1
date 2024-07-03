// On Page Buttons
let backButton = document.querySelector(".backButton");
backButton.addEventListener("click", function () {
    window.location = "index.html";
});

//Contact Button... I want this to send me to the right? Too extra? yeaaah just another page, yup
let contactButton = document.querySelector(".contactButton");
contactButton.addEventListener("click", function () {
    window.location = "contact.html";
});

let sourcesButton = document.querySelector(".sourcesButton");
sourcesButton.addEventListener("click", function () {
    window.location = "sources.html";
});


//
// 
//




let eBookButton = document.querySelector(".eBookButton");
let eBookBook = document.querySelector(".eBookContainer");
let eBookCloseButton = document.querySelector(".eBookCloseButton");

// opens and adjusts the book perfecto :D
eBookButton.addEventListener("click", function () {
    console.log('eBook button pressed');
    eBookText.style.opacity = "0";
    eBookBook.style.display = "block";
    eBookBook.style.position = "fixed";
    eBookBook.style.left = "50%";
    eBookBook.style.top = "900px";
    eBookBook.style.scale = "1.45";
    eBookBook.style.zIndex = '1000';

    //animation of getting the text there now
    setTimeout(eBookTextAppear, 3000);
});

// closes the book
eBookCloseButton.addEventListener("click", function () {
    eBookBook.style.display = "none";

});

//function animation of getting the text there now
let eBookText = document.querySelector(".eBookText");

function eBookTextAppear() {
    eBookText.style.opacity = "1";
}

// 
// 
// 

let p2Button = document.querySelector(".p2Button");
let p2Book = document.querySelector(".p2Container");
let p2CloseButton = document.querySelector(".p2CloseButton");

// opens and adjusts the book perfecto :D
p2Button.addEventListener("click", function () {
    console.log('p2 button pressed');
    p2Text.style.opacity = "0";
    p2Book.style.display = "block";
    p2Book.style.position = "fixed";
    p2Book.style.left = "50%";
    p2Book.style.top = "900px";
    p2Book.style.scale = "1.45";
    p2Book.style.zIndex = '1000';
    

    //animation of getting the text there now
    setTimeout(p2TextAppear, 3000);
});

// closes the book
p2CloseButton.addEventListener("click", function () {
    p2Book.style.display = "none";

});

//function animation of getting the text there now
let p2Text = document.querySelector(".p2Text");

function p2TextAppear() {
    p2Text.style.opacity = "1";
    console.log('p2 opacity made to 1');
}

// 
// 
// 

let p3Button = document.querySelector(".p3Button");
let p3Book = document.querySelector(".p3Container");
let p3CloseButton = document.querySelector(".p3CloseButton");

// opens and adjusts the book perfecto :D
p3Button.addEventListener("click", function () {
    console.log('p3 button pressed');
    p3Text.style.opacity = "0";
    p3Book.style.display = "block";
    p3Book.style.position = "fixed";
    p3Book.style.left = "50%";
    p3Book.style.top = "900px";
    p3Book.style.scale = "1.45";
    p3Book.style.zIndex = '1000';


    //animation of getting the text there now
    setTimeout(p3TextAppear, 3000);
});

// closes the book
p3CloseButton.addEventListener("click", function () {
    p3Book.style.display = "none";

});

//function animation of getting the text there now
let p3Text = document.querySelector(".p3Text");

function p3TextAppear() {
    p3Text.style.opacity = "1";
    console.log('p3 opacity made to 1');
}
//
//
//
//

let p10Button = document.querySelector(".p10Button");
let p10Book = document.querySelector(".p10Container");
let p10CloseButton = document.querySelector(".p10CloseButton");

// opens and adjusts the book perfecto :D
p10Button.addEventListener("click", function () {
    console.log('p10 button pressed');
    p10Text.style.opacity = "0";
    p10Book.style.display = "block";
    p10Book.style.position = "fixed";
    p10Book.style.left = "50%";
    p10Book.style.top = "900px";
    p10Book.style.scale = "1.45";
    p10Book.style.zIndex = '1000';


    //animation of getting the text there now
    setTimeout(p10TextAppear, 3000);
});

// closes the book
p10CloseButton.addEventListener("click", function () {
    p10Book.style.display = "none";

});

//function animation of getting the text there now
let p10Text = document.querySelector(".p10Text");

function p10TextAppear() {
    p10Text.style.opacity = "1";
    console.log('p10 opacity made to 1');
}
//
//
//
//

let p13Button = document.querySelector(".p13Button");
let p13Book = document.querySelector(".p13Container");
let p13CloseButton = document.querySelector(".p13CloseButton");

// opens and adjusts the book perfecto :D
p13Button.addEventListener("click", function () {
    console.log('p13 button pressed');
    p13Text.style.opacity = "0";
    p13Book.style.display = "block";
    p13Book.style.position = "fixed";
    p13Book.style.left = "50%";
    p13Book.style.top = "900px";
    p13Book.style.scale = "1.45";
    p13Book.style.zIndex = '1000';


    //animation of getting the text there now
    setTimeout(p13TextAppear, 3000);
});

// closes the book
p13CloseButton.addEventListener("click", function () {
    p13Book.style.display = "none";

});

//function animation of getting the text there now
let p13Text = document.querySelector(".p13Text");

function p13TextAppear() {
    p13Text.style.opacity = "1";
    console.log('p13 opacity made to 1');
}
//
//
//
//

let p14Button = document.querySelector(".p14Button");
let p14Book = document.querySelector(".p14Container");
let p14CloseButton = document.querySelector(".p14CloseButton");

// opens and adjusts the book perfecto :D
p14Button.addEventListener("click", function () {
    console.log('p14 button pressed');
    p14Text.style.opacity = "0";
    p14Book.style.display = "block";
    p14Book.style.position = "fixed";
    p14Book.style.left = "50%";
    p14Book.style.top = "900px";
    p14Book.style.scale = "1.45";
    p14Book.style.zIndex = '1000';


    //animation of getting the text there now
    setTimeout(p14TextAppear, 3000);
});

// closes the book
p14CloseButton.addEventListener("click", function () {
    p14Book.style.display = "none";

});

//function animation of getting the text there now
let p14Text = document.querySelector(".p14Text");

function p14TextAppear() {
    p14Text.style.opacity = "1";
    console.log('p14 opacity made to 1');
}