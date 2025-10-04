generateButton = document.querySelector(".generate-color");


const colorBoxes = document.querySelectorAll(".color");
const hexValues = document.querySelectorAll(".hex-value");
const colorBox = document.querySelectorAll(".copy-icon")

function colorGenerator(){
    const AllowedNumbers = "123456789ABCDEF";
    colorString ="#"
    for(let i= 0; i<6;i++){
       let randomIdx = Math.floor(Math.random() * AllowedNumbers.length);
       colorString+=AllowedNumbers[randomIdx]
    }
    return colorString 
}

generateButton.addEventListener("click", () => {
    for(let i = 0 ; i < colorBoxes.length ; i++){
        let randomColor = colorGenerator();
        colorBoxes[i].style.backgroundColor = randomColor;
        hexValues[i].textContent = randomColor;
    }
});

colorBox.forEach((icon, index)=>{
    icon.addEventListener("click", ()=>{
    let colorCode = hexValues[index].textContent;
    navigator.clipboard.writeText(colorCode).then(() => {
                icon.classList.add("copied");
                icon.style.color = "green"; 
                setTimeout(() => {
                    icon.style.color = ""; 
                }, 1000);
            })
            .catch(err => console.log("Failed to copy: ", err));
});
});

