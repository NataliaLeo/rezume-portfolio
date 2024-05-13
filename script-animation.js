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

	//gallery horizontal scroll
	const container = document.querySelector(".projects-inner");
	const sections = gsap.utils.toArray(".projects-inner .projects-item");
	const mask = document.querySelector(".mask");

	let scrollTween = gsap.to(container, {
		x: -container.offsetWidth + visualViewport.width,
		ease: "none",
		scrollTrigger: {
			trigger: ".projects",
			pin: true,
			scrub: 1,
		},
	});
	gsap.to(mask, {
		width: "100%",
		scrollTrigger: {
			trigger: ".projects-inner",
			start: "top top",
			scrub: 1,
			end: "bottom top",
		},
	});
});

/*

Вопросы к решению:

- адаптивность анимации

- скорость прокрутки проджектов

*/
