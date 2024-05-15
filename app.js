const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Routes
const bookRoutes = require('./routes/bookRoutes');
const userRoutes = require('./routes/userRoutes');
const librarianRoutes = require('./routes/librarianRoutes');

// Use routes
app.use('/books', bookRoutes);
app.use('/users', userRoutes);
app.use('/librarians', librarianRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
