const PORT = 3000;
const socket = io(`ws://localhost:${PORT}`);

socket.on('message', text => {

  const el = document.createElement('li');
  el.innerHTML = text;
  document.querySelector('ul').appendChild(el);

});

document.querySelector('button').onclick = () => {

  const text = document.querySelector('input').value;
  socket.emit('message', text)

}
