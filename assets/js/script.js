const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon =  menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open")

    const isOPen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOPen ? "ri-close-line" : "ri-menu-line")
});

navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

ScrollReveal().reveal(".header__content h1", {
    ...scrollRevealOption,
});

ScrollReveal().reveal(".header__content .section__description", {
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".header__btns", {
    ...scrollRevealOption,
    delay: 1000,
});

ScrollReveal().reveal(".service__card", {
    ...scrollRevealOption,
    interval: 500,
});

ScrollReveal().reveal(".service__btn", {
    ...scrollRevealOption,
    interval: 2000,
});

ScrollReveal().reveal(".about__container .section__header", {
    ...scrollRevealOption,    
});

ScrollReveal().reveal(".about__list li", {
    ...scrollRevealOption,
    delay: 500,
    interval: 500,
});

ScrollReveal().reveal(".portfolio__container .section__header", {
    ...scrollRevealOption,    
});

ScrollReveal().reveal(".portfolio__container .section__description", {
    ...scrollRevealOption,
    delay: 500,    
});

ScrollReveal().reveal(".portfolio__image", {
    ...scrollRevealOption,
    origin: "right",
    delay: 1000,    
});

ScrollReveal().reveal(".portfolio__list li", {
    ...scrollRevealOption,
    interval: 500,
    delay: 1500,    
});

const swiper = new Swiper(".swiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
});

// stop here
ScrollReveal().reveal(".subscribe__content .section__header", {
    ...scrollRevealOption,    
});

ScrollReveal().reveal(".subscribe__content form", {
    ...scrollRevealOption,
    delay: 500,    
});

// language Selector

const translations = {
  en: {
    home: "Home",
    about: "About Us",
    portfolio: "Portfolio",
    client: "Client",
    contact: "Contact",
    talk: "Let's Talk Us",
    headerTitle: "Building <span>Digital Product,</span> Brand and Experience",
    headerDesc: "We help businesses grow by creating innovative digital products, memorable brand identities, and seamless user experiences that truly connect with their audience",
  },
  pt: {
    home: "Início",
    about: "Sobre Nós",
    portfolio: "Portfólio",
    client: "Clientes",
    contact: "Contato",
    talk: "Fale Conosco",
    headerTitle: "Construindo <span>Produtos Digitais,</span> Marcas e Experiências",
    headerDesc: "Ajudamos empresas a crescer criando produtos digitais inovadores, identidades de marca memoráveis e experiências de usuário que realmente conectam com seu público",
  }
};

const switchButtons = document.querySelectorAll(".language-switcher button");

switchButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const lang = btn.dataset.lang;

    // trocar classe active
    switchButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    // aplicar traduções
    document.querySelector("a[href='#home']").textContent = translations[lang].home;
    document.querySelector("a[href='#about']").textContent = translations[lang].about;
    document.querySelector("a[href='#portfolio']").textContent = translations[lang].portfolio;
    document.querySelector("a[href='#client']").textContent = translations[lang].client;
    document.querySelector("a[href='#contact']").textContent = translations[lang].contact;
    document.querySelector(".nav__btns .btn").textContent = translations[lang].talk;
    document.querySelector(".header__content h1").innerHTML = translations[lang].headerTitle;
    document.querySelector(".header__content p").textContent = translations[lang].headerDesc;
  });
});
