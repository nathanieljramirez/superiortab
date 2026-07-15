import "./style.css";
import tab from "./tab.module.css";
import google from "./assets/google.svg";
import duckduckgo from "./assets/duckduckgo.svg";
import bing from "./assets/bing.svg";

const engines = [
  {
    name: "Google",
    prefix: "https://www.google.com/search?tbs=1&q=",
    icon: google,
  },
  {
    name: "DuckDuckGo",
    prefix: "https://noai.duckduckgo.com/?q=",
    icon: duckduckgo,
  },
  {
    name: "Bing",
    prefix: "https://www.bing.com/search?copilot=off&q=",
    icon: bing,
  },
];

let selectedEngine = engines[0];

document.querySelector("#app").innerHTML = `
<section class="${tab.main}">
    <div class="${tab.title}">
      <h1>SuperiorTab</h1>
      <p>AI free internet browsing</p>
    </div>
    <form id="search">
        <input type="text" id="searchbar" placeholder="Search the web"></input>
    </form>
</section>

<button class="${tab.edit}">
  <svg viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0.707107 9.19239L2.82843 8.48528L8.48528 2.82843L7.07107 1.41421L1.41421 7.07107L0.707107 9.19239Z" fill="white"/>
    <path d="M7.42462 1.06066L8.83883 2.47487L9.89949 1.41421L8.48528 0L7.42462 1.06066Z" fill="white"/>
  </svg>
</button>

<section class="${tab.editor}" style="display:none;">
  <h3>Background</h3>
  <button class="${tab.background}" id="color"></button>
  <h3>Search Engine</h3>
    <details class="${tab.dropdown}">
      <summary><img src="${selectedEngine.icon}"> ${selectedEngine.name}</summary>
      <ul id="items">
          ${engines
            .map((engine) => {
              return `<li>${engine.name}</li>`;
            })
            .join("")}
      </ul>
    </details>
</section>
`;

const items = document.querySelectorAll("#items li");

items.forEach((item, index) => {
  item.addEventListener("click", () => {
    selectedEngine = engines[index];

    const summary = document.querySelector("summary");
    summary.innerHTML = `<img src="${selectedEngine.icon}"> ${selectedEngine.name}`;

    const dropdown = document.querySelector("." + tab.dropdown);
    dropdown.removeAttribute("open");
  });
});

document.querySelector("#search").addEventListener("submit", (event) => {
  event.preventDefault();
  window.location.href = `${selectedEngine.prefix}${document.querySelector("#searchbar").value.trim()}`;
});

document.querySelector("." + tab.edit).addEventListener("click", () => {
  const editor = document.querySelector("." + tab.editor);
  if (editor.style.display === "none") {
    editor.style.display = "inline-block";
  } else {
    editor.style.display = "none";
  }
});

document.querySelector("#color").addEventListener("click", () => {
  const color = prompt("Add new color below:");
  const root = document.documentElement;
  root.style.setProperty("--bg", color);
});
