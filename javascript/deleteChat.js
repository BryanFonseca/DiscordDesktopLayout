const closeChatButtons = document.querySelectorAll('.close-symbol');

closeChatButtons.forEach((closeButton) => {
  closeButton.addEventListener('click', (e) => {
    closeChat(e);
  });
});

const closeChat = (data) => data.path[1].classList.add('hide');
