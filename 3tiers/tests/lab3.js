const { Student, sequelize } = require('../models/Student');

(async () =>  { 

  await sequelize.sync();
  const chris = await Student.create({
    firstname: "Chris",
    lastname: "TOTO"
  });
  console.log(chris.toJSON());

  // OU:

  // var s = null;

  // Student.create({
  //   firstname: "Chris",
  //   lastname: "TOTO"
  // }).then(chris => {
  //   console.log(chris.toJSON());
  //   s = chris.id;
  //   console.log(s);
  // })

  // console.log('Phillipe est ', s)

})() // IIFE