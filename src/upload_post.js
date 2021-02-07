//This page shows modal of uploading posts
function upload_post(popup, api) {
    popup.textContent = "Please sign in";
    if (sessionStorage.getItem("token") == null) {
        popup.style.visibility = "visible";
        setTimeout(function() {
            popup.style.visibility = "hidden";
        }, 1000)
    } else {
        const upload_modal = document.createElement("div"); //create login modal
        upload_modal.id = "upload_modal";
        upload_modal.className = "modal";
        const div_form = document.createElement("div");
        div_form.className = "modal-content";
        const upload_form = document.createElement("form");
        const div_container = document.createElement("div"); //create div container to contain username,pwd and sign in button
        div_container.className = "container";
        const title = document.createElement("input"); //title input
        const text = document.createElement("textarea"); //text input
        const subseddit = document.createElement("input"); //subseddit input
        const image = document.createElement("img");
        const choose_img = document.createElement("input"); //choose image button 
        const label = document.createElement("label"); //label
        const upload_bu = document.createElement("button");
        const cancel = document.createElement("button"); //cancel button
        let file = null;
        title.type = "text";
        title.className = "text_input";
        text.className = "text_area";
        subseddit.type = "text";
        subseddit.className = "text_input";
        label.className = "label";
        choose_img.type = "file";
        choose_img.id = "choose_img";
        upload_bu.type = "submit"
        title.setAttribute("placeholder", "Add your title here");
        subseddit.setAttribute("placeholder", "Add subseddit");
        title.setAttribute("required", "");
        text.setAttribute("required", "");
        choose_img.textContent = "choose image";
        cancel.textContent = "Cancel";
        upload_bu.textContent = "Upload";
        cancel.addEventListener("click", (e) => {
            upload_modal.style.display = "none";
        });
        choose_img.addEventListener("change", (e) => { //load image and change it into base64
            file = document.querySelector('input[type=file]').files[0];
        })
        div_container.appendChild(title);
        div_container.appendChild(text);
        div_container.appendChild(subseddit);
        div_container.appendChild(choose_img);
        div_container.appendChild(upload_bu);
        upload_form.appendChild(div_container);
        div_form.appendChild(upload_form);
        div_form.appendChild(cancel);
        upload_modal.appendChild(div_form);
        document.body.appendChild(upload_modal);
        upload_modal.style.display = "block";
        upload_form.addEventListener("submit", function(event) {
            event.preventDefault();
            if (file) { //if upload an image, need to transfer it into base64 and then upload
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.addEventListener("load", function() {
                    let v = reader.result;
                    v = v.split(',')[1];
                    const body = {
                        "title": title.value,
                        "text": text.value,
                        "subseddit": subseddit.value,
                        "image": v
                    }
                    const settings = {
                        "method": "POST",
                        "headers": {
                            'Content-Type': 'application/json',
                            'Authorization': 'Token ' + sessionStorage.getItem("token")
                        },
                        "body": JSON.stringify(body)
                    }
                    fetch(`${api}/post`, settings)
                        .then(response => {
                            const status = response.status
                            if (status == '200') { //if successfully upload close modal
                                upload_modal.style.display = "none";
                            }
                        })
                }, false);
            } else { //if no image upload, image = null
                const body = {
                    "title": title.value,
                    "text": text.value,
                    "subseddit": subseddit.value,
                    "image": null //how to add image to?
                }
                const settings = {
                    "method": "POST",
                    "headers": {
                        'Content-Type': 'application/json',
                        'Authorization': 'Token ' + sessionStorage.getItem("token")
                    },
                    "body": JSON.stringify(body)
                }
                fetch(`${api}/post`, settings)
                    .then(response => {
                        const status = response.status
                        if (status == '200') {
                            upload_modal.style.display = "none";
                        }
                    })
            }
        })
        window.onclick = function(event) { //reference https://www.w3schools.com/howto/howto_css_modals.asp
            if (event.target == upload_modal) {
                upload_modal.style.display = "none";
            }
        }
    }
}

export default upload_post;