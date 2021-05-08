# Project-02

<!-- TEAM DASHBOARD
    * updated 07:00a 4/6/21
    * task timeline + assignments at bottom -->

<!-- ISSUES --------->
<!-- Total: 13 ------>
<!-- Per Person: 4 -->
<!-- Per Day: 1.75 ----->
<!-- Days left: 2 --->


<!-- PSA: Comment your code and use console.logs for testing + leave them in there so others who are using that page can test as well. We will delete them before we submit -->

<!-- GIT:
    * start on your personal local branch
    - git pull *sync your local branch w your remote branch
    - git push *read CLI message - you may have to add + commit before pushing
    - git checkout main
    - git pull *sync your local main branch w remote main branch
    - git push
    - git checkout yourbranch
    - git merge main *merge updated local personal branch w your updated local main branch
    * resolve conflicts - usually accept incoming changes
    - git add, commit, push --->


<!-- Dependecies:
    - bcrypt 5.0.1- installed, working
    - connect-session-sequelize 7.1.1 - installed, working
    - dotenv 8.2.0- installed, questions about .env file when repo being pushed and pulled
    - express 4.17.1- installed, working
    - express-handlebars 5.3.0 - installed, working
    - express-session 1.17.1 - installed, working
    - mysql2 2.2.5 - installed, *handles promises differently than 'mysql'
    - nodemon - installed, working
    - s-haversine  - installed, working
    - sequelize 6.6.2 - installed, working
    - uniqid 5.3.0 - installed, *not used yet-->

<!--
X API /* { Brandon } */
X - what data are we able to pull from google maps and how will we be able to manipulate it?

X SEED INFO
#1  *FINISH /* pick up issue: { S and/or J } */

X - seed files need to be converted to js files and completed with information enough to present multiple locations and reviews /* { Janee + Kathryn } */
X - need to figure out exactly what information we need from each model, why + how we're using it, where we need to send it, etc.
    /* { Kathryn } */

X BCRYPT - working /* { Janee + Kathryn } */

#2 - HANDLEBARS (+ connect them to wherever they need to be connected to)
    /*{ Brandon } */
    /* { Kathryn assist if needed } */

#3 - CSS for handlebars files
        /* { Janee'} */
        /* { Sarehon } */

#4 - FORMS /* { Janee + Sarehon .then B + K } */

#5 - EVENT LISTENERS /* pick up issue: { Kathryn +/ Brandon } */

#6 - front end js functions to iterate through all of our api calls
    and connect user input to backend + database /* pick up issue: { Kathryn +/ Brandon } */
    * api calls can only be up to 75 per hour or something like that ** )

X   - main menu functionality  /* { Brandon } */

X - haversine function to render 20 mi radius based on user's current location /* { Kathryn } */

X - deploy to Heroku /* pick up issue: { Kathryn } */
        * boilerplate passport* tutor note
        * figure out how to access it from Heroku

#7 figure out how to remedy the git guardian secret thing // save for last // handling secrets is a project requirement

#8 - readme /* pick up issue: { Sarehon } */

#9 - presentation  /* { Sarehon } */
    - slides
    - timing
    - meet presentation requirements


*** NOT MVP - rating functionality *front end js /* { B or K } */
*** NOT MVP - favorites and trip boards/saved // save for last
*** NOT MVP - user customization optiions like themes, light/dark switch, etc
    ^^^^^^^ - could be presented as future considerations


<!-- TECHNOLOGIES
    - css framework - materialize
    - mysql (sequelize(ORM), + professional appearing seed files)
    - express (handlebars.js)
    - node.js (dotenv, bcrypt)
    - heroku (deployement)
    - encryption/authentication for access (bcrypt)

    DESIRED FUNCTIONALITY
    X- collaborative use between different users on project boards
    X- third party api that gives us location data
    X- log in functionality
    X- main menu functionality
    x- review functionality // *** CHECK review connected to loo ***
    X- add new loo (includes location) functionality
    * save favorites funcitonality
    * search history or recent searches
    X- professional appearance
    - responsive UI
    - rating functionality
    - buttons for update + delete user, loos, reviews

    NEXT LEVEL EXTRAS
    - add user likes to Reviews
    - comment on reviews
    - favorites + pinboards
    - user customization optiions ( themes, light/dark switch, etc )
    - weather api for homepage greeting/banner
    - automated scroll + transitions
    - update user, delete user

    CHALLENGES + UNCHARTED TERRITORIES
    - Google Maps API
    - materialize css framework
    - handlebars framework
    - project scale
    - communication due to schedules


TIMELINE

    - Tues: X
        x- project idea { Janee' }
        x- user story + wireframe { Kathryn }
        x- file structure, repo set up, install dependencies { Kathryn }
    - Thurs: X
        x- server + models { Janee' }
        x- config/connection { Brandon }
        x- server running { Kathryn }
    - Fri: X
        x- solidify needed data to be included in models + seeds { Kathryn }
        x- solidify API { Brandon }
        x- models + seed structure { J + K }
        x- create user logins, cookies, and properly encrypt information { B + K }
        x- begin responsive styling { Janee' }
    - Sat: X
        x- configure main menu functionality { Brandon }
    - Sun: X
        x- overflow
    - Mon: X
        x- overflow
    - Tues: X
        x- assess where we're at and make a game plan for achieving desired final product
    - Wed: X
        x- get haversine function working { Kathryn }
        x- finish back end routes { Kathryn }
    - Thurs: X
        x- presentation plan { Sarehon }
        x- presentation runthrough { All }
        x- heroku setup { Kathryn }


    - Fri: 1
        - views IN PROGRESS { Brandon + Kathryn }
        - finish font end routes { K + B }
        - styling { Sarehon + Janee' }
        - finish forms { K }
        - finish seed data { Janee + Sarehon }
        - complete MVP { ALL }
        - README { Sarehon }
        - commit final changes { ALL }
        - final touches { ALL }
        - presentation slides { Sarehon }

        FUTURE CONSIDERATIONS:
            - configure save favorites + search history functionality
            - photos and/or themes, light/dark switch, etc

    - Sat: 0
        - PRESENT { ALL }

    -->

***WHATS LEFT***


    - handlebars ( 1 pg ) - view loo page (w associated reviews)
    - event listeners
    - forms
    - styling (responsiveness is a priority)
    - connect user input from forms to backend and database
    - complete seed data
    ?- rating funcitonality
    - presentation slides
    - readme
    ?- handle secrets

    * final touches

***WORKING ROUTES***

    - homeRoutes
        * get /
        * get /loo/:id [include: reviews] ### TODO: front end
        * get /login

            - userRoutes
                * post / [create new user]
                * post /login [user is able to log in]
                * get /logout [user is able to log out]

            - looRoutes
                * post / [create new loo]
                future - put / [update loo] **backend working
                future - delete / [delete loo] **backend working

            - reviewRoutes
                * post / [create new review]
                future - put / [update review] **backend working
                future - delete / [delete review] **backend working

<!-- APP STRUCTURE
    - login redirects to homepage
    - homepage renders
        - loodata (haversine - 20 mi radius)
        - map (view buttons render selected loo + reviews)
        - add new loo in menu - modal form
            *redirect to selected loo + reviews - rendering newly reviewed loo
        * add new review in menu - how do we know which loo we're reviewing? loop through loo data?
            ***how to connect it to specific loo? OR delete from menu and only render on selected_loo+reviews page
        - selected loo + reviews hbs
            *loo: id + reviews for that loo
            - new review button - modal form
                *redirect to selected loo + render new review

    - api routes
        - map view - location pinpoints clickable to render "selected loo modal" which will scroll down to reviews
            * at top of reviews there will be a button to leave a review and modal form to leave review.
            - on map.hbs there will be a button to add new loo w pop up modal form to add a new loo
                - this will redirect to "selected loo modal" rendering the loo that was just added
    - -->
