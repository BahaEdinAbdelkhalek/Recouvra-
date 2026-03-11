const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');
const morgan = require('morgan');
const authRoutes = require('./routes/auth');
const { errorHandler } = require('./middleware/errorMiddleware');
const app = express();

app.use(helmet());

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}));

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Recouvra+ API' });
});

app.use(errorHandler);
module.exports = app;
