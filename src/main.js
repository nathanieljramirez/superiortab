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
    <div class="${tab.row}">
      <p>Search engine:</p>
      <details class="${tab.dropdown}">
        <summary>${selectedEngine.name}</summary>
        <ul id="items">
            ${engines
              .map((engine) => {
                return `<li>${engine.name}</li>`;
              })
              .join("")}
        </ul>
      </details>
    </div>
</section>
`;

const items = document.querySelectorAll("#items li");

items.forEach((item, index) => {
  item.addEventListener("click", () => {
    selectedEngine = engines[index];
    document.querySelector("summary").textContent = selectedEngine.name;

    const dropdown = document.querySelector("." + tab.dropdown);
    dropdown.removeAttribute("open");
  });
});

document.querySelector("#search").addEventListener("submit", (event) => {
  event.preventDefault();
  window.location.href = `${selectedEngine.prefix}${document.querySelector("#searchbar").value.trim()}`;
});
