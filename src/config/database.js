const mongoose = require ('mongoose');

async function ConnectMongo(){
  try {
    await mongoose.connect('mongodb+srv://demon258:j28*Sojo@cluster0.haig3y0.mongodb.net/?retryWrites=true&w=majority');
    console.log('Database connected');
  } catch (e) {
    console.log(e)
  }
}

module.exports = { ConnectMongo };
