//this module is about generate the format of feed section
import upload_post from "./upload_post.js";
import { upvotes_show, upvote_update } from './upvote.js';
import comments_show from './comment.js';

function feed_produce(posts, ul_feed, api) {
    console.log(posts);
    while (ul_feed.lastElementChild != null) {
        ul_feed.removeChild(ul_feed.lastElementChild);
    }
    const feed_header = document.createElement("div");
    feed_header.className = "feed-header";
    const h3 = document.createElement("h3");
    h3.className = "feed-title alt-text";
    h3.textContent = "Popular Posts"
    const post_div = document.createElement("div");
    const post_bu = document.createElement("button");
    const post_popup = document.createElement("span");
    post_bu.className = "button button-secondary";
    post_popup.className = "pop_up";
    post_bu.textContent = "Post";
    post_div.appendChild(post_bu);
    post_div.appendChild(post_popup);
    feed_header.appendChild(h3);
    feed_header.appendChild(post_div);
    //feed_header.appendChild(post_popup);
    ul_feed.appendChild(feed_header);
    post_bu.addEventListener("click", (e) => upload_post(post_popup, api));
    for (const post of posts) {
        const li = document.createElement("li");
        li.className = "post";
        li.setAttribute("data-id-post", "");
        const upvote = document.createElement("div"); //number of upvotes
        const heart = document.createElement("button");
        const popup = document.createElement("span");
        const upvote_num = document.createElement("label");
        upvote.className = "vote";
        heart.className = "heart";
        popup.className = "popup";
        upvote.setAttribute("data-id-upvotes", "");
        const content = document.createElement("div"); //contents include (author,title,time,post description,image)
        content.id = "content";
        content.className = "content";
        const title = document.createElement("h4");
        title.setAttribute("data-id-title", "");
        title.className = "post-title alt-text";
        const author = document.createElement("p");
        author.className = "post-author";
        author.setAttribute("data-id-author", "");
        const description = document.createElement("p");
        const time = document.createElement("p");
        const image = document.createElement("img");
        const comments = document.createElement("label"); //number of comments
        const comments_div = document.createElement("div"); //create whole view of all the comments
        const popup_comment = document.createElement("span");
        const suseddit = document.createElement("p");
        upvote_num.textContent = post.meta.upvotes.length;
        popup_comment.className = "popup";
        comments.className = "comment";
        upvote.appendChild(upvote_num);
        upvote.appendChild(heart);
        upvote.appendChild(popup);
        upvote_num.addEventListener('click', (e) => upvotes_show(popup, post.meta.upvotes, api)); //add eventlistener to show upvotes
        heart.addEventListener('click', (e) => upvote_update(popup, heart, post.id, api)); //add eventlistener to update upvotes
        title.textContent = post.title;
        author.textContent = post.meta.author;
        description.textContent = post.text;
        const time_format = new Date(post.meta.published * 1000);
        time.textContent = time_format.toLocaleString();
        comments.textContent = "comments " + post.comments.length;
        comments_div.appendChild(popup_comment);
        comments.addEventListener("click", (e) => comments_show(popup_comment, comments_div, post.comments)) //add eventlistener to expand comments and collapse comments
        suseddit.textContent = post.meta.subseddit;
        content.appendChild(title);
        content.appendChild(description);
        content.appendChild(time);
        content.appendChild(author);
        if (post.image != null) {
            image.src = "data:image/png;base64," + post.image;
            content.appendChild(image);
        }
        content.appendChild(comments);
        content.appendChild(comments_div);
        li.appendChild(upvote);
        li.appendChild(content);
        li.appendChild(suseddit);
        ul_feed.appendChild(li);

    }
}



export default feed_produce;