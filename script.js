const btns = document.querySelectorAll(".btn");
const desTab = document.querySelector(".description");
const detTab = document.querySelector(".details");
const desBtn = document.querySelector(".des");
const detBtn = document.querySelector(".det");
btns.forEach(btn => {
    btn.addEventListener("click", (event) => {
        btn.style.transform = "scale(0.97)";
        setTimeout(() => {
            btn.style.transform = "scale(1)";
        }, 100);
        updateTabs(event.target.dataset.id, btn);
    })
});
function updateTabs(name) {
    if (name === "description") {
        desBtn.classList.add("active");
        detBtn.classList.remove("active");
        desTab.classList.remove("disable");
        detTab.classList.add("disable");
    }
    else {
        detBtn.classList.add("active");
        desBtn.classList.remove("active");
        desTab.classList.add("disable");
        detTab.classList.remove("disable");
    }
}

//js for side bar

const sidebarEls = document.querySelectorAll(".sidebar-icon");
const hamBtn = document.querySelector(".ham-burger");
const closeBtn = document.querySelector(".close");
const sidebarEle = document.querySelector(".sidebar");
const bodyEl = document.querySelector("body");
sidebarEls.forEach((ele) => {
    ele.addEventListener("click", (event) => {
        setTimeout(() => {
            ele.style.transform = "scale(1)";
        }, 100);
        if (ele.dataset.id == "ham") {
            hamBtn.classList.add("disable-icon");
            closeBtn.classList.remove("disable-icon");
        }
        else {
            hamBtn.classList.remove("disable-icon");
            closeBtn.classList.add("disable-icon");
        }
        updateIcon(event.target.dataset.id);
    })
})
function updateIcon(name) {
    sidebarEle.classList.toggle("activate-sidebar");
}