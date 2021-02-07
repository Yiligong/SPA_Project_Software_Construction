//This page create section to show comments
function comments_show(popup, comments_div, comments) { //pass content div and comments of post
    popup.textContent = "Please sign in";
    if (sessionStorage.getItem("token") == null) {
        popup.style.visibility = "visible";
        setTimeout(function() {
            popup.style.visibility = "hidden";
        }, 1000)
    } else {
        while (comments_div.lastElementChild != null) {
            comments_div.removeChild(comments_div.lastElementChild);
        }
        for (const comment of comments) {
            const comm_div = document.createElement("div"); //create each small section of each comment
            const name = document.createElement("h4"); //name title
            const com = document.createElement("p"); //comment content
            const time = document.createElement("label"); //time of comment
            name.textContent = comment.author;
            com.textContent = comment.comment;
            const time_format = new Date(comment.published * 1000);
            time.textContent = time_format.toLocaleString();
            comm_div.appendChild(name);
            comm_div.appendChild(com);
            comm_div.appendChild(time);
            comments_div.appendChild(comm_div);
        }
        const input_div = document.createElement("div");
        const input = document.createElement("textarea"); //create comment input area
        const comment_bu = document.createElement("button");
        input.setAttribute("placeholder", "What are your thoughts?"); //set input area placehoder value
        comment_bu.textContent = "comment";
        input_div.appendChild(input);
        input_div.appendChild(comment_bu);
        comments_div.appendChild(input_div);
        if (comments_div.style.display == "") { //if original style has no display attribute, set it to block when click it
            comments_div.style.display = "block";
        } else if (comments_div.style.display == "block") { //else set it to none
            comments_div.style.display = "none";
        } else {
            comments_div.style.display = "block";
        }
    }
}

export default comments_show;