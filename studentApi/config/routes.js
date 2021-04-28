module.exports.routes = {

  '/': { view: 'pages/homepage' },
  '/demo': { view: 'pages/demo' },
  'GET /students': { controller: 'StudentController', action: 'index' },
  'GET /demo2': 'StudentController/demo',
  'PATCH /student/:id' : 'StudentController/update'

};
