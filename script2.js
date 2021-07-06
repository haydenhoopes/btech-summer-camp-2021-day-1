//? Change Elements
// Use javascript to grab the hero h1
// Change it to make it "this is my h1 now" instead
var heroImage = document.querySelector(".hero-image h1");
heroImage.innerHTML = "this is my h1 now";

//? Change Classes
// Use javascript to grab the hero h1
// add the "other-h1-class" class to the hero h1, making the text red (style.css line 27)
heroImage.classList += "other-h1-class";

//? Change Attributes
// Use javascript to grab the footer links
// Change all the hrefs so they point to google.com
var links = document.querySelectorAll("div a");
for (a of links) {
    a.href = 'https://www.google.com';
}

//? Add DOM Elements
// Create an image tag linked to the file "bug.jpg" with 
// Add it to each of the page items in their "item-img" tags
for (i of document.querySelectorAll(".item-img")) {
    var newImg = document.createElement("img");
    newImg.src = "./bug.jpg";
    i.appendChild(newImg)
}

//? Apply inline style to an element
// Grab all the page-items and use inline styles to change their background color to yellow
for (pi of document.querySelectorAll(".page-item")) {
    pi.style.backgroundColor = "yellow";
}



//# Create some constants for the hero h1 and the div that would have the "hero-image" class
var h = document.querySelector(".hero");
var heroIm = document.querySelector(".hero-image");

//# Add a couple click event listeners to the heroH1
// One click event listener should call a function called toggleHeroImage (to be made shortly)
// The other click event listener should call another function called toggleH1, giving it a string as a parameter
heroImage.addEventListener("click", function(){toggleHeroImage()});
heroImage.addEventListener("click", function(){toggleH1("This is a string input for the toggleH1() function")});


//# create a function called toggleHeroImage 
// It uses the heroImage constant to toggle the hero image
// It does this by toggling the "hero-image" class on the div around the H1
// As an extra challenge, try to not leave an empty "class" attribute as part of your toggling.
function toggleHeroImage() {
    heroImage.parentElement.classList.toggle("hero-image");
}

//# Create a function called toggleH1 
// It uses the heroH1 constant to toggle the H1's text and style.
// As an extra challenge, try to not leave an empty "style" attribute as part of your toggling.
function toggleH1(text) {
    if (heroImage.style.color == "blue") {
        heroImage.style.color = "";
        heroImage.innerHTML = 'this is my h1 now';
    } else {
        heroImage.style.color = "blue";
        heroImage.innerHTML = text;
    }
}