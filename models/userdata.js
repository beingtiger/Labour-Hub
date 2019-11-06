const mongoose = require('mongoose'),
      schema /*table */  = mongoose.Schema; 

const workerSchema = new schema(
    {
        username : 
                {
                     type: String, 
                     trim: true, 
                     default: ' ' 
                },
        age   : 
                {
                    type: String, 
                    trim: true, 
                    default: ' ' 
                }, 
        phone     :  
                {
                    type: String, 
                    trim: true, 
                    default: ' ' 
                },
        avail: [
                   {
                     type: schema.Types.ObjectId,
                     ref: 'workerAvl' 
                   }
                 ],
        worktype     :  
                {
                    type: String, 
                    trim: true, 
                    default: ' ' 
                },
        location  : 
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
        password  : 
        {
            type: String, 
            trim: true, 
            default: ' ' 
        }

    }
);

const blog  = mongoose.model('worker',workerSchema);

module.exports = blog;
