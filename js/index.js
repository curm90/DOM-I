const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
const logo = document.getElementById('logo-img');
logo.setAttribute('src', siteContent.nav['img-src']);

const ctaImg = document.getElementById('cta-img');
ctaImg.src = siteContent.cta['img-src'];

const middleImg = document.getElementById('middle-img');
middleImg.src = siteContent['main-content']['middle-img-src'];

// Add nav items to page
const navItems = document.querySelectorAll('nav a');
navItems.forEach((item, i) => {
  item.innerHTML = siteContent.nav['nav-item-' + (1 + i)]
})

// Add cta elements
document.querySelector('.cta-text h1').textContent = siteContent.cta.h1;
document.querySelector('.cta-text button').textContent = siteContent.cta.button;

// Add top content
const topContentHeaders = document.querySelectorAll('.top-content h4');
topContentHeaders[0].textContent = siteContent['main-content']['features-h4'];
topContentHeaders[1].textContent = siteContent['main-content']['about-h4'];

const topContentParagraphs = document.querySelectorAll('.top-content p');
topContentParagraphs[0].textContent = siteContent['main-content']['features-content'];
topContentParagraphs[1].textContent = siteContent['main-content']['about-content'];

// Add bottom content
const bottomContentHeaders = document.querySelectorAll('.bottom-content h4');
bottomContentHeaders[0].textContent = siteContent['main-content']['services-h4'];
bottomContentHeaders[1].textContent = siteContent['main-content']['product-h4'];
bottomContentHeaders[2].textContent = siteContent['main-content']['vision-h4'];

const bottomContentParagraphs = document.querySelectorAll('.bottom-content p');
bottomContentParagraphs[0].textContent = siteContent['main-content']['services-content'];
bottomContentParagraphs[1].textContent = siteContent['main-content']['product-content'];
bottomContentParagraphs[2].textContent = siteContent['main-content']['vision-content'];

// Add contact header
document.querySelector('.contact h4').textContent = siteContent.contact['contact-h4'];

// Add contact paragraghs
const contactParagraphs = document.querySelectorAll('.contact p');
contactParagraphs[0].textContent = siteContent.contact.address;
contactParagraphs[2].textContent = siteContent.contact.phone;
contactParagraphs[1].textContent = siteContent.contact.email;

// Select footer element
document.querySelector('footer p').textContent = siteContent.footer.copyright;




