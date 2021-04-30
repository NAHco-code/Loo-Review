const express = require('express');
const routes = require('./controllers');
const sequelize = require('../config/connection');
const exphbs = require('express-handlebars');
const path = require('path');
const hbs = exphbs.create({});

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);

// set handlebars as the default template engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false })//force false prevents added data from being overwritten
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server listening on port ${PORT}!`);
        });
    });
