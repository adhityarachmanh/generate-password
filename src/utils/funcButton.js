export function funcButton(randomFunc) {
    
    const uppercaseEl = document.getElementById("uppercase");
    const lowercaseEl = document.getElementById("lowercase");
    const numberEl = document.getElementById("number");
    const symbolEl = document.getElementById("symbol");
    const resultEl = document.getElementById("result");
    const generateBtn = document.getElementById("generate");
    const copyInfo = document.querySelector(".result__info.right");
    const copiedInfo = document.querySelector(".result__info.left");

    const lengthEl = document.getElementById("slider");
    generateBtn.addEventListener("click", () => {
        const length = +lengthEl.value;
        const hasLower = lowercaseEl.checked;
        const hasUpper = uppercaseEl.checked;
        const hasNumber = numberEl.checked;
        const hasSymbol = symbolEl.checked;
        resultEl.innerText = generatePassword(length, hasLower, hasUpper, hasNumber, hasSymbol);
        copyInfo.style.transform = "translateY(0%)";
        copyInfo.style.opacity = "0.75";
        copiedInfo.style.transform = "translateY(200%)";
        copiedInfo.style.opacity = "0";
    });
    function generatePassword(length, lower, upper, number, symbol) {
        let generatedPassword = "";
        const typesCount = lower + upper + number + symbol;
        const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(item => Object.values(item)[0]);
        if (typesCount === 0) {
            return "";
        }
        for (let i = 0; i < length; i++) {
            typesArr.forEach(type => {
                const funcName = Object.keys(type)[0];
                generatedPassword += randomFunc[funcName]();
            });
        }
        return generatedPassword.slice(0, length);
    }
}