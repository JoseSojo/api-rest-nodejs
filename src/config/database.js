const mongoose = require ('mongoose');

const local = 'mongodb://localhost/api-nodejs';
const remote = 'mongodb+srv://demon258:j28*Sojo@cluster0.haig3y0.mongodb.net/node-mongodb-apirest?retryWrites=true&w=majority';


async function ConnectMongo(){
  try {
    await mongoose.connect(remote);
    console.log('Database connected');
  } catch (e) {
    console.log(e)
  }
}

module.exports = { ConnectMongo };
