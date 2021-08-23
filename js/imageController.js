let currentImageIndex = 0

function nextImage() {

    let images = document.querySelectorAll("#slider img")
    console.log(images)
   
    images[currentImageIndex]
        .classList.remove("selected")

    currentImageIndex++

    if(currentImageIndex >= images.length)
        currentImageIndex = 0

    images[currentImageIndex]
        .classList.add("selected")
}

function start() {
    setInterval(() => {
        // troca de image
        nextImage()
    }, 3500)
}

window.addEventListener("load", start)