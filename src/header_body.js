import feed_produce from "./feed_produce.js";
import auth_click from "./auth_click.js";
import logout from "./logout.js";
import { fetch_feed } from './user_feed.js'
//this module is about to create header banner and the main body page

function Header(apiUrl) { //header function generate banner information
    const header = document.createElement("header"); //create element header
    header.className = "banner";
    header.id = "nav";
    const logo = document.createElement("h1"); //create element h1
    logo.id = "logo";
    logo.className = "flex-center";
    logo.appendChild(document.createTextNode("Seddit"));
    const ul = document.createElement("ul"); //create element ul
    ul.className = "nav";
    for (let i = 0; i < 4; i++) {
        const li = document.createElement("li"); //create three element li(search, login, sign up,user icon)
        li.className = "nav-item";
        if (i == 0) {
            const search_input = document.createElement("input");
            search_input.id = "search";
            search_input.setAttribute("data-id-search", "");
            search_input.setAttribute("placeholder", "Search Seddit");
            search_input.type = "search";
            li.appendChild(search_input);
            ul.appendChild(li) //ul append child li
        } else if (i == 1) {
            const a = "login";
            const login_bu = document.createElement("button");
            login_bu.id = "login";
            login_bu.setAttribute("data-id-login", "");
            login_bu.className = "button button-primary";
            //login_bu.style.display = "block"; //when no one logged in login button should be visible
            login_bu.addEventListener("click", function() {
                auth_click(a, apiUrl)
            }); //add event listener to login button
            const login_modal = document.getElementById("login_modal");
            login_bu.textContent = "Log In";
            li.appendChild(login_bu);
            ul.appendChild(li);

        } else if (i == 2) {
            const b = "sign up";
            const sign_bu = document.createElement("button");
            sign_bu.id = "signup";
            sign_bu.setAttribute("data-id-signup", "");
            sign_bu.className = "button button-secondary";
            sign_bu.addEventListener("click", function() {
                auth_click(b, apiUrl)
            }); //add event listener to sign in button
            sign_bu.textContent = "Sign Up";
            li.appendChild(sign_bu);
            ul.appendChild(li);
        } else {
            const c = "profile";
            const d = "login";
            const dropdown = document.createElement("div");
            const user_icon = document.createElement("span"); // create user icon by using font-awesome
            const user_div = document.createElement("div");
            const profile = document.createElement("li");
            const profile_du = document.createElement("li");
            const main_page = document.createElement("li");
            const sign_li = document.createElement("li");
            const log_out = document.createElement("li");
            profile.id = "profile";
            profile_du.id = "profile_du";
            main_page.id = "main_page";
            sign_li.id = "sign_li";
            log_out.id = "logout";
            profile.textContent = "My profile";
            profile_du.textContent = "My profile";
            main_page.textContent = "Main page";
            sign_li.textContent = "Sign in";
            log_out.textContent = "Log out";
            if (sessionStorage.getItem("token") == null) { //if user is not logged in, profile page will be log in page and after successfully logged.
                //page will be redirected to my profile
                profile.addEventListener("click", function() {
                    auth_click(c, apiUrl);
                });
                sign_li.addEventListener("click", function() {
                    auth_click(d, apiUrl);
                });
                sign_li.style.display = "block";
                log_out.style.display = "none";
                profile.style.display = "block";
                profile_du.style.display = "none";
                main_page.style.display = "none";

            } else { //if user is already logged in, click profile can direct to profile page and click log out will log out from page
                profile.addEventListener("click", function() {
                    fetch_profile(apiUrl);
                });
                log_out.addEventListener("click", function() {
                    logout(apiUrl);
                });
                main_page.addEventListener("click", function() {
                    fetch_feed(apiUrl);
                });
                sign_li.style.display = "none";
                log_out.style.display = "block";
                profile.style.display = "block";
                profile_du.style.display = "none";
                main_page.style.display = "block";
            }
            dropdown.className = "dropdown";
            user_icon.className = "fa fa-user fa-lg";
            user_div.className = "dropdown-content"
            user_div.appendChild(profile);
            user_div.appendChild(profile_du);
            user_div.appendChild(main_page);
            user_div.appendChild(sign_li);
            user_div.appendChild(log_out);
            dropdown.appendChild(user_icon);
            dropdown.appendChild(user_div);
            // li.appendChild(user_icon);
            // li.appendChild(user_div);
            li.appendChild(dropdown);
            ul.appendChild(li);
        }
    }
    header.appendChild(logo);
    header.appendChild(ul);
    return header;

}

function main(apiUrl) { //mainly for generating the front page feed content
    const ul_feed = document.createElement("ul");
    ul_feed.id = "feed";
    const settings = {
        "method": "GET",
        "headers": {
            'Content-Type': 'application/json'
        }
    }
    fetch(`${apiUrl}/post/public`, settings)
        .then(response => response.json())
        .then(j => feed_produce(j.posts, ul_feed, apiUrl))
    return ul_feed;
}



export { Header, main };