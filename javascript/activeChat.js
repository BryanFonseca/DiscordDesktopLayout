const friendButtons = document.querySelectorAll('.friend.button');
friendButtons.forEach((friendButton) => {
  friendButton.addEventListener('click', () => {
    friendButtons.forEach((friend) => friend.classList.remove('active'));
    friendButton.classList.add('active');
  });
});
