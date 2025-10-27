// Critical JavaScript - Inline minimal
(function(){
	'use strict';
	
	// Fast theme toggle
	const themeToggle=document.getElementById('themeToggle');
	const html=document.documentElement;
	const savedTheme=localStorage.getItem('theme')||'dark';
	html.setAttribute('data-theme',savedTheme);
	
	if(themeToggle){
		themeToggle.addEventListener('click',function(){
			const currentTheme=html.getAttribute('data-theme');
			const newTheme=currentTheme==='dark'?'light':'dark';
			html.setAttribute('data-theme',newTheme);
			localStorage.setItem('theme',newTheme);
		},{passive:true});
	}
	
	// Fast mobile menu
	const mobileToggle=document.getElementById('mobileMenuToggle');
	const navMenu=document.getElementById('navMenu');
	if(mobileToggle&&navMenu){
		mobileToggle.addEventListener('click',function(){
			navMenu.classList.toggle('active');
			this.classList.toggle('active');
		},{passive:true});
	}
	
	// Passive scroll listener
	let ticking=false;
	window.addEventListener('scroll',function(){
		if(!ticking){
			window.requestAnimationFrame(function(){
				const navbar=document.getElementById('navbar');
				if(navbar){
					navbar.style.boxShadow=window.scrollY>50?'0 4px 20px rgba(0,0,0,0.1)':'none';
				}
				ticking=false;
			});
			ticking=true;
		}
	},{passive:true});
})();
