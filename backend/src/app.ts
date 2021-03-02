import express from 'express';
import cors from 'cors';
import promMid from 'express-prometheus-middleware';
// import promClient from 'prom-client';
import { AUTH_TOKEN } from './config/tokens';
import { auth } from './middleware/auth';

import mainRoutes from './routes/main';

const app = express();


app.use(auth);
app.use(
  promMid({
    metricsPath: '/metrics',
    collectDefaultMetrics: true,
    requestDurationBuckets: [0.1, 0.5, 1, 1.5],
    authenticate: (req) => req.headers.authorization === `Bearer ${AUTH_TOKEN}`,
  })
);
app.use(cors());
app.use(express.json());

app.use(mainRoutes);

app.use((req, res) => {
  res.send('GET /');
});

app.listen(4000);
