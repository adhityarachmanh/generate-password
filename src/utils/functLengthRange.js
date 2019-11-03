export function funcLengthRange() {
    //var
    const sliderProps = {
        fill: "#ff206a",
        background: "rgba(255, 255, 255, 0.214)",
    };
    const slider = document.querySelector(".range__slider");

    //fungsi 
    slider.querySelector("input").addEventListener("input", event => {
        applyFill(event.target);
    });

    applyFill(slider.querySelector("input"));
    function applyFill(slider) {
        const percentage = (100 * (slider.value - slider.min)) / (slider.max - slider.min);
        const bg = `linear-gradient(90deg, ${sliderProps.fill} ${percentage}%, ${sliderProps.background} ${percentage +
            0.1}%)`;
        slider.style.background = bg;
     
    }
}