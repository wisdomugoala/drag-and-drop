let image1 = document.getElementById("image1");
let image2 = document.getElementById("image2");
let image3 = document.getElementById("image3");
let image4 = document.getElementById("image4");
let image5 = document.getElementById("image5");

let workspace = document.getElementById("workspace");
let placeholder = document.getElementById("placeholder");

let selectedImage;
image1.addEventListener("dragstart", function() {
    selectedImage = image1;
    workspace.classList.add("dragging");
});
image1.addEventListener("dragend", function() {
    workspace.classList.remove("dragging");
});

 image2.addEventListener("dragstart", function() {
    selectedImage = image2;
    workspace.classList.add("dragging");
});
image2.addEventListener("dragend", function() {
    workspace.classList.remove("dragging");
});

image3.addEventListener("dragstart", function() {
    selectedImage = image3;
    workspace.classList.add("dragging");
});
image3.addEventListener("dragend", function() {
    workspace.classList.remove("dragging");
});

image4.addEventListener("dragstart", function() {
    selectedImage = image4;
    workspace.classList.add("dragging");
});
image4.addEventListener("dragend", function() {
    workspace.classList.remove("dragging");
});

image5.addEventListener("dragstart", function() {
    selectedImage = image5;
    workspace.classList.add("dragging");
});

image5.addEventListener("dragend", function() {
    workspace.classList.remove("dragging");
});

// ALLOW DROP
workspace.addEventListener("dragover", function(event) {
    event.preventDefault();
});

// WHEN IMAGE IS DROPPED
workspace.addEventListener("drop", function(event) {
    event.preventDefault();
    // Remove the placeholder
    placeholder.style.display = "none";
    // Remove the old image
    let oldImage = document.getElementById("selectedImage");
    if (oldImage) {
        oldImage.remove();
    }
    // Create a new image
    let newImage = document.createElement("img");

    // Give the new image an ID
    newImage.id = "selectedImage";

    // Use the exact image that was dragged
    newImage.src = selectedImage.src;

    // Put the image inside the workspace
    workspace.appendChild(newImage);
});