import "./style.css";
import javascriptLogo from "./assets/javascript.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import tab from "./tab.module.css";
import { search } from "./search.js";

document.querySelector("#app").innerHTML = `
<section class="${tab.main}">
    <h1 class="${tab.title}">SuperiorTab</h1>
    <form id="search">
        <input type="text" id="searchbar" placeholder="Search the web"></input>
    </form>
</section>
`;

document.querySelector("#search").addEventListener("submit", (event) => {
  event.preventDefault();

  search(document.querySelector("#searchbar").value.trim());
});
