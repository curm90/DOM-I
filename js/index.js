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
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// Add id's to all elements that need selecting indivdually
const navItems = document.querySelectorAll('nav a');
navItems.forEach((item, i) => {
  i += 1;
  item.classList.add(`nav-item-${i}`);
})

const topContentHeaders = document.querySelectorAll('.top-content h4');
topContentHeaders.forEach((item, i) => {
  i += 1;
  item.id = 'topHeading' + i;
})

const topContentParagraphs = document.querySelectorAll('.top-content p')
topContentParagraphs.forEach((item, i) => {
  i += 1;
  item.id = 'topParagragh' + i;
})

const bottomContentHeaders = document.querySelectorAll('.bottom-content h4');
bottomContentHeaders.forEach((item, i) => {
  i += 1;
  item.id = 'bottomHeading' + i;
})

const bottomContentParagraphs = document.querySelectorAll('.bottom-content p');
bottomContentParagraphs.forEach((item, i) => {
  i += 1;
  item.id = 'bottomParagraph' + i;
})

const contactParagraph = document.querySelectorAll('.bottom-content p');
contactParagraph.forEach((item, i) => {
  i += 1;
  item.id = 'contactParagraph' + i;
})
