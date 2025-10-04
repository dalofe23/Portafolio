(function() {
	'use strict';

	// Hover animations
	const hoverSelectors = ['.about-card', '.skill-item', '.soft-skill-card', '.contact-card', '.profile-card'];
	
	hoverSelectors.forEach(selector => {
		document.querySelectorAll(selector).forEach(el => {
			el.style.transition = 'box-shadow .2s';
			el.addEventListener('mouseenter', () => {
				gsap.to(el, { scale: 1.06, boxShadow: '0 8px 32px 0 rgba(0,255,255,0.18)', duration: 0.25, ease: "power2.out" });
			});
			el.addEventListener('mouseleave', () => {
				gsap.to(el, { scale: 1, boxShadow: '', duration: 0.25, ease: "power2.in" });
			});
		});
	});

	// 3D card effects
	const card3DSelectors = ['.about-card', '.stat-card', '.skill-item', '.soft-skill-card', '.contact-card', '.profile-card', '.skill-card-modern'];
	
	card3DSelectors.forEach(selector => {
		document.querySelectorAll(selector).forEach(card => {
			card.addEventListener('mousemove', (e) => {
				const rect = card.getBoundingClientRect();
				const x = e.clientX - rect.left;
				const y = e.clientY - rect.top;
				const centerX = rect.width / 2;
				const centerY = rect.height / 2;
				const rotateX = ((y - centerY) / centerY) * -10;
				const rotateY = ((x - centerX) / centerX) * 10;
				
				card.style.setProperty('--rotate-x', `${rotateX}deg`);
				card.style.setProperty('--rotate-y', `${rotateY}deg`);
			});
			
			card.addEventListener('mouseleave', () => {
				gsap.to(card, {
					'--rotate-x': '0deg',
					'--rotate-y': '0deg',
					duration: 0.5,
					ease: "power2.out",
					onUpdate: function() {
						card.style.setProperty('--rotate-x', '0deg');
						card.style.setProperty('--rotate-y', '0deg');
					}
				});
			});
		});
	});

	// Button glow effects
	const glowSelectors = ['.btn', '.cyberpunk-btn', '.tech-badge'];
	
	glowSelectors.forEach(selector => {
		document.querySelectorAll(selector).forEach(el => {
			el.addEventListener('mouseenter', () => {
				gsap.to(el, { boxShadow: '0 0 16px 4px #00ffe7, 0 0 32px 8px #00ffe7', duration: 0.25, ease: "power2.out" });
			});
			el.addEventListener('mouseleave', () => {
				gsap.to(el, { boxShadow: '', duration: 0.25, ease: "power2.in" });
			});
		});
	});

	// Fade-up animations on load
	function animateOnLoad(selector, delayStep = 0.08) {
		const els = document.querySelectorAll(selector);
		els.forEach((el, i) => {
			gsap.set(el, { opacity: 0, y: 32 });
			gsap.to(el, { opacity: 1, y: 0, duration: 0.7, delay: 0.2 + i * delayStep, ease: "power3.out" });
		});
	}

	window.addEventListener('DOMContentLoaded', () => {
		animateOnLoad('.about-card');
		animateOnLoad('.stat-card');
		animateOnLoad('.skill-item', 0.05);
		animateOnLoad('.soft-skill-card');
		animateOnLoad('.contact-card');
		animateOnLoad('.profile-card');
		animateOnLoad('.skill-card-modern', 0.1);

		// Back to top button animation
		const btn = document.getElementById('backToTop');
		if (btn) {
			gsap.set(btn, { scale: 0, opacity: 0, rotate: 0 });
			
			let shown = false;
			window.addEventListener('scroll', () => {
				if (window.scrollY > 200 && !shown) {
					shown = true;
					gsap.to(btn, { scale: 1, opacity: 1, rotate: 360, duration: 0.7, ease: "elastic.out(1, 0.5)" });
				} else if (window.scrollY <= 200 && shown) {
					shown = false;
					gsap.to(btn, { scale: 0, opacity: 0, rotate: 0, duration: 0.4, ease: "power2.in" });
				}
			});
		}

		// Neon flicker on name
		const neon = document.querySelector('.hero-name.animated-gradient-text');
		if (neon) {
			function neonFlicker() {
				gsap.to(neon, {
					textShadow: "0 0 16px #00ffe7, 0 0 32px #00ffe7, 0 0 64px #00ffe7",
					color: "#00ffe7",
					duration: 0.08,
					repeat: 1,
					yoyo: true,
					onComplete: () => {
						setTimeout(neonFlicker, 1200 + Math.random() * 800);
					}
				});
			}
			neonFlicker();
		}

		// Icon bubble effect on click
		function bubbleEffectOnClick(selector) {
			document.querySelectorAll(selector).forEach(card => {
				const icon = card.querySelector('.card-icon, .soft-skill-icon, .contact-icon, .profile-placeholder');
				if (icon) {
					icon.style.cursor = 'pointer';
					icon.addEventListener('click', () => {
						gsap.fromTo(icon, { scale: 1 }, { scale: 1.25, duration: 0.18, yoyo: true, repeat: 1, ease: "back.out(3)" });
					});
				}
			});
		}
		
		bubbleEffectOnClick('.about-card');
		bubbleEffectOnClick('.soft-skill-card');
		bubbleEffectOnClick('.contact-card');
		bubbleEffectOnClick('.profile-card');

		// Hero background parallax
		const bg = document.querySelector('.hero-background');
		if (bg) {
			document.addEventListener('mousemove', e => {
				const x = (e.clientX / window.innerWidth - 0.5) * 30;
				const y = (e.clientY / window.innerHeight - 0.5) * 30;
				gsap.to(bg, { x, y, duration: 0.6, ease: "power3.out" });
			});
			
			document.addEventListener('mouseleave', () => {
				gsap.to(bg, { x: 0, y: 0, duration: 0.8, ease: "power3.out" });
			});
		}

		// Navbar scroll effects
		const navbar = document.getElementById('navbar');
		if (navbar) {
			window.addEventListener('scroll', () => {
				const sc = window.scrollY;
				if (sc > 40) {
					gsap.to(navbar, { height: "52px", background: "rgba(20,20,30,0.82)", boxShadow: "0 2px 16px 0 rgba(0,0,0,0.18)", duration: 0.35, ease: "power2.out" });
				} else {
					gsap.to(navbar, { height: "", background: "", boxShadow: "", duration: 0.35, ease: "power2.out" });
				}
			});
		}

		// Hero background blur on scroll
		const heroBg = document.querySelector('.hero-background');
		if (heroBg) {
			window.addEventListener('scroll', () => {
				const max = 220;
				const sc = Math.min(window.scrollY, max);
				const blur = (sc / max) * 8;
				const dark = (sc / max) * 0.35;
				gsap.to(heroBg, { filter: `blur(${blur}px) brightness(${1 - dark})`, duration: 0.3, overwrite: true });
			});
		}

		// Section slide-in on scroll
		const sections = document.querySelectorAll('.section');
		sections.forEach((sec, i) => {
			gsap.set(sec, { opacity: 0, x: i % 2 === 0 ? -80 : 80 });
		});
		
		function revealSections() {
			sections.forEach((sec) => {
				const rect = sec.getBoundingClientRect();
				if (rect.top < window.innerHeight - 120 && rect.bottom > 80 && sec.dataset.gsapShown !== "1") {
					gsap.to(sec, { opacity: 1, x: 0, duration: 0.8, ease: "power3.out" });
					sec.dataset.gsapShown = "1";
				}
			});
		}
		
		window.addEventListener('scroll', revealSections);
		revealSections();
	});
})();
