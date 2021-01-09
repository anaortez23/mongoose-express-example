const mongoose = require('mongoose');
const schema = mongoose.Schema();

const sample = new Schema({
  name: {type: String},
  age: {type: Number}
});

const Sample = mongoose.model('Sample', sampleSchema);

module.exports = Sample;