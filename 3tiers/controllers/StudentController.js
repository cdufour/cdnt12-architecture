const connection = require('../config/database');
const { Student } = require('../models/Student');
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

const veryAllStudents = async (req, res) => {
  const students = await Student.findAll();
  //const students = results.map(student => student.firstname);

  // const students = results.map(
  //   student => student.firstname + ' ' + student.lastname);



  res.render('student/list', { students });
}

const byId = async (req, res) => {
  const { id } = req.params;
  const student = await Student.findByPk(id);
  
  if (student === null) {
    res.send('ID inconnu');
  } else {
    res.render('student/show', { student })
  }
}


module.exports = { list, all, allStudents, veryAllStudents, byId }