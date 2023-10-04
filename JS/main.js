/*SHOW MENU*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*MENU SHOW*/
/* Validar si existe constante */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*MENU HIDDEN*/
/* Validar si existe constante */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}


/*REMOVE MENU MOBILE*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // Cuando hacemos click en cada nav__link, eliminamos la clase .show-menu
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*AGREGAR BLUR AL HEADER*/
const blurHeader = () =>{
    const header = document.getElementById('header')
    // Cuando el scroll sea mayor que 50 viewport height, agregue la clase de blur-header a la etiqueta header
    this.scrollY >= 50 ? header.classList.add('blur-header') 
                       : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)

/*EMAIL JS*/
const contactForm = document.getElementById('contacto-form'),
    contactMessage = document.getElementById('contacto-message')

const sendEmail = (e) =>{
    e.preventDefault()

    // serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_vzkaygi', 'template_f3xf32h', '#contacto-form', 'vWS_GMkpEirykpGRp')
        .then(() =>{
            // Muestra mensaje enviado
            contactMessage.textContent = 'Mensaje enviado exitosamente ✅'

            // Elimina mensaje después de 5s
            setTimeout(() =>{
                contactMessage.textContent = ''
            }, 5000)

            // Elimina los campos
            contactForm.reset()
        }, () =>{
            // Muestra mensaje no enviado
            contactMessage.textContent = 'Mensaje no enviado (Error del servicio) ❌'
        })
}

contactForm.addEventListener('submit', sendEmail)


/*MOSTRAR SCROLL UP*/
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // Cuando el desplazamiento es superior a 350 viewport height, agregue la clase show-scroll a la etiqueta a con la clase scrollup
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*SCROLL SECTIONS ACTIVE LINK*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollY = window.pageYOffset

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)


/*SCROLL REVEAL ANIMATION*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true // Animations repeat
})

sr.reveal(`.home__data, .home__social, .contacto__container, .footer__container`)
sr.reveal(`.home__imagen`, {origin: 'bottom'})
sr.reveal(`.intro__data, .habilidades__data`, {origin: 'left'})
sr.reveal(`.intro__imagen, .habilidades__content`, {origin: 'right'})
sr.reveal(`.servicios__card, .proyectos__card`, {interval: 100})