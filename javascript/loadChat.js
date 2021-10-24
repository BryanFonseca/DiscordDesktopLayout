const loadMessages = (name) => {
  const messagesHtml = `
    <div class="message">
      <div class="icon-circle">
	<img class="friend-img" src="avatars/${name}.jpg" alt="friend picture">
      </div>
      <div class="message-data">
	<div class="message-inner-data">
	  <span class="message-sender">${name}</span>
	  <span class="message-date">today 10:23</span>
	</div>
	<span class="message-text">lololol</span>
      </div>
    </div>
    <div class="message">
      <div class="icon-circle">
	<img class="friend-img" src="avatars/me.jpg" alt="friend picture">
      </div>
      <div class="message-data">
	<div class="message-inner-data">
	  <span class="message-sender">Bryan</span>
	  <span class="message-date">today 10:23</span>
	</div>
	<span class="message-text">lololol</span>
      </div>
    </div>
    <div class="message">
      <div class="icon-circle">
	<img class="friend-img" src="avatars/${name}.jpg" alt="friend picture">
      </div>
      <div class="message-data">
	<div class="message-inner-data">
	  <span class="message-sender">${name}</span>
	  <span class="message-date">today 10:23</span>
	</div>
	<span class="message-text">lololol</span>
      </div>
    </div>
    <div class="message">
      <div class="icon-circle">
	<img class="friend-img" src="avatars/me.jpg" alt="friend picture">
      </div>
      <div class="message-data">
	<div class="message-inner-data">
	  <span class="message-sender">Bryan</span>
	  <span class="message-date">today 10:23</span>
	</div>
	<span class="message-text">that's so lololo</span>
      </div>
    </div>
    <div class="message">
      <div class="icon-circle">
	<img class="friend-img" src="avatars/${name}.jpg" alt="friend picture">
      </div>
      <div class="message-data">
	<div class="message-inner-data">
	  <span class="message-sender">${name}</span>
	  <span class="message-date">today 10:23</span>
	</div>
	<span class="message-text">wyd?</span>
      </div>
    </div>
    <div class="message">
      <div class="icon-circle">
	<img class="friend-img" src="avatars/me.jpg" alt="friend picture">
      </div>
      <div class="message-data">
	<div class="message-inner-data">
	  <span class="message-sender">Bryan</span>
	  <span class="message-date">today 10:23</span>
	</div>
	<span class="message-text">practicing my new frontend skills</span>
      </div>
    </div>
    <div class="message">
      <div class="icon-circle">
	<img class="friend-img" src="avatars/${name}.jpg" alt="friend picture">
      </div>
      <div class="message-data">
	<div class="message-inner-data">
	  <span class="message-sender">${name}</span>
	  <span class="message-date">today 10:23</span>
	</div>
	<span class="message-text">ur kinda flexing aren't u?</span>
      </div>
    </div>
    <div class="message">
      <div class="icon-circle">
	<img class="friend-img" src="avatars/me.jpg" alt="friend picture">
      </div>
      <div class="message-data">
	<div class="message-inner-data">
	  <span class="message-sender">Bryan</span>
	  <span class="message-date">today 10:23</span>
	</div>
	<span class="message-text">indeed I am so are u hiring me or what?</span>
      </div>
    </div>
    <div class="message">
      <div class="icon-circle">
	<img class="friend-img" src="avatars/${name}.jpg" alt="friend picture">
      </div>
      <div class="message-data">
	<div class="message-inner-data">
	  <span class="message-sender">${name}</span>
	  <span class="message-date">today 10:23</span>
	</div>
	<span class="message-text">no</span>
      </div>
    </div>
    <div class="message">
      <div class="icon-circle">
	<img class="friend-img" src="avatars/me.jpg" alt="friend picture">
      </div>
      <div class="message-data">
	<div class="message-inner-data">
	  <span class="message-sender">Bryan</span>
	  <span class="message-date">today 10:23</span>
	</div>
	<span class="message-text">hire me</span>
      </div>
    </div>
    <div class="message">
      <div class="icon-circle">
	<img class="friend-img" src="avatars/${name}.jpg" alt="friend picture">
      </div>
      <div class="message-data">
	<div class="message-inner-data">
	  <span class="message-sender">${name}</span>
	  <span class="message-date">today 10:23</span>
	</div>
	<span class="message-text">NO</span>
      </div>
    </div>
    <div class="message">
      <div class="icon-circle">
	<img class="friend-img" src="avatars/me.jpg" alt="friend picture">
      </div>
      <div class="message-data">
	<div class="message-inner-data">
	  <span class="message-sender">Bryan</span>
	  <span class="message-date">today 10:23</span>
	</div>
	<span class="message-text">HIRE ME</span>
      </div>
    </div>
    <div class="message">
      <div class="icon-circle">
	<img class="friend-img" src="avatars/${name}.jpg" alt="friend picture">
      </div>
      <div class="message-data">
	<div class="message-inner-data">
	  <span class="message-sender">${name}</span>
	  <span class="message-date">today 10:23</span>
	</div>
	<span class="message-text">this kid... fine ur hired</span>
      </div>
    </div>
  `;
  chatContainer.innerHTML = messagesHtml;
};

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
