'use strict'
const emoji = document.querySelector('.search_emoji_container');
const Send = document.querySelector('.search_img_container');

emoji.addEventListener('click', function(e) {
    console.log('Emoji');
});

Send.addEventListener('click', function(e) {
    console.log('Send');
});