const mongoose = require('mongoose'),
      schema /*table */  = mongoose.Schema;

const wrkavl = new schema(
    {
        name: {
                    type: String, 
                    trim: true, 
                    default: ' ' 
                },
        worktype : 
                {
                     type: String, 
                     trim: true, 
                     default: ' ' 
                },
        phone : 
                {
                    type: String, 
                    trim: true, 
                    default: ' ' 
                }, 
        email  : 
                {
                    type: String, 
                    trim: true, 
                    default: ' ' 
                }, 
        loc    :  
                {
                    type: String, 
                    trim: true, 
                    default: ' ' 
                },
        
    }
);

const reqst = mongoose.model('workerAvl',wrkavl); 
module.exports = reqst;
