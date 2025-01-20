// Function to handle mouseover event
function upDate(previewPic) {
    console.log("Mouse over image:", previewPic.src, previewPic.alt);
  
    const imageDiv = document.getElementById("image");
  
    // Update the text of the element with id "image"
    imageDiv.innerHTML = previewPic.alt;
  
    // Update the background image and ensure it fits the box
    imageDiv.style.backgroundImage = `url('${previewPic.src}')`;
    imageDiv.style.backgroundSize = "cover"; // Ensure the image covers the entire box
    imageDiv.style.backgroundPosition = "center"; // Center the image
    imageDiv.style.backgroundRepeat = "no-repeat"; // Prevent image repetition
  }
  
  // Function to handle mouseout event
  function undo() {
    console.log("Mouse out of image");
  
    const imageDiv = document.getElementById("image");
  
    // Restore the original text
    imageDiv.innerHTML = "Hover over an image below to display here.";
  
    // Clear the background image
    imageDiv.style.backgroundImage = "";
  }
  