
var 
    mongoose = require('../node_modules/mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId,
    usgsSchema = Schema({name: String});

var BlogPost = new Schema({
    author    : ObjectId,
    title     : String,
    body      : String,
    date      : Date
});

/*eq database*/
module.exports = db.model('usgs_Model', usgsSchema);