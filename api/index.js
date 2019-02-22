import express from 'express';
import bodyParser from 'body-parser';

import mealRoutes from './routes/meal.route';
import menuRoutes from './routes/menu.route';
import orderRoute from './routes/order.route';

const app = express();
const PORT = 3000;
const prefix = '/api/v1';

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('welcome to meal-booking Api');
});

app.use(`${prefix}/meals`, mealRoutes);
app.use(`${prefix}/menu`, menuRoutes);
app.use(`${prefix}/orders`, orderRoute);

app.listen(PORT, () => console.log('conected'));

export default app;
