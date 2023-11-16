let spriteList = [];
let time = 10;

window.addEventListener("load", () => {
    spriteList.push(new Alien("alien"));
    tick();

    setTimeout(reduceTime, 1);
});

const reduceTime = () => {
    time--;
    document.querySelector("#input-timer").value = time;

    if (time > 0) {
        setTimeout(reduceTime, 1);
    }
}

const tick = () => {
    for (let i = 0; i < spriteList.length; i++) {
        const element = spriteList[i];
        element.tick();
    }

    window.requestAnimationFrame(tick);
}