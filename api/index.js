import express from 'express';
import bodyParser from 'body-parser';

import mealRoutes from './routes/meal.route';

const app = express();
const PORT = 3000;
const prefix = '/api/v1';

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('welcome to meal-booking Api');
});

app.use(`${prefix}/meals`, mealRoutes);

app.listen(PORT, () => console.log('conected'));
