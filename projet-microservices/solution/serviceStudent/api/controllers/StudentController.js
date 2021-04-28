/**
 * Author: Christophe DUFOUR
 * Context: Formation Aston - CDNT12 - Architecture
 */

const axios = require('axios');
const serviceTokenEndpoint = 'http://localhost:3001/token';

module.exports = {

  index: async (req, res) => {

    const studentIds = await Student.find({select: ['id']});
    console.log(studentIds)
    res.json(studentIds);

  },
      
  show: async (req, res) => {
    
    const student = await Student.findOne(req.params.id);
    if (!student) return res.json({student: null, message: 'STUDENT_NOT_FOUND'});

    const token = req.header('X-Token');
    if (!token) return res.json({student: null, message: 'NO_TOKEN_IN_HEADERS'});
    
    const serviceTokenResp = await axios.post(serviceTokenEndpoint, { token });
    if (!serviceTokenResp.data.foundToken) return res.json({student: null, message: 'TOKEN_NOT_FOUND'});

    res.json({student, message: 'STUDENT_DETAIL_ALLOWED'});

  }
}