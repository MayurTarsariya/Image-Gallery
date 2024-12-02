let tabs_menu = document.querySelector(".tabs");
let images = document.querySelectorAll(".image");

tabs_menu.addEventListener("click", (e) => {
    if (e.target.dataset.category !== undefined) {
        imageFilter(e.target.dataset.category);
    }
});
const imageFilter = (value) => {
    images.forEach((ele) => {
        if (ele.dataset.category === value || value === "All") {
            ele.style.display = "block";
        } else {
            ele.style.display = "none";
        }
    });
};
