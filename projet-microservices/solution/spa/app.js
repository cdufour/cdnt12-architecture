/**
 * Author: Christophe DUFOUR
 * Context: Formation Aston - CDNT12 - Architecture
 */

(function() {

  const serviceStudentEndpoint = 'http://localhost:1337/student';
  const serviceTokenEndpoint = 'http://localhost:3001/creds';

  var list = document.getElementById('list');
  var email = document.getElementById('email');
  var password = document.getElementById('password');
  var btnSend = document.getElementById('btnSend');
  var info = document.getElementById('info');
  
  var token = null;

  btnSend.addEventListener('click', function(e) {

    fetch(serviceTokenEndpoint, {
      method: 'POST',
      body: JSON.stringify({
        email: email.value,
        password: password.value
      }),
      headers: {
        'Content-Type':'application/json'
      }
    })
    .then(res => res.json())
    .then(res => {
      info.innerText = res.message;
      token = res.token;
    })
    
  })

  fetch(serviceStudentEndpoint)
    .then(res => res.json())
    .then(students => {

      students.forEach(student => {
        var p = document.createElement('p');
        p.innerText = student.id;
        p.addEventListener('click', () => {
          fetchStudent(student.id);
        })
        list.appendChild(p);
      })

    })

  function fetchStudent(studentId) {
    fetch(serviceStudentEndpoint + '/' + studentId, {
      headers: {
        'X-Token': token
      }
    })
    .then(res => res.json())
    .then(res => {
      info.innerText = res.message;
      if (res.student) console.log(res.student);
    })
  }

})() // IIFE