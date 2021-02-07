/**
 * Written by A. Hinds with Z. Afzal 2018 for UNSW CSE.
 *
 * Updated 2019.
 */

// import your app here
import initApp from './main.js';

// const API_URL = 'http://127.0.0.1:8080/data';

// comment above line and uncomment below line when when you start using the back-end server
import API_URL from './backend_url.js';
// const login_bu = document.getElementsByClassName("button button-primary")[0];
// login_bu.addEventListener("click", (e) => {
//     const div = document.createElement("div");
//     const text = document.createElement("input");
//     div.appendChild(div);
//     document.body.appendChild(div);
// });
// console.log("ola");
// and run it
//sessionStorage.clear();
//const api = "http://127.0.0.1:5000/";
// const div_root = document.getElementById("root"); //get element id = "root"

// function Header() { //header function generate banner information
//     const header = document.createElement("header"); //create element header
//     header.className = "banner";
//     header.id = "nav";
//     const logo = document.createElement("h1"); //create element h1
//     logo.id = "logo";
//     logo.className = "flex-center";
//     logo.appendChild(document.createTextNode("Seddit"));
//     const ul = document.createElement("ul"); //create element ul
//     ul.className = "nav";
//     for (let i = 0; i < 3; i++) {
//         const li = document.createElement("li"); //create three element li(search, login, sign up)
//         li.className = "nav-item";
//         if (i == 0) {
//             const search_input = document.createElement("input");
//             search_input.id = "search";
//             search_input.setAttribute("data-id-search", "");
//             search_input.setAttribute("placeholder", "Search Seddit");
//             search_input.type = "search";
//             li.appendChild(search_input);
//             ul.appendChild(li) //ul append child li
//         } else if (i == 1) {
//             const a = "login";
//             const login_bu = document.createElement("button");
//             login_bu.setAttribute("data-id-login", "");
//             login_bu.className = "button button-primary";
//             login_bu.addEventListener("click", function() {
//                 auth_click(a)
//             }); //add event listener to login button
//             const login_modal = document.getElementById("login_modal");
//             login_bu.appendChild(document.createTextNode("Log In"));
//             li.appendChild(login_bu);
//             ul.appendChild(li);

//         } else {
//             const b = "sign up";
//             const sign_bu = document.createElement("button");
//             sign_bu.setAttribute("data-id-signup", "");
//             sign_bu.className = "button button-secondary";
//             sign_bu.addEventListener("click", function() {
//                 auth_click(b)
//             }); //add event listener to sign in button
//             sign_bu.appendChild(document.createTextNode("Sign Up"));
//             li.appendChild(sign_bu);
//             ul.appendChild(li);
//         }
//     }
//     header.appendChild(logo);
//     header.appendChild(ul);
//     return header;
// }

// function main() {
//     // const main = document.createElement("main");
//     // main.setAttribute("role","main");
//     const ul_feed = document.createElement("ul");
//     ul_feed.id = "feed";
//     const settings = {
//         "method": "GET",
//         "headers": {
//             'Content-Type': 'application/json'
//         }
//     }
//     fetch(`${api}post/public`, settings)
//         .then(response => response.json())
//         .then(j => feed_produce(j.posts, ul_feed))
//     return ul_feed;
// }
// div_root.appendChild(Header());
// div_root.appendChild(main());

// function auth_click(type_name) {
//     const auth_modal = document.createElement("div"); //create login modal
//     auth_modal.id = "auth_modal";
//     auth_modal.className = "modal";
//     const div_form = document.createElement("div");
//     div_form.className = "modal-content";
//     const auth_form = document.createElement("form"); //create form tag, 
//     auth_form.id = "auth_form";
//     //login_form.action = "http://127.0.0.1:5000/auth/login" //action need to be an api
//     auth_form.method = "POST"; //sumbit method is post
//     const div_container = document.createElement("div"); //create div container to contain username,pwd and sign in button
//     div_container.className = "container";
//     //login_form.action = "";
//     const usr_name = document.createElement("input"); //username input
//     const password = document.createElement("input"); //password input
//     const confirm_pass = document.createElement("input"); //confirm password input
//     const email = document.createElement("input"); //email input
//     const name = document.createElement("input"); //name input
//     const sign_in = document.createElement("button"); //submit button 
//     const label = document.createElement("label"); //label
//     const cancel = document.createElement("button"); //cancel button
//     usr_name.type = "text"; //
//     password.type = "password";
//     confirm_pass.type = "password";
//     email.type = "text";
//     name.type = "text";
//     sign_in.type = "submit";
//     label.style.display = "none";
//     usr_name.className = "text_input";
//     password.className = "text_input";
//     confirm_pass.className = "text_input";
//     email.className = "text_input";
//     name.className = "text_input";
//     label.className = "label";
//     //cancel.className = "cancelbtn";
//     usr_name.setAttribute("placeholder", "username");
//     password.setAttribute("placeholder", "password");
//     confirm_pass.setAttribute("placeholder", "confirm your password");
//     email.setAttribute("placeholder", "email address");
//     name.setAttribute("placeholder", "name");
//     usr_name.setAttribute("required", "");
//     password.setAttribute("required", "");
//     confirm_pass.setAttribute("required", "");
//     cancel.innerText = "Cancel";
//     //label.innerText = "Invalid Username or Password";                      
//     cancel.addEventListener("click", (e) => {
//         auth_modal.style.display = "none";
//     });
//     if (type_name == "login") { //if auth mode is login
//         sign_in.innerText = "Sign In";
//         div_container.appendChild(usr_name);
//         div_container.appendChild(password);
//         div_container.appendChild(label);
//         div_container.appendChild(sign_in);
//     } else {
//         sign_in.innerText = "Sign Up"; //if auth mode is sign up
//         div_container.appendChild(usr_name);
//         div_container.appendChild(password);
//         div_container.appendChild(confirm_pass);
//         div_container.appendChild(email);
//         div_container.appendChild(name);
//         div_container.appendChild(label);
//         div_container.appendChild(sign_in);
//     }
//     auth_form.appendChild(div_container); //include div_container into login_form
//     //login_form.appendChild(cancel);
//     div_form.appendChild(auth_form);
//     div_form.appendChild(cancel);
//     auth_modal.appendChild(div_form);
//     document.body.appendChild(auth_modal);
//     auth_modal.style.display = "block";
//     window.onclick = function(event) { //reference https://www.w3schools.com/howto/howto_css_modals.asp
//         if (event.target == auth_modal) {
//             auth_modal.style.display = "none";
//         }
//     }
//     auth_form.addEventListener("submit", function(event) {
//         event.preventDefault();
//         if (type_name == "login") {
//             const body = {
//                 "username": usr_name.value,
//                 "password": password.value
//             };
//             const settings = {
//                 "method": "POST",
//                 "headers": {
//                     'Content-Type': 'application/json'
//                 },
//                 "body": JSON.stringify(body)
//             };
//             fetch(`${api}auth/login`, settings) //send login form to server
//                 .then(response => { //parse response message
//                     const status = response.status;
//                     if (status == "403") { //deal with error
//                         label.innerText = "Invalid Username or Password";
//                         label.style.display = "block";
//                     } else if (status == "200") {
//                         label.style.display = "none";
//                         auth_modal.style.display = "none";
//                         sessionStorage.setItem("username", usr_name.value);
//                         user_feed(response.json()); //IF LOGIN INFO CORRECT FETCH USER FEED
//                         //response.json().then(json => console.log(json))
//                     }
//                     //console.log(status);
//                     //return response.json();
//                     //console.log(response)
//                 });
//         } else {
//             const body = {
//                 "username": usr_name.value,
//                 "password": password.value,
//                 "email": email.value,
//                 "name": name.value
//             };
//             const settings = {
//                 "method": "POST",
//                 "headers": {
//                     'Content-Type': 'application/json'
//                 },
//                 "body": JSON.stringify(body)
//             };
//             fetch(`${api}auth/signup`, settings) //send sign up form to server
//                 .then(response => {
//                     const status = response.status;
//                     if (status == "409") { //deal with error
//                         label.innerText = "Username exists";
//                         label.style.display = "block";
//                     } else if (status == "200") {
//                         label.style.display = "none";
//                         auth_modal.style.display = "none";
//                         response.json().then(json => console.log(json))
//                     }
//                 });
//         }
//     });
// }

// function user_feed(promise) {
//     promise.then(json => {
//         sessionStorage.setItem("token", json.token); //SAVE TOKEN IN SEESIONSTORAGE
//         fetch_feed(); //FETCH FEED
//         console.log(json.token);
//         console.log(sessionStorage.getItem("token"));
//     });
// }

// function fetch_feed() {
//     const settings = {
//         "method": "GET",
//         "headers": {
//             'Content-Type': 'application/json',
//             'Authorization': 'Token ' + sessionStorage.getItem("token")
//         }
//     };
//     fetch(`${api}user/feed`, settings) //?p=0&n=10
//         .then(response => {
//             const status = response.status;
//             return response.json()
//         })
//         .then(j => {
//             console.log(j.posts)
//             const ul_feed = document.getElementById("feed");
//             feed_produce(j.posts, ul_feed);
//         });
// }

// function feed_produce(posts, ul_feed) {
//     while (ul_feed.lastElementChild != null) {
//         ul_feed.removeChild(ul_feed.lastElementChild);
//     }
//     const feed_header = document.createElement("div");
//     feed_header.className = "feed-header";
//     const h3 = document.createElement("h3");
//     h3.className = "feed-title alt-text";
//     h3.textContent = "Popular Posts"
//     const post_bu = document.createElement("button");
//     post_bu.className = "button button-secondary";
//     post_bu.textContent = "Post";
//     feed_header.appendChild(h3);
//     feed_header.appendChild(post_bu);
//     ul_feed.appendChild(feed_header);
//     for (const post of posts) {
//         const li = document.createElement("li");
//         li.className = "post";
//         li.setAttribute("data-id-post", "");
//         const upvote = document.createElement("div"); //number of upvotes
//         upvote.className = "vote";
//         upvote.setAttribute("data-id-upvotes", "");
//         const content = document.createElement("div"); //contents include (author,title,time,post description,image)
//         content.className = "content";
//         const title = document.createElement("h4");
//         title.setAttribute("data-id-title", "");
//         title.className = "post-title alt-text";
//         const author = document.createElement("p");
//         author.className = "post-author";
//         author.setAttribute("data-id-author", "");
//         const description = document.createElement("p");
//         const time = document.createElement("p");
//         const image = document.createElement("img");
//         const comments = document.createElement("p"); //number of comments
//         const suseddit = document.createElement("p");
//         upvote.textContent = post.meta.upvotes.length;
//         title.textContent = post.title;
//         author.textContent = post.meta.author;
//         description.textContent = post.text;
//         time.textContent = post.meta.published;
//         //image
//         comments.textContent = "comments " + post.comments.length;
//         suseddit.textContent = post.meta.subseddit;
//         content.appendChild(title);
//         content.appendChild(description);
//         content.appendChild(time);
//         content.appendChild(author);
//         //content.appendChild(image);
//         li.appendChild(upvote);
//         li.appendChild(content);
//         li.appendChild(comments);
//         li.appendChild(suseddit);
//         ul_feed.appendChild(li);

//     }
// }



// const login_button = document.createElement("button");
// div_root.appendChild(login_button)
initApp(API_URL);
// console.log("llll");