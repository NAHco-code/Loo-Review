const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const hbs = exphbs.create({ /*helpers*/ });
const routes = require('./controllers'); // don't know if this is needed

const sequelize = require('./config/connection');
// const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

// const sess = {
//     secret: 'Super secret secret',
//     cookie: {},
//     resave: false,
//     saveUninitialized: true,
//     store: new SequelizeStore({
//       db: sequelize
//     })
//   };
//   app.use(session(sess));

// set handlebars as the default template engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes); 

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false })//force false prevents added data from being overwritten
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server listening on port ${PORT}!`);
        });
    });
