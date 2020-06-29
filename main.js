let bodyElement = document.querySelector("body")
let mainElement = document.createElement("main")
let divElement = document.createElement("div")
let image = document.createElement('img')
image.src = "face-up.png"
let image2 = document.createElement("img")
image2.src = "face-down.jpg"
let newDiv = document.createElement("div")

bodyElement.append(mainElement)
mainElement.append(divElement)
numberOfFlips = 20

let coin = {
    state: 0,
    flip: function() {
        for (flipIndex = 0; flipIndex < numberOfFlips; flipIndex += 1) {
            if (flipIndex === 0) {
                this.state = (Math.floor(Math.random() * 2)); 
            } else {
                this.state += [Math.floor(Math.random() * 2)];
            }
        }
    },
    toString: function() {
        let stateArray = this.state.split("") 
        for (toStringIndex = 0; toStringIndex < numberOfFlips; toStringIndex += 1) {
            if (stateArray[toStringIndex] === "1" ) {
                stateArray[toStringIndex] = "tails"
            } if (stateArray[toStringIndex] === "0") {
                stateArray[toStringIndex] = "heads"
            }
        }
},
toHTML: function() {
    let stateArray = this.state.split("") 
    mainElement.append(divElement)
    for (toHTMLIndex = 0; toHTMLIndex < numberOfFlips; toHTMLIndex += 1) {

        if (stateArray[toHTMLIndex] === "1") {
            stateArray[toHTMLIndex] = image

        } if (stateArray[toHTMLIndex] === "0") {
            stateArray[toHTMLIndex] = image2
        }
    }
},
display20Flips: function () {
    let displayFlips = this.state.split("") 
    for (displayFlipsIndex = 0; displayFlipsIndex < numberOfFlips; displayFlipsIndex += 1) {
        if (displayFlips[displayFlipsIndex] === "1" ) {
            displayFlips[displayFlipsIndex] = "tails"
        } if (displayFlips[displayFlipsIndex] === "0") {
            displayFlips[displayFlipsIndex] = "heads"
        }
    }
    return mainElement.append(displayFlips)
},
display20Images: function () {
    let stateArray = this.state.split("") 
    mainElement.append(divElement)
    for (toHTMLIndex = 0; toHTMLIndex < numberOfFlips; toHTMLIndex += 1) {

        if (stateArray[toHTMLIndex] === "1") {
            document.querySelector("div").innerHTML += " <img src='face-up.png'> "

        } if (stateArray[toHTMLIndex] === "0") {
            document.querySelector("div").innerHTML += " <img src='face-down.jpg'> "
        }
    }
}
};

coin.flip()
coin.toString()
coin.toHTML()
coin.display20Flips()
coin.display20Images()


console.log(coin.state)