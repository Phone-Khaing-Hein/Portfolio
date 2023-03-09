// MOBILE MENU
const hamburger = document.getElementById('hamburger');

let close;

hamburger.addEventListener('click', () => {
  const div = document.createElement('div');
  const body = document.getElementsByTagName('body')[0];
  const closeButton = document.createElement('button');
  const portfolio = document.createElement('p');
  const menu = document.createElement('div');
  const headline = document.getElementById('headline');
  const projects = document.getElementById('projects');
  const aboutme = document.getElementById('aboutme');
  const contactus = document.getElementById('contact-us');
  const navbar = document.getElementsByClassName('navbar')[0];

  headline.setAttribute('style', 'filter:blur(7px)');
  projects.setAttribute('style', 'filter:blur(7px)');
  aboutme.setAttribute('style', 'filter:blur(7px)');
  contactus.setAttribute('style', 'filter:blur(7px)');
  navbar.setAttribute('style', 'filter:blur(7px)');

  portfolio.innerHTML = '<a href="#headline">Portfolio</a>';
  const about = document.createElement('p');
  about.innerHTML = '<a href="#aboutme">About</a>';
  const contact = document.createElement('p');
  contact.innerHTML = '<a href="#contact-us">Contact</a>';
  menu.setAttribute(
    'style',
    'color:#fff;display:flex;flex-direction:column;align-self:start;margin-top:32px;gap:40px;font-style: normal;font-weight: 600;font-size: 32px;line-height: 44px;',
  );
  closeButton.setAttribute('id', 'close');
  closeButton.setAttribute(
    'style',
    'color:white;padding: 0;border: none;background: none;display: block;cursor: pointer;z-index:3',
  );
  closeButton.innerHTML = "<p style='font-size:30px;margin-top:-15px;'>x<p/>";

  hamburger.setAttribute('style', 'display:none');
  div.setAttribute('id', 'mobile-nav');
  div.setAttribute(
    'style',
    'padding: 25px;flex-direction:column;justify-content: start;display: flex;align-items: end;position:fixed;top:0;right:0;bottom:0;left:0;background-color:#6070FF;opacity: 0.7',
  );

  div.appendChild(closeButton);
  menu.appendChild(portfolio);
  menu.appendChild(about);
  menu.appendChild(contact);
  div.appendChild(menu);
  body.appendChild(div);
  close = document.getElementById('mobile-nav');

  close.addEventListener('click', () => {
    hamburger.setAttribute('style', 'display:block');
    const remove = document.getElementById('mobile-nav');
    headline.setAttribute('style', 'filter:blur(0px)');
    projects.setAttribute('style', 'filter:blur(0px)');
    aboutme.setAttribute('style', 'filter:blur(0px)');
    contactus.setAttribute('style', 'filter:blur(0px)');
    navbar.setAttribute('style', 'filter:blur(0px);z-index:2');
    remove.remove();
  });
});

// FORM VALIDATION

const form = document.getElementById('contactusform');

form.addEventListener('submit', (e) => {
  const email = e.target[1].value;
  if (email.toLowerCase() === email) {
    const name = e.target[0].value;
    const message = e.target[2].value;
    fetch('https://formspree.io/f/xknarzyz', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, message }),
    });
  } else {
    e.preventDefault();
    const error = document.getElementById('error');
    error.innerText = 'Email must be lowercase.';
    error.style = 'color:#fff;display:block;margin-top:-20px;margin-bottom:10px';
  }
});

// using localstroage

const email = document.getElementById('email');
const username = document.getElementById('username');
const message = document.getElementById('message');

if (localStorage.getItem('contact-data') !== null) {
  const data = JSON.parse(localStorage.getItem('contact-data'));
  email.value = data.email;
  username.value = data.username;
  message.value = data.message;
}

const contactData = {
  email,
  username,
  message,
};

email.addEventListener('change', (e) => {
  contactData.email = e.target.value;
  contactData.username = username.value;
  contactData.message = message.value;
  localStorage.setItem('contact-data', JSON.stringify(contactData));
});

username.addEventListener('change', (e) => {
  contactData.username = e.target.value;
  contactData.message = message.value;
  contactData.email = email.value;
  localStorage.setItem('contact-data', JSON.stringify(contactData));
});

message.addEventListener('change', (e) => {
  contactData.message = e.target.value;
  contactData.email = email.value;
  contactData.username = username.value;
  localStorage.setItem('contact-data', JSON.stringify(contactData));
});
