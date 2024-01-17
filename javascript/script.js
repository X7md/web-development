const imagePreview = document.getElementById("image-view");
const images = document.querySelectorAll("img");
images.forEach(element => {
    element.addEventListener("mouseover", (event)=>{
        imagePreview.src = event.target.src
    })
});