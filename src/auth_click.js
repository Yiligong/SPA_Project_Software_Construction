import feed_produce from "./feed_produce.js";
import logout from "./logout.js";
import { user_feed, fetch_feed } from './user_feed.js';
import { fetch_profile } from './profile.js';
//this module is about login and sign up module and include fetch data when user successfully logged in

function auth_click(type_name, api) {
    console.log(type_name);
    const auth_modal = document.createElement("div"); //create login modal
    auth_modal.id = "auth_modal";
    auth_modal.className = "modal";
    const div_form = document.createElement("div");
    div_form.className = "modal-content";
    const auth_form = document.createElement("form"); //create form tag, 
    //auth_form.id = "auth_form";
    //login_form.action = "http://127.0.0.1:5000/auth/login" //action need to be an api
    const div_container = document.createElement("div"); //create div container to contain username,pwd and sign in button
    div_container.className = "container";
    //login_form.action = "";
    const usr_name = document.createElement("input"); //username input
    const password = document.createElement("input"); //password input
    const confirm_pass = document.createElement("input"); //confirm password input
    const email = document.createElement("input"); //email input
    const name = document.createElement("input"); //name input
    const sign_in = document.createElement("button"); //submit button 
    const label = document.createElement("label"); //label
    const cancel = document.createElement("button"); //cancel button

    usr_name.type = "text";
    password.type = "password";
    confirm_pass.type = "password";
    email.type = "text";
    name.type = "text";
    sign_in.type = "submit";
    label.style.display = "none";
    usr_name.className = "text_input";
    password.className = "text_input";
    confirm_pass.className = "text_input";
    email.className = "text_input";
    name.className = "text_input";
    label.className = "label";
    //cancel.className = "cancelbtn";
    usr_name.setAttribute("placeholder", "username");
    password.setAttribute("placeholder", "password");
    confirm_pass.setAttribute("placeholder", "confirm your password");
    email.setAttribute("placeholder", "email address");
    name.setAttribute("placeholder", "name");
    usr_name.setAttribute("required", "");
    password.setAttribute("required", "");
    confirm_pass.setAttribute("required", "");
    cancel.textContent = "Cancel";
    //label.innerText = "Invalid Username or Password";                      
    cancel.addEventListener("click", (e) => {
        auth_modal.style.display = "none";
    });
    if (type_name == "login" || type_name == "profile") { //if auth mode is login
        sign_in.textContent = "Sign In";
        div_container.appendChild(usr_name);
        div_container.appendChild(password);
        div_container.appendChild(label);
        div_container.appendChild(sign_in);
    } else if (type_name == "sign up") {
        sign_in.textContent = "Sign Up"; //if auth mode is sign up
        div_container.appendChild(usr_name);
        div_container.appendChild(password);
        div_container.appendChild(confirm_pass);
        div_container.appendChild(email);
        div_container.appendChild(name);
        div_container.appendChild(label);
        div_container.appendChild(sign_in);
    }
    auth_form.appendChild(div_container); //include div_container into login_form
    //login_form.appendChild(cancel);
    div_form.appendChild(auth_form);
    div_form.appendChild(cancel);
    auth_modal.appendChild(div_form);
    document.body.appendChild(auth_modal);
    auth_modal.style.display = "block";
    console.log("hello");
    window.onclick = function(event) { //reference https://www.w3schools.com/howto/howto_css_modals.asp
        if (event.target == auth_modal) {
            auth_modal.style.display = "none";
        }
    }
    auth_form.addEventListener("submit", function(event) {
        event.preventDefault();
        if (type_name == "login" || type_name == "profile") {
            const body = {
                "username": usr_name.value,
                "password": password.value
            };
            const settings = {
                "method": "POST",
                "headers": {
                    'Content-Type': 'application/json'
                },
                "body": JSON.stringify(body)
            };
            fetch(`${api}/auth/login`, settings) //send login form to server
                .then(response => { //parse response message
                    const status = response.status;
                    if (status == "403") { //deal with error
                        label.textContent = "Invalid Username or Password";
                        label.style.display = "block";
                    } else if (status == "200") { //if successfully logged in 
                        console.log(type_name);
                        label.style.display = "none";
                        auth_modal.style.display = "none";
                        sessionStorage.setItem("username", usr_name.value);
                        const login_bu = document.getElementById("login");
                        const profile = document.getElementById("profile");
                        const profile_du = document.getElementById("profile_du");
                        const main_page = document.getElementById("main_page");
                        const log_out = document.getElementById("logout");
                        const sign_li = document.getElementById("sign_li");
                        profile_du.addEventListener("click", function() {
                            fetch_profile(api);
                        });
                        main_page.addEventListener("click", function() {
                            fetch_feed(api);
                        });
                        sign_li.style.display = "none";
                        log_out.style.display = "block";
                        profile.style.display = "none";
                        profile_du.style.display = "block";
                        main_page.style.display = "block";
                        log_out.addEventListener("click", function() {
                            logout(api);
                        });
                        login_bu.style.display = "none";
                        user_feed(response.json(), type_name, api); //IF LOGIN INFO CORRECT FETCH USER FEED
                    }
                });
        } else {
            const pattern = /^[a-z0-9]+@[a-z0-9]+\.[a-z0-9]+$/i; //email need to match such pattern
            if (password.value != confirm_pass.value) { //password and confirm password need to be the same
                label.textContent = "Please confirm your password again";
                label.style.display = "block";
            } else if (email.value.search(pattern) == -1) {
                label.textContent = "Invalid email address";
                label.style.display = "block";
            } else {
                const body = {
                    "username": usr_name.value,
                    "password": password.value,
                    "email": email.value,
                    "name": name.value
                };
                const settings = {
                    "method": "POST",
                    "headers": {
                        'Content-Type': 'application/json'
                    },
                    "body": JSON.stringify(body)
                };
                fetch(`${api}/auth/signup`, settings) //send sign up form to server
                    .then(response => {
                        const status = response.status;
                        if (status == "409") { //deal with error
                            label.innerText = "Username exists";
                            label.style.display = "block";
                        } else if (status == "200") {
                            label.style.display = "none";
                            auth_modal.style.display = "none";
                            response.json().then(json => console.log(json))
                        }
                    });
            }
        }
    });
}
export default auth_click;