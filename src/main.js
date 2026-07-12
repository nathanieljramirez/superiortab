import "./style.css";
import javascriptLogo from "./assets/javascript.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import tab from "./tab.module.css";
import engines from "./engines.json";

let selectedEngine = engines[0];

document.querySelector("#app").innerHTML = `
<section class="${tab.main}">
    <h1 class="${tab.title}">SuperiorTab</h1>
    <form id="search">
        <input type="text" id="searchbar" placeholder="Search the web"></input>
    </form>
    <details class="${tab.dropdown}">
        <summary>${selectedEngine.name}</summary>
        <ul id="items">
            ${engines
              .map((engine) => {
                return `<li>${engine.name}</li>`;
              })
              .join("")}
        </ul>
    </details
</section>
`;

const items = document.querySelectorAll("#items li");

items.forEach((item, index) => {
  item.addEventListener("click", () => {
    selectedEngine = engines[index];
    document.querySelector("summary").textContent = selectedEngine.name;
  });
});

document.querySelector("#search").addEventListener("submit", (event) => {
  event.preventDefault();
  window.location.href = `${selectedEngine.prefix}${document.querySelector("#searchbar").value.trim()}`;
});
