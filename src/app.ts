import express from 'express';
import router from './routes.js';

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use('/api', router);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
