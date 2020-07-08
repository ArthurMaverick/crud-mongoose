import express from 'express';
import mongoose from 'mongoose'
import { studentRouter } from './routes/studentRouter.js';
const app = express();
app.use(express.json());
app.use(studentRouter);

//* conexão com MONGODB
(async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://arthur2228:Acs2228@tt7@pessoal.svpyb.mongodb.net/grades?retryWrites=true&w=majority"
      , {
        useNewUrlParser: true,
        useUnifiedTopology: true
      },
      console.log('conectando ao banco de dados...'),
      console.log('conectado.')
    );
  } catch (error) {
    console.log("nao foi possivel conectar ao banco de dados" + error)
  }
})()

app.listen(process.env.PORT || 3000, () => { console.log('API inicializada') })

