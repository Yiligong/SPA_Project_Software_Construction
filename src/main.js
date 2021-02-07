/**
 * Written by A. Hinds with Z. Afzal 2018 for UNSW CSE.
 * 
 * Updated 2019.
 */

// import your own scripts here.
import { Header, main } from "./header_body.js";
//import main from "./header_body.js";
// your app must take an apiUrl as an argument --
// this will allow us to verify your apps behaviour with 
// different datasets.
function initApp(apiUrl) {
    const div_root = document.getElementById("root"); //get element id = "root"
    while (div_root.lastElementChild != null) {
        div_root.removeChild(div_root.lastElementChild);
    }
    div_root.appendChild(Header(apiUrl));
    div_root.appendChild(main(apiUrl));
    // your app initialisation goes here
}

export default initApp;