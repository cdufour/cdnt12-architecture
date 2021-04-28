const axios = require('axios'); // import du client HTTP axios

//const endpoint = "https://jsonplaceholder.typicode.com/todos/1";

const endpoint = "http://localhost:1337/student/3";

axios.get(endpoint).then(res => {
  console.log(res.data);
})