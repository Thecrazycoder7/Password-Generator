const inputSlider = document.getElementById('inputSlider');
const sliderValue = document.getElementById('sliderValue');
const copyPass = document.getElementById('copyPass');
const passBox = document.getElementById('passBox');
const lowercaseElement = document.getElementById('lowercaseEle');
const uppercaseElement = document.getElementById('uppercaseEle');
const numberElement = document.getElementById('numberEle');
const symbolsElement = document.getElementById('symbolsEle');
const btn = document.getElementById('btn');

// Showing input slider value
sliderValue.textContent = inputSlider.value;
inputSlider.addEventListener('input', () =>{
    sliderValue.textContent = inputSlider.value;
});

btn.addEventListener('click', () =>{
    passBox.value = generatePassword();
})

const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*_./";

// Function to generate password
function generatePassword(){
    let genPassword = "";
    let allChars = "";
    
    allChars += lowercaseElement.checked ? lowercase : "";
    allChars += uppercaseElement.checked ? uppercase : "";
    allChars += numberElement.checked ? numbers: "";
    allChars += symbolsElement.checked ? symbols : "";
    
    
    if( allChars == "" || allChars.length == 0){
        return genPassword;
    }
    
    let i = 1;
    while(i<=inputSlider.value){
        genPassword += allChars.charAt(Math.floor(Math.random() * allChars.length));
        i++;
    }

    return genPassword;
}


const copyPassword = () => {
    navigator.clipboard.writeText(copyPass.value);
    copyPass.innerText = "check";

    setTimeout(() => {
        copyPass.innerText = "👍";
    }, 1500);
}

copyPass.addEventListener("click", copyPassword)