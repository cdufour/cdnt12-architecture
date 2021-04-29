/**
 * Author: Christophe DUFOUR
 * Context: Formation Aston - CDNT12 - Architecture
 */

module.exports.http = {
  middleware: {
    order: [
      'bodyParser',
      'cors'
    ],
    cors: (req, res, next) => {
      res.set('Access-Control-Allow-Origin', '*');
      res.set('Access-Control-Allow-Headers', '*');
      return next();
    }
  },
};
