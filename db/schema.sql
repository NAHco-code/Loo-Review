DROP DATABASE IF EXISTS porcelain_throne;
CREATE DATABASE porcelain_throne;


/*

TODO: solidify the tables and columns needed + correct models and seed files to match

user
    id, name, username, email, password; // when accessing name entered for homepage banner, use *const name = str.split(' ');* to avoid saving first and last names in seperate columns
locations
    id, name, loos[]
loos
    id, name, reviews[]
reviews
    id, description, rating 1-5 (might have to do in front end js),
*/
