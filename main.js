let bodyElement = document.querySelector("body")
let mainElement = document.createElement("main")
let divElement = document.createElement("div")
let image = document.createElement('img')
image.src = "face-up.png"
let image2 = document.createElement("img")
image2.src = "face-down.jpg"

bodyElement.append(mainElement)
mainElement.append(divElement)


let coin = {
    state: 0,
    flip: function() {
        for (flipIndex = 0; flipIndex < 20; flipIndex += 1) {
            if (flipIndex === 0) {
                this.state = (Math.floor(Math.random() * 2)); 
            } else {
                this.state += [Math.floor(Math.random() * 2)];
            }
        }
    },
    toString: function() {
        let stateArray = this.state.split("") 
        for (toStringIndex = 0; toStringIndex < 20; toStringIndex += 1) {
            if (stateArray[toStringIndex] === "1" ) {
                stateArray[toStringIndex] = "tails"
            } if (stateArray[toStringIndex] === "0") {
                stateArray[toStringIndex] = "heads"
            }
        }
        return mainElement.append(stateArray)
},
toHTML: function() {
    let stateArray = this.state.split("") 
    for (toHTMLIndex = 0; toHTMLIndex < 20; toHTMLIndex += 1) {
        if (stateArray[toHTMLIndex] === "1") {
            
            document.body.append(image2)
        } if (stateArray[toHTMLIndex] === "0") {
            
            document.body.append(image)
        }
    }
    return this.state.toHTML
}

};

coin.flip()
coin.toString()
coin.toHTML()

console.log(coin.state)