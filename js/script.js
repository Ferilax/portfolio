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

const meDots = document.querySelector(".me .dots");
const meFigura = document.querySelector(".me .figura");

const projectsSqr = document.querySelector(".projects .square")

const skillsDots1 = document.querySelector(".skills .dots-1")
const skillsDots2 = document.querySelector(".skills .dots-2")
const skillsSqr1 = document.querySelector(".skills .square-1")
const skillsSqr2 = document.querySelector(".skills .square-2")
const skillsFigura = document.querySelector(".skills .figura")

const aboutMeDots1 = document.querySelector(".about-me .dots-1");
const aboutMeDots2 = document.querySelector(".about-me .dots-2");
const aboutMeDots3 = document.querySelector(".about-me .dots-3");
const aboutMeSquare = document.querySelector(".about-me .square");

const contactDots = document.querySelector(".contacts .dots");

function setStyle(element, event, number, minus = false) {
	if (element) {
		element.style.transform = `translate(${minus ? "-" : ""}${event.screenX / number}px, ${minus ? "-" : ""}${event.screenY / number}px)`
	}
}

document.addEventListener("mousemove", e => {
	setStyle(meDots, e, 60, true)
	setStyle(meFigura, e, 100, true)
	setStyle(projectsSqr, e, 30, true)
	setStyle(skillsDots1, e, 100)
	setStyle(skillsDots2, e, 150, true)
	setStyle(skillsSqr1, e, 90)
	setStyle(skillsSqr2, e, 80, true)
	setStyle(skillsFigura, e, 120, true)
	setStyle(aboutMeDots1, e, 320)
	setStyle(aboutMeDots2, e, 320)
	setStyle(aboutMeDots3, e, 120, true)
	setStyle(aboutMeSquare, e, 80)
	setStyle(contactDots, e, 120, true)
})