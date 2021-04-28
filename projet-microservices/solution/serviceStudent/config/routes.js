/**
 * Author: Christophe DUFOUR
 * Context: Formation Aston - CDNT12 - Architecture
 */

module.exports.routes = {

  '/': { view: 'pages/homepage' },
  'GET /student': 'StudentController/index',
  'GET /student/:id': 'StudentController/show',

};
