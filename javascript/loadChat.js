const makeChatHtml = (chats) => {
  const result = {};
  for(const chat of chats){
    let messages = '';
    for(const message of chat.content){
      const messageStructure = `
    <div class="message">
      <div class="icon-circle">
	<img class="friend-img" src="avatars/${message.sender === 'Bryan' ? 'me' : message.sender}.jpg" alt="friend picture">
      </div>
      <div class="message-data">
	<div class="message-inner-data">
	  <span class="message-sender">${message.sender}</span>
	  <span class="message-date">today 10:23</span>
	</div>
	<span class="message-text">${message.text}</span>
      </div>
    </div>
    `;
      messages += messageStructure;
      result[chat.person] = messages;
    }
  }
  return result;
}


const allChats = [
  {
    person: 'Karla',
    content: [
      {sender: 'Karla', text: 'YOOO'},
      {sender: 'Bryan', text: 'hey wassup'},
      {sender: 'Karla', text: 'did Richard hired u or what?'},
      {sender: 'Bryan', text: "idk I'm talking to him rn"},
      {sender: 'Karla', text: 'what he say'},
    ]
  },
  {
    person: 'Ángela',
    content: [
      {sender: 'Ángela', text: 'Hi'},
      {sender: 'Bryan', text: 'Hii'},
      {sender: 'Ángela', text: 'wyd'},
      {sender: 'Bryan', text: 'nothing u?'},
    ]
  },
  {
    person: 'Miguel',
    content: [
      {sender: 'Bryan', text: 'Hii Miguel'},
      {sender: 'Miguel', text: 'hey Bryan'},
      {sender: 'Bryan', text: 'how is it going'},
      {sender: 'Miguel', text: "can't complain hbu u got hired?"},
      {sender: 'Bryan', text: "I'm not sure but most likely yes"},
      {sender: 'Miguel', text: "congrats dawg"},
    ]
  },
  {
    person: 'Richard',
    content: [
      {sender: 'Richard', text: 'lololo'},
      {sender: 'Bryan', text: "lolol"},
      {sender: 'Richard', text: 'lololo'},
      {sender: 'Bryan', text: "that's so lolol"},
      {sender: 'Richard', text: 'wyd'},
      {sender: 'Bryan', text: 'practicing my new frontend skills'},
      {sender: 'Richard', text: "ur kinda flexing are'r u?"},
      {sender: 'Bryan', text: "indeed I am so are u hiring me or what?"},
      {sender: 'Richard', text: "no"},
      {sender: 'Bryan', text: "hire me"},
      {sender: 'Richard', text: "NO"},
      {sender: 'Bryan', text: "HIRE ME"},
      {sender: 'Richard', text: "this kid... fine ur hired"},
    ]
  },
  {
    person: 'Tanisha',
    content: [
      {sender: 'Tanisha', text: 'Hello'},
      {sender: 'Bryan', text: 'HI'},
      {sender: 'Tanisha', text: 'ur pretty handsome'},
      {sender: 'Bryan', text: 'ikr🥵'},
    ]
  }
];

const allChatsHtml = makeChatHtml(allChats);

const loadMessages = (name) => {
  chatContainer.innerHTML = allChatsHtml[name];
  scrollToBottom();
};

loadMessages('Richard');

const friendsSpans = document.querySelectorAll('.friend.button span');
friendsSpans.forEach((friendSpan) => {
  friendSpan.parentNode.addEventListener('click', (e) => {
    loadMessages(friendSpan.textContent);
  })
})

/* friendButtons.forEach((friendButton) => {
  const sender = friendButton.innerHTML;
  console.log(friendButton.childNodes);
  friendButton.addEventListener('click', (e) => {
  });
}); */
