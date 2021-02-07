function Signin_click() {
    const signin_modal = document.createElement("div"); //create login modal
    signin_modal.id = "signin_modal";
    signin_modal.className = "modal";
    const div_form = document.createElement("div");
    div_form.className = "modal-content";
    const signin_form = document.createElement("form"); //create form tag, 
    signin_form.id = "signin_form";
    //login_form.action = ...                            //action need to be an api
    signin_form.method = "POST"; //sumbit method is post
    const div_container = document.createElement("div"); //create div container to contain username,pwd and sign in button
    div_container.className = "container";
    //login_form.action = "";
    const usr_name = document.createElement("input");
    const password = document.createElement("input");
    const confirm_pass = document.createElement("input");
    const sign_up = document.createElement("button");
    const cancel = document.createElement("button");
    usr_name.type = "text";
    password.type = "password";
    confirm_pass.type = "password";
    sign_up.type = "submit";
    //cancel.className = "cancelbtn";
    usr_name.setAttribute("placeholder", "username");
    password.setAttribute("placeholder", "password");
    confirm_pass.setAttribute("placeholder", "please confirm your password");
    sign_up.innerText = "Sign Up";
    cancel.innerText = "Cancel";
    cancel.addEventListener("click", (e) => {
        signin_modal.style.display = "none";
    });
    div_container.appendChild(usr_name);
    div_container.appendChild(password);
    div_container.appendChild(confirm_pass);
    div_container.appendChild(sign_up);
    signin_form.appendChild(div_container); //include div_container into login_form
    //login_form.appendChild(cancel);
    div_form.appendChild(signin_form);
    div_form.appendChild(cancel);
    signin_modal.appendChild(div_form);
    document.body.appendChild(signin_modal);
    signin_modal.style.display = "block";
    window.onclick = function(event) { //reference https://www.w3schools.com/howto/howto_css_modals.asp
        if (event.target == signin_modal) {
            signin_modal.style.display = "none";
        }
    }
}

function Signin_click() {
    const signin_modal = document.createElement("div"); //create login modal
    signin_modal.id = "signin_modal";
    signin_modal.className = "modal";
    const div_form = document.createElement("div");
    div_form.className = "modal-content";
    const signin_form = document.createElement("form"); //create form tag, 
    signin_form.id = "signin_form";
    //login_form.action = ...                            //action need to be an api
    signin_form.method = "POST"; //sumbit method is post
    const div_container = document.createElement("div"); //create div container to contain username,pwd and sign in button
    div_container.className = "container";
    //login_form.action = "";
    const usr_name = document.createElement("input");
    const password = document.createElement("input");
    const confirm_pass = document.createElement("input");
    const sign_up = document.createElement("button");
    const cancel = document.createElement("button");
    usr_name.type = "text";
    password.type = "password";
    confirm_pass.type = "password";
    sign_up.type = "submit";
    //cancel.className = "cancelbtn";
    usr_name.setAttribute("placeholder", "username");
    password.setAttribute("placeholder", "password");
    confirm_pass.setAttribute("placeholder", "please confirm your password");
    sign_up.innerText = "Sign Up";
    cancel.innerText = "Cancel";
    cancel.addEventListener("click", (e) => {
        signin_modal.style.display = "none";
    });
    div_container.appendChild(usr_name);
    div_container.appendChild(password);
    div_container.appendChild(confirm_pass);
    div_container.appendChild(sign_up);
    signin_form.appendChild(div_container); //include div_container into login_form
    //login_form.appendChild(cancel);
    div_form.appendChild(signin_form);
    div_form.appendChild(cancel);
    signin_modal.appendChild(div_form);
    document.body.appendChild(signin_modal);
    signin_modal.style.display = "block";
    window.onclick = function(event) { //reference https://www.w3schools.com/howto/howto_css_modals.asp
        if (event.target == signin_modal) {
            signin_modal.style.display = "none";
        }
    }
}