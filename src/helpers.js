
export function stripNonDigits(text) {
    return text.replace(/\D/g, "");
}

let animationOptions = {
    fade: {
        timeout: 500,
        classNames: "fade",
    },
    slideUp: {
        timeout: 350,
        classNames: "slide-up",
    },
    pop: {
        timeout: 250,
        classNames: "pop"
    }
};

export {animationOptions};



