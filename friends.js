// Scroll To Top
let up = document.querySelector(".scroll");
window.onscroll = function () {
    if (window.scrollY > 600) {
        up.style.display = "block";
    } else {
        up.style.display = "none";
    }
}
up.onclick = function () {
    window.scrollTo({
        left: 0,
        top: 0,
        behavior: "smooth",
    });
}


// Increase Numbers On Scrolling
let nums = document.querySelectorAll(".statistics .container .box .number");
let sectionGoal = document.querySelector(".statistics");
let started = false;
window.onscroll = function () {
    if (window.scrollY >= sectionGoal.offsetTop - 500) {
        if (!started) {
        nums.forEach((num) => startCount(num));
        }
        started = true;
    }
};
function startCount(el) {
    let goal = el.dataset.goal;
        let count = setInterval(() => {
        el.textContent++;
        if (el.textContent == goal) {
            clearInterval(count);
        }
    }, 2000/goal);
}