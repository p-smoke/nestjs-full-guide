const socket = io('https://3000-psmoke-basic-1b6zwh7xj6l.ws-eu64.gitpod.io/');

let ID;
let username;
let allMessages;
const sendBtn = document.getElementById('sendBtn');

let allUsers = [];

socket.on('connect', () => {
  while (!username) {
    username = prompt('Enter your name');
  }
  socket.on('returnId', (id) => (ID = id));
  socket.emit('userConnection', { name: username });
  socket.on('userConnected', (data) => {
    allUsers = data;
    usersInjection();
  });
});

socket.on('recieveMessages', (data) => {
  allMessages = data;
  console.log(allMessages);
  messagesInjection();
});

sendBtn.addEventListener('click', (e) => {
  e.preventDefault();
  let message = document.getElementById('message');
  if (message.value !== '') {
    socket.emit('sendMessage', { id: ID, username, message: message.value });
  }
  message.value = '';
});

const usersInjection = () => {
  try {
    let oldUl = document.getElementById('users');
    oldUl.remove();
  } catch (error) {
    console.log(error);
  }

  const usersUl = document.createElement('ul');
  usersUl.setAttribute('id', 'users');
  usersUl.classList.add('container', 'mt-5');
  const title = document.createElement('h3');
  title.textContent = 'All Users';
  usersUl.appendChild(title);

  allUsers.forEach((user) => {
    const li = document.createElement('li');
    li.textContent = user;
    li.classList.add('customLi');
    usersUl.appendChild(li);
  });

  const bodyElem = document.body;
  bodyElem.appendChild(usersUl);
};

const messagesInjection = () => {
  try {
    let oldMessages = document.getElementById('messages-ul');
    oldMessages.remove();
  } catch (error) {
    console.log(error);
  }

  const messagesUl = document.createElement('ul');
  messagesUl.setAttribute('id', 'messages-ul');

  allMessages.forEach((msg) => {
    const li = document.createElement('li');
    li.textContent = `${msg?.username}: ${msg?.message}`;
    li.classList.add('customLi');
    if (msg.username === username) {
      li.classList.add('text-end');
    }
    messagesUl.appendChild(li);
  });

  const mainSection = document.getElementById('main-section');
  mainSection.insertBefore(messagesUl, document.getElementById('input-div'));
};

document.addEventListener('DOMContentLoaded', () => {
  usersInjection();
  messagesInjection();
});
