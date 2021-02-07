//This page is about fetch data from user to generate user profile
function fetch_profile(api) {
    const settings = {
        "method": "GET",
        "headers": {
            'Content-Type': 'application/json',
            'Authorization': 'Token ' + sessionStorage.getItem("token")
        }
    };
    fetch(`${api}/user`, settings) //?p=0&n=10
        .then(response => {
            const status = response.status;
            return response.json()
        })
        .then(j => {
            const ul_feed = document.getElementById("feed");
            profile_show(j, ul_feed, api);
            // const ul_feed = document.getElementById("feed");
            // feed_produce(j.posts, ul_feed, api);
        });

}

function profile_show(profile_content, ul_feed, api) { //create the format of profile page
    console.log(profile_content);
    while (ul_feed.lastElementChild != null) {
        ul_feed.removeChild(ul_feed.lastElementChild);
    }
    const avtar_div = document.createElement("div");
    const user_avatar = document.createElement("img");
    const info_div = document.createElement("div");
    const following = document.createElement("li");
    const follower = document.createElement("li");
    const num_post = document.createElement("li");
    const username = document.createElement("li");
    const name = document.createElement("li");
    const email = document.createElement("li");
    following.textContent = "Following: " + profile_content.following.length;
    follower.textContent = "Followers: " + profile_content.followed_num;
    num_post.textContent = "Number of posts: " + profile_content.posts.length;
    username.textContent = profile_content.username;
    name.textContent = profile_content.name;
    email.textContent = profile_content.email;
    user_avatar.className = "avtar-img";
    avtar_div.className = "avtar";
    user_avatar.src = "../images/user.png";
    avtar_div.appendChild(user_avatar);
    info_div.appendChild(following);
    info_div.appendChild(follower);
    info_div.appendChild(num_post);
    info_div.appendChild(username);
    info_div.appendChild(name);
    info_div.appendChild(email);
    avtar_div.appendChild(info_div)
    ul_feed.appendChild(avtar_div);
}

export { fetch_profile, profile_show };