const mongoose = require('mongoose');

const { Schema } = mongoose;

const celebritySchema = new Schema({
  name: { type: String, required: true },
  occupation: String,
  catchPhrase: String,
});

const Celebrity = mongoose.model('Celebrity', celebritySchema);

module.exports = Celebrity;
