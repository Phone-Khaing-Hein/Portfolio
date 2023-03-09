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

// create popups in projects section

const projects = [
  {
    image: 'images/work5.svg',
    title: 'Tonic',
    company: 'CANOPY',
    position: 'Back End Dev',
    year: '2015',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    skills: ['html', 'css', 'javascript'],
    reverse: false,
  },
  {
    image: 'images/work6.svg',
    title: 'Multi-Post Stories',
    company: 'FACEBOOK',
    position: 'Full Stack Dev',
    year: '2015',
    description: `Experimental content creation feature that allows users to add to an existing story over the course
                    of a day without
                    spamming their friends.`,
    skills: ['html', 'Ruby on rails', 'css', 'javascript'],
    reverse: true,
    rubyLink: true,
  },
  {
    image: 'images/work1.svg',
    title: 'Facebook 360',
    company: 'FACEBOOK',
    position: 'Full Stack Dev',
    year: '2015',
    description: `Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy
                    360 photos and
                    videos on Gear VR.`,
    skills: ['html', 'Ruby on rails', 'css', 'javascript'],
    reverse: false,
    rubyLink: true,
  },
  {
    image: 'images/work2.svg',
    title: 'Uber Navigation',
    company: 'Uber',
    position: 'Lead Developer',
    year: '2018',
    description: `A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive
                    computer: your car.`,
    reverse: true,
    rubyLink: true,
  },
];

const porjectSection = document.getElementById('projects');

projects.map((p, index) => {
  porjectSection.innerHTML += `
        <div class="card ${p.reverse && 'flex-reverse'}">
            <img src="${p.image}" alt="Project 1" class="card-image">
            <div class="card-body">
                <h2 class="card-title">${p.title}</h2>
                <ul class="position">
                    <li class="name">${p.company}</li>
                    <li><img src="images/icons/bullet.svg" alt="bullet icon"></li>
                    <li class="status">${p.position}</li>
                    <li><img src="images/icons/bullet.svg" alt="bullet icon"></li>
                    <li class="date">${p.year}</li>
                </ul>
                <p class="work-description">
                    ${p.description}
                </p>
                <ul class="languages">
                    <li class="language"><a href="https://developer.mozilla.org/en-US/docs/Web/HTML">html</a></li>
                    ${
  p.rubyLink
    ? '<li class="language"><a href=true>Ruby on rails</a>'
    : ''
}
                    <li class="language"><a href="https://developer.mozilla.org/en-US/docs/Web/CSS">css</a></li>
                    <li class="language"><a
                            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">javascript</a></li>
                </ul>
                <button class="card-button" type="button" id="project${index}">See Project</button>
            </div>
        </div>
  `;
  return true;
});

const modal = document.getElementById('modalview');

projects.map((p, index) => {
  const project = document.getElementById(`project${index}`);
  project.addEventListener('click', () => {
    for (let i = 0; i < projects.length; i += 1) {
      document.getElementById(`project${i}`).setAttribute('style', 'z-index:-1');
    }
    modal.classList.remove('d-none');
    modal.innerHTML += `
    <div class="modal" id="modal">
      <div class="modal-card">
        <div class="modal-header">
          <h2 class="modal-title">
            ${p.title}
          </h2>
          <button id="cancel">
            <img src="./images/icons/cancel.svg" alt="Cancel icon" />
          </button>
        </div>
        <ul style="display:flex;gap:12px;padding-left:24px;align-items:center;color:#7A869A;">
            <li class="modal-company">${p.company}</li>
            <li><img src="images/icons/bullet.svg" alt="bullet icon"></li>
            <li class="modal-position">${p.position}</li>
            <li><img src="images/icons/bullet.svg" alt="bullet icon"></li>
            <li class="modal-year">${p.year}</li>
        </ul>
        <div class="modal-image">
          <img src="./images/modal${
  index + 1
}.png" alt="projects" style="width:100%;height:350px" />
        </div>
        <div class="modal-body">
          <p class="modal-description">
            ${p.description}
          </p>
          <div styles="display:flex;flex-direction:column;" class="mobile-body">
            <ul class="languages">
              <li class="language"><a href="https://developer.mozilla.org/en-US/docs/Web/HTML">html</a></li>
              ${
  p.rubyLink
    ? '<li class="language"><a href=true>Ruby on rails</a>'
    : ''
}
              <li class="language"><a href="https://developer.mozilla.org/en-US/docs/Web/CSS">css</a></li>
              <li class="language"><a
                      href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">javascript</a></li>
            </ul>
            <hr/>
            <div style="display:flex;gap:5px;" class="modal-mobile">
              <button class="seeLive">See live <img src="./images/icons/seeLive.svg" width="20" /></button>
              <button class="seeLive">See Source <img src="./images/icons/github2.svg" width="20" /></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

    const cancel = document.getElementById('cancel');
    cancel.addEventListener('click', () => {
      for (let i = 0; i < projects.length; i += 1) {
        document
          .getElementById(`project${i}`)
          .setAttribute('style', 'z-index:0');
      }
      modal.innerHTML = '';
    });
  });

  return true;
});
