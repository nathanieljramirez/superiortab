import "./style.css";
import javascriptLogo from "./assets/javascript.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import tab from "./tab.module.css";
import { setupCounter } from "./counter.js";

document.querySelector("#app").innerHTML = `
<section class="${tab.main}">
    <h1 class="${tab.title}">SuperiorTab</h1>
    <form>
        <input type="text" placeholder="Search the web"></input>
    </form>
</section>
`;

setupCounter(document.querySelector("#counter"));
