import { Header, main } from "./header_body.js";
//logging out page
function logout(apiUrl) { //function of log out
    sessionStorage.removeItem("token");
    const root = document.getElementById("root");
    while (root.lastElementChild != null) {
        root.removeChild(root.lastElementChild);
    }
    root.appendChild(Header(apiUrl));
    root.appendChild(main(apiUrl));
}

export default logout;