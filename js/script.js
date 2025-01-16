const header = document.querySelector(".header");
const headerOpenButton = document.querySelector(".mobile-header__open");
const headerCloseButton = document.querySelector(".header__close");
const body = document.body;

headerOpenButton.addEventListener("click", () => {
	header.classList.add("show");
	body.classList.add("lock-scroll");
})

headerCloseButton.addEventListener("click", () => {
	header.classList.remove("show");
	body.classList.remove("lock-scroll");
})