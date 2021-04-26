const express = require('express');
const app = express();
const PORT = 3000;
const fs = require('fs');
const { list, all, allStudents } = require('./controllers/StudentController');

// setting du moteur de rendu
app.set('view engine', 'pug');

// routage
app.get('/', (req, res) => {
  res.send('coucou');
})

app.get('/test1', (req, res) => {

  const { title } = req.query;
  var view = '';

  if (title) {
    view = `
    <html>
      <head>
        <title>${title}</title>
      </head>
      <body>
        <h1 style="color:orange">${title}</h1>
      </body>
    </html>
  `;
  } else {
    view = 'Bad request';
  }

  res.send(view);
})

app.get('/test2', (req, res) => {
  var view = fs.readFileSync('templates/test2.aston');
  var {title} = req.query;
  var viewStr = view.toString();
  var newView = 
  viewStr
    .replace('[[ title ]]', title)
    .replace('[[ title ]]', title);
  
  res.send(newView);
})

app.get('/test3', (req, res) => {
  res.render('test3', { 
    title: req.query.title, 
    students: ['Jérérmy','Clémentine','Umberto'] })
})

app.get('/student', (req, res) => {
  var students = list();
  res.render('student/list', { students })
})

// lien direct entre une route à une méthode de contrôleur
app.get('/student/all', allStudents)


app.listen(PORT, () => {
  console.log('Server running on port ' + PORT);
})