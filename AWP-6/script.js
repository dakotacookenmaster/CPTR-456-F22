// handleClick(event)

// function handleClick(event) {

// }

// const handleClick2 = function(event) {

// }

// const handleClick3 = event => {

// }

// const handleClick4 = (a, b) => {

// }

const button = document.getElementById("convertButton")
button.addEventListener("click", (event) => {
    const { target } = event
    const circles = document.querySelectorAll(".round")
    if(target.textContent === "Hide Circles") {
        target.textContent = "Show Circles"
        circles.forEach(circle => {
            circle.style.display = "none"
        })
    } else {
        target.textContent = "Hide Circles"
        circles.forEach(circle => {
            circle.style.display = "initial"
            circle.innerHTML = "<p>Hey there!</p>"
        })
    }

    // circles.forEach(circle => {
    //     circle.classList.add("growAndShrink")
    // })

    // setTimeout(() => {
    //     console.log("Fired!")
    //     circles.forEach(circle => {
    //         circle.classList.remove("growAndShrink")
    //     })
    // }, 1000)
})