const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const hbs = exphbs.create({/* config */ });
const sequelize = require('./config/connection');
const routes = require('./controllers'); // don't know if this is needed
const app = express();
const PORT = process.env.PORT || 3001;

// set handlebars as the default template engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

<<<<<<< HEAD
app.use(routes); // don't know if this is needed

=======
// app.use(require('./controllers/homeRoutes')); // don't know if this is needed
// set up session/ cookies/ etc
>>>>>>> 397803cbd75e683f068dfa900fe27eb4c1a32da0

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false })//force false prevents added data from being overwritten
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server listening on port ${PORT}!`);
        });
    });
