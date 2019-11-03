export function funcResult() {
    const resultContainer = document.querySelector(".result");
    const copyBtn = document.getElementById("copy-btn");
    const copyInfo = document.querySelector(".result__info.right");
    const copiedInfo = document.querySelector(".result__info.left");
    let resultContainerBound = {
        left: resultContainer.getBoundingClientRect().left,
        top: resultContainer.getBoundingClientRect().top,
    };

    resultContainer.addEventListener("mousemove", e => {
        copyBtn.style.setProperty("--x", `${e.x - resultContainerBound.left}px`);
        copyBtn.style.setProperty("--y", `${e.y - resultContainerBound.top}px`);
    });
    window.addEventListener("resize", e => {
        resultContainerBound = {
            left: resultContainer.getBoundingClientRect().left,
            top: resultContainer.getBoundingClientRect().top,
        };
    });
    copyBtn.addEventListener("click", e => {
        const resultEl = document.getElementById("result");
        const textarea = document.createElement("textarea");
        const password = resultEl.innerText;
        if (!password || password == "CLICK GENERATE") {
            return;
        }
        textarea.value = password;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        textarea.remove();

        copyInfo.style.transform = "translateY(200%)";
        copyInfo.style.opacity = "0";
        copiedInfo.style.transform = "translateY(0%)";
        copiedInfo.style.opacity = "0.75";
    })
}