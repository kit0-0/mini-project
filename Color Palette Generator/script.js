const refreshBtn = document.querySelector('.refresh-btn')
const container = document.querySelector('.container')


const maxPalette = 32


const generatePalette = () => {
    container.innerHTML = ""   //clear the container

    for (let i = 0; i < maxPalette; i++) {

        //generate a random hex color code
        let randomHex = Math.floor(Math.random() * 0xffffff).toString(16)
        randomHex = `#${randomHex.padStart(6, "0")}`

        //create a new 'li' element and inserting
        const color = document.createElement('li')
        color.classList.add('color')
        color.innerHTML = `<div class="rect-box" style="background:${randomHex}"></div>
    <span class="hex-value">${randomHex}</span>`

        container.appendChild(color)
    }
}

refreshBtn.addEventListener('click', generatePalette)