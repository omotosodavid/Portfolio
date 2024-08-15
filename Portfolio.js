// creating a navbar.
const navBar = () => {
  let nav = document.querySelector("nav");
  if (nav !== null) {
    nav.innerHTML = `
  <!-- Personal logo -->
    <div style='border-radius:50%;width: 65px;height: 65px;'>
      <a href="index.html"><img src=img/Avatar.png alt=David-Avatar class=avatar /></a>
    </div>
  <!-- Navigation -->
  <i title="Dark mode" class="bi bi-brightness-high-fill change-theme" onclick=local() ></i>
  <i class="bi bi-list"></i>
  <ul>
  <li>
    <i class="bi bi-x-lg"></i>
  </li>
    <li>
      <a href="index.html"> Home</a>
    </li>
    <li><a href="about.html">About </a></li>
    <li>
      <a href="index.html#portfolio"> Portfolio</a>
    </li>
    <li>
      <a href="Contact.html" class="no-decoration">
        <button type="submit">Get in touch</button>
      </a>
    </li>
  </ul>`;
  }
};
navBar();

// Footer
const footer = () => {
  let footer = document.querySelector("footer");
  if (footer !== null) {
    footer.innerHTML = `
    <img src=img/Avatar.png alt=David-Avatar style='border-radius: 50%;width: 52px;height: 52px;' />
    <ul>
      <li class="mail">
        <a 
        title=Mail 
        href="mailto:davidomotoso45@gmail.com" 
        rel="noopener">Mail</a>
      </li>
      <li class="twitter">
        <a
        title=Twitter
          target="_blank"
          href="https://twitter.com/Erudite_David"
          rel="noopener"
          >Twitter</a
        >
      </li>
      <li class="github">
        <a
        title=Github
          target="_blank"
          href="https://github.com/davidomotoso"
          rel="noopener"
          >Github</a
        >
      </li>
      <li class="instagram">
        <a
        title=Instagram
          target="_blank"
          href="https://www.instagram.com/daveomotoso_/"
          rel="noopener"
          >Instagram</a
        >
      </li>
    </ul>
    <p>2023 all rights reserved</p>`;
  }
};

footer();

const body = document.body;
// Responsive navBar
const displayNav = () => {
  let menu = document.querySelector(".bi-list");
  let cancel = document.querySelector(".bi-x-lg");
  let ul = document.querySelector("ul");
  if (ul !== null) {
    let nav = ul.parentElement;
    function resize() {
      window.addEventListener("resize", () => {
        if (window.innerWidth <= 540) {
          menu.style.display = "block";
          ul.style.display = "none";
          menu.addEventListener("click", () => {
            ul.style.display = "block";
            cancel.style.display = "block";
            menu.style.display = "none";
            nav.appendChild(ul);
          });
          cancel.addEventListener("click", () => {
            menu.style.display = "block";
            cancel.style.display = "none";
            ul.style.display = "none";
          });
        } else {
          menu.style.display = "none";
          ul.style.display = "flex";
        }
      });
    }
    function Default() {
      if (window.innerWidth <= 540) {
        menu.style.display = "block";
        ul.style.display = "none";
        menu.addEventListener("click", () => {
          ul.style.display = "block";
          cancel.style.display = "block";
          menu.style.display = "none";
          nav.appendChild(ul);
        });
        cancel.addEventListener("click", () => {
          menu.style.display = "block";
          cancel.style.display = "none";
          ul.style.display = "none";
        });
      }
    }
    resize();
    Default();
  } else {
    return;
  }
};
displayNav();

// Dark and light mode feature for different HTML tags

const buttons = (button) => {
  for (let i = 0; i < button.length; i++) {
    if (body.classList == "light") {
      button[i].classList.add("dark");
      button[i].classList.remove("light");
      button[i].style.borderColor = "#fafafa";
    } else {
      button[i].classList.remove("dark");
      button[i].classList.add("light");
      button[i].style.borderColor = "#1f1f1f";
    }
  }
};

const basicChanges = (changes) => {
  for (let i = 0; i < changes.length; i++) {
    if (body.classList == "light") {
      changes[i].classList.add("dark");
      changes[i].classList.remove("light");
    } else {
      changes[i].classList.remove("dark");
      changes[i].classList.add("light");
    }
  }
};
const changeCancel = (cancel) => {
  if (body.classList == "light") {
    cancel.style.borderColor = "#fafafa";
  } else {
    cancel.style.borderColor = "#1f1f1f";
  }
};
const textarea = (text) => {
  if (text !== null) {
    if (body.classList == "light") {
      text.classList.remove("light");
      text.classList.add("dark");
    } else {
      text.classList.remove("dark");
      text.classList.add("light");
    }
  } else {
    return;
  }
};
function indicator(theme) {
  if (theme.classList.contains("bi-brightness-high-fill")) {
    theme.classList.remove("bi-brightness-high-fill");
    theme.classList.add("bi-moon-stars-fill");
    theme.style.borderColor = "#1f1f1f";
    theme.setAttribute("title", "Activate dark mode");
  } else {
    theme.classList.remove("bi-moon-stars-fill");
    theme.classList.add("bi-brightness-high-fill");
    theme.style.borderColor = "#fafafa";
    theme.setAttribute("title", "Activate light mode");
  }
}
function myImg(img) {
  if (img !== null) {
    if (body.classList == "light") {
      img.addEventListener("mouseover", () => {
        img.style.backgroundColor = "#252525";
      });
    } else {
      img.addEventListener("mouseover", () => {
        img.style.backgroundColor = "#f0f0f0e0";
      });
    }

    img.addEventListener("mouseout", () => {
      img.style.backgroundColor = "transparent";
    });
  } else {
    return;
  }
}

function changefreecodecampSrc(freeCodeCamp) {
  if (freeCodeCamp !== null) {
    if (body.classList == "light") {
      freeCodeCamp.src = "img/freeCodeCamp-logo.png";
    } else {
      freeCodeCamp.src = "img/Light mode freeCodeCamp logo.png";
    }
  }
}

// Dark and mode feature
function local() {
  let a = document.querySelectorAll("a");
  const button = document.querySelectorAll("button");
  const input = document.querySelectorAll("input");
  const strong = document.querySelectorAll("strong");
  const text = document.querySelector("textarea");
  let cancel = document.querySelector(".bi-x-lg");
  const selfImg = document.querySelector(".self-img>img");
  const changeTheme = document.querySelector(".change-theme");
  const freeCodeCamp = document.querySelector(".freeCodeCamp-logo>img");
  buttons(button);
  basicChanges(a);
  basicChanges(strong);
  basicChanges(input);
  changeCancel(cancel);
  textarea(text);
  myImg(selfImg);
  indicator(changeTheme);
  changefreecodecampSrc(freeCodeCamp);

  if (body.classList == "null") {
    body.classList.add("light");
    body.classList.remove("null");
  } else if (body.classList == "light") {
    body.classList.remove("light");
    body.classList.add("dark");
    return localStorage.setItem("theme", "dark");
  } else {
    body.classList.remove("dark");
    body.classList.add("light");
    return localStorage.setItem("theme", "light");
  }
}
const finalChanges = (changes) => {
  for (let i = 0; i < changes.length; i++) {
    if (body.classList == "light") {
      changes[i].classList.add("light");
      changes[i].classList.remove("dark");
    } else {
      changes[i].classList.remove("light");
      changes[i].classList.add("dark");
    }
  }
};

const finalButton = (button) => {
  for (let i = 0; i < button.length; i++) {
    if (body.classList == "light") {
      button[i].classList.add("light");
      button[i].classList.remove("dark");
      button[i].style.borderColor = "#1f1f1f";
    } else {
      button[i].classList.remove("light");
      button[i].classList.add("dark");
      button[i].style.borderColor = "#fafafa";
    }
  }
};

const finalfreecodecampSrc = (freeCodeCamp) => {
  if (freeCodeCamp !== null) {
    if (body.classList == "light") {
      freeCodeCamp.src = "img/Light mode freeCodeCamp logo.png";
    } else {
      freeCodeCamp.src = "img/freeCodeCamp-logo.png";
    }
  }
};

const Theme = (theme) => {
  if (theme !== null) {
    if (body.classList == "light") {
      theme.setAttribute("title", "Activate dark Mode");
      theme.classList.remove("bi-brightness-high-fill");
      theme.classList.add("bi-moon-stars-fill");
      theme.style.borderColor = "#1f1f1f";
    } else {
      theme.setAttribute("title", "Activate light Mode");
      theme.classList.remove("bi-moon-stars-fill");
      theme.classList.add("bi-brightness-high-fill");
      theme.style.borderColor = "#fafafa";
    }
  }
};

const textPath = (text) => {
  if (text !== null) {
    if (body.classList == "light") {
      text.classList.add("light");
      text.classList.remove("dark");
    } else {
      text.classList.add("dark");
      text.classList.remove("light");
    }
  } else {
    return;
  }
};

// This function returns the mode(dark/light) of the website
function finale() {
  let theme = localStorage.getItem("theme");
  let anchor = document.querySelectorAll("a");
  const button = document.querySelectorAll("button");
  const input = document.querySelectorAll("input");
  const strong = document.querySelectorAll("strong");
  const text = document.querySelector("textarea");
  const changeTheme = document.querySelector(".change-theme");
  const freeCodeCamp = document.querySelector(".freeCodeCamp-logo>img");
  body.classList.add(theme);

  // anchor tags
  finalChanges(anchor);

  // Change theme
  Theme(changeTheme);
  // button tags
  finalButton(button);
  // input tags
  finalChanges(input);

  // strong tags
  finalChanges(strong);

  // freeCodeCamp src change
  finalfreecodecampSrc(freeCodeCamp);

  // textarea
  textPath(text);
}
finale();

const emailVal = () => {
  const btn = document.getElementById("btn");
  if (btn !== null) {
    btn.addEventListener("click", () => {
      const email = document.getElementById("email");
      // storing the users email in the localStorage
      sessionStorage.setItem("Email", email.value);
    });
  } else {
    return;
  }
};
emailVal();
const returnEmail = () => {
  // returning the email into the html structure
  const email = sessionStorage.getItem("Email");
  const successEml = document.querySelector(".email");
  if (successEml !== null) {
    successEml.textContent = `A confirmation message would be sent at ${email}`;
  } else {
    return;
  }
};
returnEmail();
