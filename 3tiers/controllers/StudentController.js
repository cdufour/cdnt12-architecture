const connection = require('../config/database');
connection.connect();

const students = ['Jérémy', 'Chris', 'Clémentine'];

const list = () => {
  return students ;
}

const all = (req, res) => {
  res.render('student/list', { students });
}

const allStudents = (req, res) => {

  // dialogue avec couche des données
  connection.query('select * from student', (err, results, fields) => {
    
    var students  = results.map(student => student.name);
    res.render('student/list', { students });
  })

  //connection.end();
}

module.exports = { list, all, allStudents }