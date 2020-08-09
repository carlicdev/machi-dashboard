const express = require('express');
const path = require('path');
const cors = require('cors');
const morgan = require('morgan');
const app = express();

// Routers
const productRouter = require('./server/routes/products');
const orderRouter = require('./server/routes/orders');
const clientRouter = require('./server/routes/clients');
const salesRouter = require('./server/routes/sales');

// Database
require('./server/db/db');

// Settings
app.set('PORT', process.env.PORT || 5000);

// Middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// Serving react static files
app.use(express.static(path.join(__dirname, 'client/build')));

// Sessions

// Passport

// Api
app.use('/api/products', productRouter);
app.use('/api/orders', orderRouter);
app.use('/api/clients', clientRouter);
app.use('/api/sales', salesRouter);

// Starting server
app.listen(app.get('PORT'), () => {
    console.log(`Server on PORT: ${app.get('PORT')}`);
});