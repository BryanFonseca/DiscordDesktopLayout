const messageInput = document.querySelector('.input-message input');
const sendButton = document.querySelector('.send-message-button');
const chatContainer = document.querySelector('.chat');

const scrollToBottom = (mode) => {
  chatContainer.scroll({
    top: chatContainer.scrollHeight, 
    left: 0,
    behavior: mode || undefined,
  });
}

// non-smooth scroll
// chatContainer.scroll(0, chatContainer.scrollHeight);

scrollToBottom('smooth');

const sendMessage = () => {
  const messageText = messageInput.value;
  const sendTime = new Date().getHours() + ':' + new Date().getMinutes();
  if(messageText)
  {
    const message = `
      <div class="message">
	<div class="icon-circle">
	  <img class="friend-img" src="avatars/me.jpg" alt="friend picture">
	</div>
	<div class="message-data">
	  <div class="message-inner-data">
	    <span class="message-sender">Bryan</span>
	    <span class="message-date">today ${sendTime}</span>
	  </div>
	  <span class="message-text">${messageText}</span>
	</div>
      </div>
    `;
    chatContainer.insertAdjacentHTML('beforeend', message);
    messageInput.value = '';
    scrollToBottom();
  }
};

sendButton.addEventListener('click', () => sendMessage());
messageInput.addEventListener('keydown', e => e.key === 'Enter' && sendMessage());
