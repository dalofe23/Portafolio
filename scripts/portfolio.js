(function() {
	'use strict';

	// ========== TRANSLATIONS ==========
	const translations = {
		es: {
			'nav-home': 'Inicio', 'nav-about': 'Sobre Mí', 'nav-experience': 'Experiencia', 'nav-skills': 'Habilidades', 'nav-contact': 'Contacto',
			'hero-greeting': 'Hola, soy', 
			'hero-roles': 'Desarrollador Web,Estudiante Apasionado,Solucionador de Problemas,Innovador Creativo',
			'hero-description': 'Soy alguien que aprende rápido y se adapta a cualquier desafío. Me encanta trabajar en equipo, aportar ideas y resolver problemas juntos. Mi habilidad para pillar todo al vuelo me permite destacarme en lo que hago y seguir creciendo como profesional.',
			'hero-contact-btn': 'Contactar', 'hero-status': 'Disponible', 'hero-scroll': 'Scroll',
			'about-title': 'Sobre Mí', 'about-subtitle': 'Conóceme mejor',
			'about-card1-title': 'Estudiante & Desarrollador',
			'about-card1-text': 'Actualmente estoy enfocado en el desarrollo de aplicaciones web, combinando creatividad con tecnología para crear soluciones innovadoras. Mi pasión por aprender me mantiene siempre actualizado con las últimas tendencias.',
			'about-card2-title': 'Fortalezas Principales',
			'about-strength1': '<strong>Disponibilidad para viajar:</strong> Flexible y adaptable',
			'about-strength2': '<strong>Resolutivo:</strong> Encuentro soluciones creativas',
			'about-strength3': '<strong>Diseño Web:</strong> Interfaces modernas y funcionales',
			'about-strength4': '<strong>Trabajo en equipo:</strong> Colaborativo y comunicativo',
			'stat-label1': 'Tecnologías Dominadas', 'stat-label2': '% Satisfacción Cliente',
			'languages-title': 'Idiomas', 'lang-spanish': 'Español', 'lang-spanish-level': 'Nativo',
			'lang-english': 'Inglés', 'lang-english-level': 'Intermedio',
			'exp-title': 'Experiencia', 'exp-subtitle': 'Resumen profesional',
			'exp-job-title': 'Prácticas Erasmus — Casemedia (Finlandia)',
			'exp-role': 'Rol: Desarrollador Web/Móvil (2025)',
			'exp-duration': 'Estancia de 1 mes a jornada completa (8 h/día) dentro del programa Erasmus.',
			'exp-description': 'Desarrollo de aplicaciones móviles con Flutter, participando en todo el ciclo de vida.',
			'skills-title': 'Habilidades', 'skills-subtitle': 'Tecnologías que domino',
			'skills-frontend-title': 'Front-End & Markup Languages', 'skills-backend-title': 'Back-End',
			'skills-tools-title': 'Tools & IDEs', 'skills-databases-title': 'Databases', 'skills-devops-title': 'DevOps',
			'skills-soft-title': 'Soft Skills',
			'skills-soft-item1': 'Trabajo en Equipo', 'skills-soft-item2': 'Resolución de Problemas',
			'skills-soft-item3': 'Adaptabilidad', 'skills-soft-item4': 'Comunicación Efectiva',
			'soft-skills-main-title': 'Habilidades Blandas',
			'soft-skill1-title': 'Proactividad',
			'soft-skill1-text': 'Tomo la iniciativa en cada proyecto, anticipándome a los desafíos y buscando constantemente formas de optimizar procesos sin esperar indicaciones.',
			'soft-skill2-title': 'Adaptabilidad',
			'soft-skill2-text': 'Mi capacidad para ajustarme rápidamente a nuevas tecnologías, metodologías y entornos de trabajo me permite mantener un alto rendimiento en cualquier situación.',
			'soft-skill3-title': 'Trabajo en Equipo',
			'soft-skill3-text': 'Colaboro eficazmente con equipos multidisciplinarios, compartiendo conocimientos y aprendiendo de otros para alcanzar objetivos comunes de manera exitosa.',
			'soft-skill4-title': 'Resolución de Problemas',
			'soft-skill4-text': 'Analizo situaciones complejas desde diferentes perspectivas, desarrollando soluciones creativas e innovadoras que aportan valor real a cada proyecto.',
			'contact-title': 'Contacto', 'contact-subtitle': 'Ponte en contacto conmigo',
			'contact-email': 'Email', 'contact-phone': 'Teléfono', 'contact-location': 'Ubicación',
			'form-name': 'Nombre', 'form-email': 'Email', 'form-subject': 'Asunto', 'form-message': 'Mensaje',
			'form-send-btn': 'Enviar Mensaje',
			'cv-title': 'Currículum Vitae', 'cv-subtitle': 'Descarga mi CV en tu idioma preferido',
			'cv-download-es': 'Descargar CV (Español)', 'cv-download-en': 'Download CV (English)',
			'footer-text': '© 2024 David López. Diseñado y desarrollado por David López.',
			'footer-home': 'Inicio', 'footer-about': 'Sobre Mí', 'footer-experience': 'Experiencia',
			'footer-skills': 'Habilidades', 'footer-contact': 'Contacto'
		},
		en: {
			'nav-home': 'Home', 'nav-about': 'About Me', 'nav-experience': 'Experience', 'nav-skills': 'Skills', 'nav-contact': 'Contact',
			'hero-greeting': 'Hello, I am', 
			'hero-roles': 'Web Developer,Passionate Student,Problem Solver,Creative Innovator',
			'hero-description': 'I am someone who learns quickly and adapts to any challenge. I love working in a team, contributing ideas and solving problems together. My ability to grasp everything on the fly allows me to stand out in what I do and continue growing as a professional.',
			'hero-contact-btn': 'Contact', 'hero-status': 'Available', 'hero-scroll': 'Scroll',
			'about-title': 'About Me', 'about-subtitle': 'Get to know me better',
			'about-card1-title': 'Student & Developer',
			'about-card1-text': 'I am currently focused on web application development, combining creativity with technology to create innovative solutions. My passion for learning keeps me always updated with the latest trends.',
			'about-card2-title': 'Main Strengths',
			'about-strength1': '<strong>Availability to travel:</strong> Flexible and adaptable',
			'about-strength2': '<strong>Problem solver:</strong> I find creative solutions',
			'about-strength3': '<strong>Web Design:</strong> Modern and functional interfaces',
			'about-strength4': '<strong>Teamwork:</strong> Collaborative and communicative',
			'stat-label1': 'Technologies Mastered', 'stat-label2': '% Client Satisfaction',
			'languages-title': 'Languages', 'lang-spanish': 'Spanish', 'lang-spanish-level': 'Native',
			'lang-english': 'English', 'lang-english-level': 'Intermediate',
			'exp-title': 'Experience', 'exp-subtitle': 'Professional summary',
			'exp-job-title': 'Erasmus Internship — Casemedia (Finland)',
			'exp-role': 'Role: Web/Mobile Developer (2025)',
			'exp-duration': '1-month full-time stay (8 h/day) within the Erasmus program.',
			'exp-description': 'Mobile application development with Flutter, participating in the entire life cycle.',
			'skills-title': 'Skills', 'skills-subtitle': 'Technologies I master',
			'skills-frontend-title': 'Front-End & Markup Languages', 'skills-backend-title': 'Back-End',
			'skills-tools-title': 'Tools & IDEs', 'skills-databases-title': 'Databases', 'skills-devops-title': 'DevOps',
			'skills-soft-title': 'Soft Skills',
			'skills-soft-item1': 'Teamwork', 'skills-soft-item2': 'Problem Solving',
			'skills-soft-item3': 'Adaptability', 'skills-soft-item4': 'Effective Communication',
			'soft-skills-main-title': 'Soft Skills',
			'soft-skill1-title': 'Proactivity',
			'soft-skill1-text': 'I take the initiative in every project, anticipating challenges and constantly looking for ways to optimize processes without waiting for instructions.',
			'soft-skill2-title': 'Adaptability',
			'soft-skill2-text': 'My ability to quickly adjust to new technologies, methodologies and work environments allows me to maintain high performance in any situation.',
			'soft-skill3-title': 'Teamwork',
			'soft-skill3-text': 'I collaborate effectively with multidisciplinary teams, sharing knowledge and learning from others to successfully achieve common goals.',
			'soft-skill4-title': 'Problem Solving',
			'soft-skill4-text': 'I analyze complex situations from different perspectives, developing creative and innovative solutions that bring real value to each project.',
			'contact-title': 'Contact', 'contact-subtitle': 'Get in touch with me',
			'contact-email': 'Email', 'contact-phone': 'Phone', 'contact-location': 'Location',
			'form-name': 'Name', 'form-email': 'Email', 'form-subject': 'Subject', 'form-message': 'Message',
			'form-send-btn': 'Send Message',
			'cv-title': 'Curriculum Vitae', 'cv-subtitle': 'Download my CV in your preferred language',
			'cv-download-es': 'Download CV (Spanish)', 'cv-download-en': 'Download CV (English)',
			'footer-text': '© 2024 David López. Designed and developed by David López.',
			'footer-home': 'Home', 'footer-about': 'About Me', 'footer-experience': 'Experience',
			'footer-skills': 'Skills', 'footer-contact': 'Contact'
		}
	};

	let currentLang = localStorage.getItem('language') || 'en';
	let typewriterInterval = null;

	// ========== TYPEWRITER EFFECT ==========
	function initTypewriter() {
		const typewriter = document.querySelector('.typewriter');
		if (!typewriter) return;
		
		// Detener cualquier animación anterior
		if (typewriterInterval) {
			clearInterval(typewriterInterval);
			typewriterInterval = null;
		}
		
		const words = typewriter.getAttribute('data-words').split(',');
		let wordIndex = 0;
		let charIndex = 0;
		let isDeleting = false;
		let isPaused = false;
		
		function type() {
			const current = words[wordIndex];
			
			if (!isDeleting) {
				typewriter.textContent = current.substring(0, charIndex + 1);
				charIndex++;
				
				if (charIndex === current.length) {
					isPaused = true;
					setTimeout(() => {
						isPaused = false;
						isDeleting = true;
					}, 2000);
					return;
				}
			} else {
				typewriter.textContent = current.substring(0, charIndex - 1);
				charIndex--;
				
				if (charIndex === 0) {
					isDeleting = false;
					wordIndex = (wordIndex + 1) % words.length;
					isPaused = true;
					setTimeout(() => {
						isPaused = false;
					}, 500);
					return;
				}
			}
		}
		
		// Iniciar el intervalo
		typewriterInterval = setInterval(() => {
			if (!isPaused) {
				type();
			}
		}, isDeleting ? 50 : 100);
	}

	// ========== LANGUAGE SYSTEM ==========
	function setLanguage(lang) {
		currentLang = lang;
		localStorage.setItem('language', lang);
		document.documentElement.lang = lang;
		
		// Actualizar todos los elementos con data-lang-key
		document.querySelectorAll('[data-lang-key]').forEach(el => {
			const key = el.getAttribute('data-lang-key');
			if (translations[lang][key]) {
				if (el.innerHTML.includes('<strong>')) {
					el.innerHTML = translations[lang][key];
				} else {
					el.textContent = translations[lang][key];
				}
			}
		});
		
		// Actualizar el typewriter
		const typewriter = document.querySelector('.typewriter');
		if (typewriter) {
			typewriter.setAttribute('data-words', translations[lang]['hero-roles']);
			// Reiniciar el efecto typewriter con las nuevas palabras
			initTypewriter();
		}
		
		// Actualizar botones de idioma
		document.querySelectorAll('.lang-es, .lang-en').forEach(el => el.classList.remove('active'));
		const activeBtn = document.querySelector(`.lang-${lang}`);
		if (activeBtn) activeBtn.classList.add('active');
	}

	// ========== LOADING SCREEN ==========
	function hideLoading() {
		const screen = document.getElementById('loadingScreen');
		if (screen) {
			screen.classList.add('is-hidden');
			document.body.style.overflow = '';
		}
	}

	// ========== SMOOTH SCROLL ==========
	function initSmoothScroll() {
		document.querySelectorAll('a[href^="#"]').forEach(link => {
			link.addEventListener('click', (e) => {
				const href = link.getAttribute('href');
				if (!href || href === '#') return;
				const target = document.getElementById(href.slice(1));
				if (target) {
					e.preventDefault();
					target.scrollIntoView({ behavior: 'smooth', block: 'start' });
					history.replaceState(null, '', href);
				}
			});
		});
	}

	// ========== THEME TOGGLE ==========
	function initThemeToggle() {
		const toggle = document.getElementById('themeToggle');
		const currentTheme = localStorage.getItem('theme') || 'dark';
		document.documentElement.setAttribute('data-theme', currentTheme);
		
		if (toggle) {
			toggle.addEventListener('click', () => {
				const theme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
				document.documentElement.setAttribute('data-theme', theme);
				localStorage.setItem('theme', theme);
			});
		}
	}

	// ========== MOBILE MENU ==========
	function initMobileMenu() {
		const toggle = document.getElementById('mobileMenuToggle');
		const menu = document.getElementById('navMenu');
		
		if (toggle) {
			toggle.addEventListener('click', () => {
				menu?.classList.toggle('active');
				toggle.classList.toggle('active');
			});
		}
		
		document.querySelectorAll('.nav-link').forEach(link => {
			link.addEventListener('click', () => {
				menu?.classList.remove('active');
				toggle?.classList.remove('active');
			});
		});
	}

	// ========== STAT COUNTER ==========
	function animateStats() {
		const statsAnimated = new Set();
		
		function animateStat(el) {
			if (statsAnimated.has(el)) return;
			statsAnimated.add(el);
			
			const count = parseInt(el.getAttribute('data-count'));
			let current = 0;
			const increment = count / 50;
			const timer = setInterval(() => {
				current += increment;
				if (current >= count) {
					el.textContent = count;
					clearInterval(timer);
				} else {
					el.textContent = Math.floor(current);
				}
			}, 20);
		}
		
		// Animar cuando entren en viewport
		const observer = new IntersectionObserver((entries) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					animateStat(entry.target);
				}
			});
		}, { threshold: 0.5 });
		
		document.querySelectorAll('.stat-number').forEach(el => observer.observe(el));
	}

	// ========== GSAP ANIMATIONS ==========
	function initAnimations() {
		if (typeof gsap === 'undefined') return;

		// Hover effects
		['.about-card', '.soft-skill-card', '.contact-card', '.skill-card-modern'].forEach(selector => {
			document.querySelectorAll(selector).forEach(el => {
				el.addEventListener('mouseenter', () => {
					gsap.to(el, { scale: 1.05, duration: 0.3, ease: "power2.out" });
				});
				el.addEventListener('mouseleave', () => {
					gsap.to(el, { scale: 1, duration: 0.3, ease: "power2.in" });
				});
			});
		});

		// Scroll animations
		const sections = document.querySelectorAll('.section');
		sections.forEach((sec, i) => {
			gsap.set(sec, { opacity: 0, y: 50 });
		});

		function revealSections() {
			sections.forEach(sec => {
				const rect = sec.getBoundingClientRect();
				if (rect.top < window.innerHeight - 100 && !sec.dataset.revealed) {
					gsap.to(sec, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" });
					sec.dataset.revealed = "1";
				}
			});
		}

		window.addEventListener('scroll', revealSections);
		revealSections();

		// Back to top button
		const btn = document.getElementById('backToTop');
		if (btn) {
			gsap.set(btn, { scale: 0, opacity: 0 });
			let shown = false;
			
			window.addEventListener('scroll', () => {
				if (window.scrollY > 200 && !shown) {
					shown = true;
					gsap.to(btn, { scale: 1, opacity: 1, rotate: 360, duration: 0.6, ease: "back.out(1.7)" });
				} else if (window.scrollY <= 200 && shown) {
					shown = false;
					gsap.to(btn, { scale: 0, opacity: 0, rotate: 0, duration: 0.4 });
				}
			});

			btn.addEventListener('click', () => {
				window.scrollTo({ top: 0, behavior: 'smooth' });
			});
		}

		// Navbar scroll effect
		const navbar = document.getElementById('navbar');
		window.addEventListener('scroll', () => {
			if (navbar) {
				if (window.scrollY > 50) {
					gsap.to(navbar, { background: "rgba(10,10,10,0.98)", boxShadow: "0 2px 20px rgba(0,0,0,0.3)", duration: 0.3 });
				} else {
					gsap.to(navbar, { background: "rgba(10,10,10,0.95)", boxShadow: "", duration: 0.3 });
				}
			}
		});
	}

	// ========== MATRIX RAIN EFFECT ==========
	function initMatrixRain() {
		const canvas = document.getElementById('matrix-rain');
		if (!canvas) return;

		const ctx = canvas.getContext('2d');
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;

		const chars = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン01';
		const fontSize = 14;
		const columns = canvas.width / fontSize;
		const drops = Array(Math.floor(columns)).fill(1);

		function draw() {
			ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
			ctx.fillRect(0, 0, canvas.width, canvas.height);
			ctx.fillStyle = '#00ffe7';
			ctx.font = fontSize + 'px monospace';

			for (let i = 0; i < drops.length; i++) {
				const text = chars[Math.floor(Math.random() * chars.length)];
				ctx.fillText(text, i * fontSize, drops[i] * fontSize);

				if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
					drops[i] = 0;
				}
				drops[i]++;
			}
		}

		const matrixInterval = setInterval(draw, 33);

		window.addEventListener('resize', () => {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
		});

		return () => clearInterval(matrixInterval);
	}

	// ========== PARTICLES.JS ==========
	function initParticles() {
		if (typeof particlesJS === 'undefined') {
			const script = document.createElement('script');
			script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
			script.onload = () => {
				particlesJS('particles-js', {
					particles: {
						number: { value: 80, density: { enable: true, value_area: 800 } },
						color: { value: '#00ffe7' },
						shape: { type: 'circle' },
						opacity: { value: 0.5, random: false },
						size: { value: 3, random: true },
						line_linked: {
							enable: true,
							distance: 150,
							color: '#00ffe7',
							opacity: 0.4,
							width: 1
						},
						move: {
							enable: true,
							speed: 2,
							direction: 'none',
							random: false,
							straight: false,
							out_mode: 'out',
							bounce: false
						}
					},
					interactivity: {
						detect_on: 'canvas',
						events: {
							onhover: { enable: true, mode: 'repulse' },
							onclick: { enable: true, mode: 'push' },
							resize: true
						},
						modes: {
							repulse: { distance: 100, duration: 0.4 },
							push: { particles_nb: 4 }
						}
					},
					retina_detect: true
				});
			};
			document.head.appendChild(script);
		}
	}

	// ========== SCROLL ANIMATIONS ==========
	function initScrollAnimations() {
		const observerOptions = {
			threshold: 0.1,
			rootMargin: '0px 0px -50px 0px'
		};

		const observer = new IntersectionObserver((entries) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					entry.target.classList.add('revealed');
				}
			});
		}, observerOptions);

		// Add scroll reveal classes to elements
		document.querySelectorAll('.about-card, .stat-card, .skill-card-modern, .soft-skill-card, .contact-card').forEach(el => {
			el.classList.add('scroll-reveal');
			observer.observe(el);
		});

		document.querySelectorAll('.section-header').forEach(el => {
			el.classList.add('scroll-reveal-left');
			observer.observe(el);
		});

		document.querySelectorAll('.hero-visual, .contact-info').forEach(el => {
			el.classList.add('scroll-reveal-right');
			observer.observe(el);
		});
	}

	// ========== INITIALIZATION ==========
	document.addEventListener('DOMContentLoaded', () => {
		hideLoading();
		setLanguage(currentLang);
		initTypewriter();
		initSmoothScroll();
		initThemeToggle();
		initMobileMenu();
		animateStats();
		initAnimations();
		initMatrixRain();
		initParticles();
		initScrollAnimations();

		// Language toggle
		const langToggle = document.getElementById('langToggle');
		if (langToggle) {
			langToggle.addEventListener('click', () => {
				const newLang = currentLang === 'es' ? 'en' : 'es';
				setLanguage(newLang);
			});
		}
	});

	window.addEventListener('load', hideLoading);
	setTimeout(hideLoading, 3000);

})();
