import Typed from "typed.js";

window.addEventListener("load", () => {
    const main = document.getElementById("main");

    setTimeout(() => {
        spl?.classList.add("showb");
        main?.classList.add("hide");

        setTimeout(() => {
            spl?.classList.remove("showb");
            main?.classList.remove("hide");
        }, 3000);
    }, 0);

    const opt = {
        strings: ["Make your headlines stand out.", "Stresses that the advice can be immediately applied.", "Conveys making a complex topic easy to understand.", "Points to something with deep, significant impact."],
        typeSpeed: 50,
        backSpeed: 25,
        startDelay: 350,
        loop: true,
        autoInsertCss: false
    };

    const descEl = document.querySelector("#desc");
    const hlt = new Typed(descEl, opt);

    const optabo = {
        strings: ["Interaction design isn’t merely a matter of aesthetic choice; rather, it is based on an understanding of users and cognitive principles.", "What users are trying to accomplish and why. The design should guide them efficiently toward their goals without unnecessary distractions.", "This law predicts that the time required to move to a target area is a function of the distance to the target and its size. In design, this means that frequently used buttons and interactive elements should be large and easy to reach, reducing the time and effort needed to click or tap them."],
        typeSpeed: 60,
        backSpeed: 35,
        startDelay: 350,
        loop: true,
        autoInsertCss: false
    }

    const abop = document.getElementById("abo");
    const abl = new Typed(abop, opt);

    window.addEventListener("click", () => {
        const main = document.getElementById("main");
        const aboc = document.querySelectorAll(".textp");

        aboc.forEach(element => {
            if (element && element.classList) {
                element.classList.toggle("sho");
            }
        });

        main?.classList.toggle("hide"); // безопаснее с optional chaining
    });
});
