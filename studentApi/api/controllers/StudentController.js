/**
 * StudentController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  

  /**
   * `StudentController.index()`
   */
  index: async function (req, res) {
    return res.json({
      todo: 'index() is not implemented yet!'
    });
  },

  demo: async (req, res) => {
    return res.render('demo/demo1.ejs', { title: 'Démo 1'})
  },

  update: (req, res) => {
    return res.send('ToDo: implement update action');
  }

};

