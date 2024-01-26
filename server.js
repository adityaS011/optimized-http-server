import express from 'express';
import helmet from 'helmet'; // Using Helmet middleware for security
import dataRoutes from './routes/dataRoutes.js'; // routes for handling data-related requests

const app = express();
const PORT = 8080;

app.use(helmet());
app.use('/data', dataRoutes); // Mounting dataRoutes at the '/data' endpoint

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
