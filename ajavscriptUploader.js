
const fetch = require('node-fetch');
var todo = {
    userId: 123,
    title: "loren impsum doloris",
    completed: false
};

fetch('http://localhost:8080/upload', {
    method: 'POST',
    body: JSON.stringify(todo),
    headers: { 'Content-Type': 'application/json' }
}).then(res => res.json())
  .then(json => console.log(json));