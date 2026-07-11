import "./style.css";
import javascriptLogo from "./assets/javascript.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import tab from "./tab.module.css";
import engines from "./engines.json";

document.querySelector("#app").innerHTML = `
<section class="${tab.main}">
    <h1 class="${tab.title}">SuperiorTab</h1>
    <form id="search">
        <input type="text" id="searchbar" placeholder="Search the web"></input>
    </form>
    <details class="${tab.dropdown}">
        <summary>Search Engines</summary>
        <ul>
            ${engines.map((engine) => {
              return `<li><a href="#">${engine.name}</a></li>`;
            })}
        </ul>
    </details
</section>
`;

document.querySelector("#search").addEventListener("submit", (event) => {
  event.preventDefault();
  window.location.href = `${engines[0].prefix}${document.querySelector("#searchbar").value.trim()}`;
});
