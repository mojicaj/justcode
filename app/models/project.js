const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

// project schema
const projectSchema = new Schema({
    name: String,
    tier: Number,
    type: String,
    link: String,
    description: String
});

// project model
const projectModel = mongoose.model('Project', projectSchema);


module.exports = projectModel;
