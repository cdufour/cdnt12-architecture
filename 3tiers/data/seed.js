const { Student, sequelize } = require('../models/Student');
const students = require('./students.json');

(async () => {

  // détruire la table student si elle existe
  console.log("[+] Détruit la table student si existe")
  await sequelize.query('DROP TABLE IF EXISTS student'); // raw query
  
  console.log("[+] Synchronisation du modèle et de la table student")
  await sequelize.sync();

  // seed
  console.log("[+] Seeding...")
  students.forEach(async (student) => {
    var result = await Student.create(student);
    console.log(`[+] Student ${result.firstname} ajouté`)
  })
  

})()
