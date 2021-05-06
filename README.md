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
API /* { Brandon } */
#1 - what data are we able to pull from google maps and how will we be able to manipulate it?
    * figure out how to remedy the git guardian secret thing // save for last

X SEED INFO
#2  *FINISH /* pick up issue: {  } */

X - seed files need to be converted to js files and completed with information enough to present multiple locations and reviews /* { Janee' } */
X - need to figure out exactly what information we need from each model, why + how we're using it, where we need to send it, etc.
    /* { Kathryn } */

X BCRYPT - working /* { Janee + Kathryn } */

#3 - HANDLEBARS (+ connect them to wherever they need to be connected to)
    /*{ Brandon } */
    /* { Kathryn assist if needed } */

#4 - CSS for handlebars files
        /* { Janee'} */
        /* { Sarehon } */

#5 - FORMS /* { Janee + Sarehon } */

#6 - EVENT LISTENERS /* pick up issue: { Kathryn } */

#7 - front end js functions to iterate through all of our api calls
    and connect user input to backend + database /* pick up issue: {  } */
    * api calls can only be up to 75 per hour or something like that ** )

X   - main menu functionality  /* { Brandon } */

X - haversine function to render 20 mi radius based on user's current location /* { Kathryn } */

#8 - rating functionality *front end js /* { Brandon } */

#9 - deploy to Heroku /* pick up issue: { Kathryn } */
        * boilerplate passport* tutor note
        * figure out how to access it from Heroku

#10 - favorites and trip boards/saved // save for last
#11 - user customization optiions like themes, light/dark switch, etc

#12 - readme /* pick up issue: {  } */

#13 - presentation  /* { Sarehon } */
    - slides
    - timing
    - meet presentation requirements


<!-- TECHNOLOGIES
    - css framework - materialize
    - mysql (sequelize(ORM), + professional appearing seed files)
    - express (handlebars.js)
    - node.js (dotenv, bcrypt)
    - heroku (deployement)
    - encryption/authentication for access (bcrypt)

    DESIRED FUNCTIONALITY
    - collaborative use between different users on project boards
    X- third party api that gives us location data
    X- log in functionality
    X- main menu functionality
    - rating functionality
    x- review functionality // *** CHECK review connected to loo ***
    X- add new loo (includes location) functionality
    * save favorites funcitonality
    * search history or recent searches
    - professional appearance
    - responsive UI

    NEXT LEVEL EXTRAS
    - add user likes to Reviews
    - comment on reviews
    - favorites + pinboards
    - user customization optiions ( themes, light/dark switch, etc )
    - weather api for homepage greeting/banner
    - automated scroll + transitions
    - update user, delete user

    CHALLENGES + UNCHARTED TERRITORIES
    - third party api to provide location and/or restroom data
    - materialize css framework
    - handlebars framework
    - project scale
    - communication due to schedules
    - same page with expectations of timing and MVP


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
    - Wed: 4
        - views IN PROGRESS { Brandon }
        - finish seed data { Janee + Sarehon }
        x- get haversine function working { Kathryn }
        x- finish routes { Kathryn }
        - styling { Sarehon + Janee' }
        - rating functionality { Brandon }

        - complete MVP { ALL }
        - heroku setup { Kathryn }

    - Thurs: 2
        - final touches { ALL }
        - presentation slides { Sarehon }
        - presentation plan { Sarehon }
        - presentation runthrough { All }

        - configure save favorites + search history functionality { save for last }
        - photos and/or themes, light/dark switch, etc { save for last }

    - Fri: 1
        - README { }
        - commit final changes { ALL }

    - Sat: 0
        - PRESENT { ALL }

    -->

***ASSIGNMENTS***

-Kathryn:
    x- routes - get, put, post, delete
    x- haversine function
    - heroku setup
    -
    * final touches

-Brandon:
    - handlebars
    - rating funcitonality
    - get user location variable
    -
    * final touches

-Janee':
    - forms + css
    - readme
    -
    -
    * final touches

-Sarehon:
    - forms + css
    - presentation slides
    -
    -
    * final touches

-PICKUP:
    - event listeners
    - connect user input from forms to backend and database
    - finish seed data


***WORKING ROUTES***

    - homeRoutes
        * get /
        * get /loo/:id [include: reviews]
        * get /login
        TODO -

        API
            - userRoutes
                * post / [create new user]
                * post /login [user is able to log in]
                * get /logout [user is able to log out]
                TODO -

            - looRoutes
                * post / [create new loo]
                TODO - put / [update loo]
                TODO - delete / [delete loo]

            - reviewRoutes
                * post / [create new review]
                TODO - put / [update review]
                TODO - delete / [delete review]

<!-- PAGES + ROUTES
    - login redirects to homepage
    - homepage renders
        - loodata (haversine - 20 mi radius)
        - map (view buttons render selected loo + reviews)
        - add new loo in menu - modal form
            *redirect to selected loo + reviews - rendering newly reviewed loo
        ?* add new review in menu
            ***how to connect it to specific loo? OR delete from menu and only render on selected_loo+reviews page
        - selected loo + reviews hbs
            *loo: id + reviews for that loo
            - new review button - modal form
                *redirect to selected loo + render new review

    - api routes
        - map.hbs: map view - location pinpoints clickable to render "selected loo modal" which will scroll down to reviews
            * at top of reviews there will be a button to leave a review and modal form to leave review.
            - on map.hbs there will be a button to add new loo w pop up modal form to add a new loo
                - this will redirect to "selected loo modal" rendering the loo that was just added
    - -->
