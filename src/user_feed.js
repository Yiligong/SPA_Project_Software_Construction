//This page is about fetching user feed from url and pass to feed_prodece
import { fetch_profile } from './profile.js';
import feed_produce from './feed_produce.js';

function user_feed(promise, typename, api) {
    promise.then(json => {
        sessionStorage.setItem("token", json.token); //SAVE TOKEN IN SEESIONSTORAGE
        if (typename == "login") {
            fetch_feed(api); //FETCH FEED
        } else {
            fetch_profile(api); //FETCH PROFILE CONTENT WHEN SUCCESSFULLY LOGGED IN
        }
    });
}

function fetch_feed(api) {
    const settings = {
        "method": "GET",
        "headers": {
            'Content-Type': 'application/json',
            'Authorization': 'Token ' + sessionStorage.getItem("token")
        }
    };
    fetch(`${api}/user/feed`, settings)
        .then(response => {
            const status = response.status;
            return response.json()
        })
        .then(j => {
            console.log(j.posts)
            const ul_feed = document.getElementById("feed");
            feed_produce(j.posts, ul_feed, api);
        });
}

export { user_feed, fetch_feed };