//This page shows who upvote the post and update the upvote 
function upvotes_show(popup, upvotes, api) { //show upvotes when click the number of upvotes
    popup.textContent = "Please sign in";
    if (sessionStorage.getItem("token") == null) {
        popup.style.visibility = "visible";
        setTimeout(function() {
            popup.style.visibility = "hidden";
        }, 1000)
    } else {
        console.log(sessionStorage.getItem("token"));
        const settings = {
            "method": "GET",
            "headers": {
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + sessionStorage.getItem("token")
            }
        }
        const promises = upvotes.map(u => fetch(`${api}/user?id=${u}`, settings)); //fetch the promises of all users who upvote this post
        Promise.all(promises)
            .then(response =>
                Promise.all(response.map(r => r.json()))
            )
            .then(j => create_upvote(j))
    }

}

function create_upvote(objects) { //create upvote modal //still small problem on modal can't move
    const upvote_modal = document.createElement("div");
    upvote_modal.id = "upvotes";
    upvote_modal.className = "modal";
    const upvote_content = document.createElement("div");
    upvote_content.className = "modal-content";
    objects.map((a) => {
        const usr_div = document.createElement("div");
        const usr_name = document.createElement("h3");
        const email = document.createElement("p");
        const followed_number = document.createElement("p");
        usr_name.textContent = a.username;
        email.textContent = a.email;
        followed_number.textContent = a.followed_num;
        usr_div.appendChild(usr_name);
        usr_div.appendChild(email);
        usr_div.appendChild(followed_number);
        upvote_content.appendChild(usr_div);
    })
    upvote_modal.appendChild(upvote_content);
    document.body.appendChild(upvote_modal);
    upvote_modal.style.display = "block"
    window.onclick = function(event) { //when click any place outside the modal, close the modal
        if (event.target == upvote_modal) {
            upvote_modal.style.display = "none";
        }
    }
}

function upvote_update(popup, heart, id, api) { //update upvotes when click little heart shape, small problems on session consistent
    popup.textContent = "Please sign in";
    if (sessionStorage.getItem("token") == null) {
        popup.style.visibility = "visible";
        setTimeout(function() {
            popup.style.visibility = "hidden";
        }, 1000)
    } else {
        if (heart.className == "heart") {
            //console.log(sessionStorage.getItem("token"));
            console.log(id);
            const settings = {
                "method": "PUT",
                "headers": {
                    'Content-Type': 'application/json',
                    'Authorization': 'Token ' + sessionStorage.getItem("token")
                }
            }
            fetch(`${api}/post/vote?id=${id}`, settings)
                .then(response => {
                    const status = response.status;
                    console.log(status);
                    if (status == '200') {
                        heart.className = "heart_like";
                    }
                })
        } else {
            console.log(id);
            const settings = {
                "method": "DELETE",
                "headers": {
                    'Content-Type': 'application/json',
                    'Authorization': 'Token ' + sessionStorage.getItem("token")
                }
            }
            fetch(`${api}/post/vote?id=${id}`, settings)
                .then(response => {
                    const status = response.status;
                    //console.log(status);
                    if (status == '200') {
                        heart.className = "heart";
                    }
                })
        }
    }
}

export { upvotes_show, upvote_update };