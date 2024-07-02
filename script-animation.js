document.addEventListener("DOMContentLoaded", (event) => {
	gsap.registerPlugin(ScrollTrigger, TextPlugin);

	//text-animation in start block
	startPage = gsap.timeline({ delay: 0.6 });
	startPage
		.to(".hello", {
			duration: 1,
			text: {
				value: "Привет",
			},
		})
		.to(".i-am", {
			duration: 1,
			text: {
				value: ", меня зовут",
			},
		})
		.to(".name", {
			duration: 1.5,
			text: {
				value: "Наталья",
			},
		});

	//project animation
	const container = document.querySelector(".projects-inner");
	const sections = gsap.utils.toArray(".projects-inner .projects-item");

	sections.forEach((elem) => {
		ScrollTrigger.create({
			trigger: elem,
			start: "top bottom",
			animation: gsap.from(elem, {
				autoAlpha: 0,
				y: visualViewport.height / 3,
				duration: 0.5,
			}),
		});
	});
});

/*

Вопросы к решению:



*/
