"use strict";
const emoji = document.querySelector(".search_emoji_container");
const Send = document.querySelector(".search_img_container");
const contactsContainer = document.querySelector('.user_contacts');
const contacts1 = document.querySelector(".user_contacts");
const chatContainer = document.querySelector(".chat_container");
const chatText = document.querySelector(".message_type_section");
const contactSearch = document.querySelector(".search_space");

const contact = document.querySelectorAll('.contact_text_name');

//Displaying all contact list
const contactsList = function (number) {
  while (number > 0) {
    let newContact = document.createElement("section");
    newContact.classList.add('contact');
    newContact.innerHTML = `             
    <img
    src="Iconns/icons8-iron-man.svg"
    alt="contact"
    class="contact_image"
  />
  <section class="contact_text">
    <p class="contact_text_name">kopat chandra</p>

  </section>
  <section class="contact_time_dot">
    <p class="time">12:00 AM</p>
    <p class="dot">1</p>
  </section>`;
  document.querySelector('.user_contacts').appendChild(newContact);
    number--;
  }
};
contactsList(2);

//Contact search
contactSearch.addEventListener('input',function(){
  let searchName = contactSearch.value;
  // console.log(contact);
})


//Chat send section
const newChatSender = function (chatSend){
    let newSend = document.createElement("div");
    newSend.classList.add("chat_send");
    newSend.innerText = `${chatSend}`;
    chatContainer.appendChild(newSend);
    newSend.scrollIntoView({behavior:"smooth"});
}

//Chat received section
const newChatReceiver = function (chatReceived){
  let newReceived = document.createElement("div");
  newReceived.classList.add("chat_Received");
  newReceived.innerText = `${chatReceived}`;
  chatContainer.appendChild(newReceived);
  newReceived.scrollIntoView({behavior:"smooth"});
}

//Emoji section
emoji.addEventListener("click", function (e) {
    console.log("Emoji");
});

//send button
Send.addEventListener("click", function (e) {
  let text = chatText.value;
  if(text === '') return;
  else{
    newChatSender(text);
    chatText.value = '';
    newReceived.scrollIntoView({behavior:"smooth"});
  }
});

newChatReceiver('hahahaha');