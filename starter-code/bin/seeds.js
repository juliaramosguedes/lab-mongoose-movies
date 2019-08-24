const Celebrity = require('../models/Celebrities');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/starter-code')

const femaleSingers = [
  {
    name: 'Lady Gaga',
    occupation: 'Singer',
    catchPhrase: `Don't be a drag, just be a queen!`,
  },
  {
    name: 'Gloria Groove',
    occupation: 'Singer',
    catchPhrase: 'Vai segurando!',
  },
  {
    name: 'Beyonce',
    occupation: 'Singer',
    catchPhrase: 'Who run the world: Girls!',
  },
]

Celebrity.create(femaleSingers, (err) => {
  if(err) { throw(err) }
  console.log(`Created ${femaleSingers.length} celebrities`);
  mongoose.connection.close;
})