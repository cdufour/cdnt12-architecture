const students = ['Jérémy', 'Chris', 'Clémentine'];

const list = () => {
  return students ;
}

const all = (req, res) => {
  res.render('student/list', { students });
}

module.exports = { list, all }