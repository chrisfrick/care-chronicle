import express from 'express';
import cors from 'cors';
import diagnosesRouter from './routes/diagnoses';
import patientRouter from './routes/patients';
const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3001;

app.get('/api/ping', (_req, res) => {
  console.log('incoming ping');
  res.send('pong');
});

app.use('/api/diagnoses', diagnosesRouter);

app.use('/api/patients', patientRouter);

app.use(express.static('client/build'))

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});