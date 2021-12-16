//Event delegation
const closeButtonsParent = document.querySelector('.friends');
closeButtonsParent.addEventListener('click', function(e){
  if(!e.target.classList.contains('close-symbol')) return;

  const friend = e.target.parentNode;
  friend.classList.add('hide');

  const friendsArr = [...friend.parentNode.children];
  if(friend.classList.contains('active')) {
    document.querySelector('.chat').innerHTML = '';
    friendsArr.forEach((friend) => friend.classList.remove('active'));
  }

  if(friendsArr.every((friend) => friend.classList.contains('hide'))){
    document.querySelector('.chat').innerHTML = '<p>All chats deleted :c</p>';
    document.querySelector('.chatting-with').textContent = '';
  }

  e.stopPropagation();
  //el evento se escucha en la fase de captura, es manejado por el parent y este impide que se siga propagando
  //ni siquiera llega al e.target
  //
  //Si no estuviera en true, se hubiera detenido la propagación cuando el evento viajaba hacia arriba (cuando
  //ya hubiera pasado gatillando el botón que abre el chat), lo que no
  //hubiera tenido sentido porque donde se requiere modificar clases es en los hijos de este padre común
  //
  //El evento se detiene cuando está viajando hacia abajo, de esta manera no gatilla ningún evento en sus hijos
  //como el que abre el chat
}, true);

const primerBoton = document.querySelector('.close-symbol');
primerBoton.addEventListener('click', () => {
  //se hubiera podido detener aquí la propagación, de abajo hacia arriba, así no llegaría al evento de abrir chat
  //pero esta solución hubiera implicado aplicar este listener a todos los botones .close-symbol, y es mejor usar
  //event delegation.
  console.log('Se detuvo la propagación y el evento no llega hasta acá');
})
