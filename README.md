# Project-02

<!-- TEAM DASHBOARD
    * please enter your name to pick up issues as you start each one
    * will help track pace and progress + get you tons of commits on github ;)
    * task timeline at bottom -->

<!-- ISSUES --
<!-- Total: 30 --           * consider how long each problem will take you to solve
<!-- Per Person: 7.5 --       * understand that more issues will arise as we continue to develop
<!-- Per Day: 1 --              * each issue you solve will reduce the amount of time the next issue will take you
<!-- Days left: 7.5 --        * you can do this in 7 days-->
<!--                        * you can do this for 7 days-->




<!-- PSA: Remember to install packages you’re requiring in your code and test before you push to develop or submit a pull request to main. It will make development much faster and easier :) -->

<!-- PSA: Comment your code and use console.logs for testing + leave them in there so others who are using that page can test as well. We will delete them before we submit -->

<!-- House Keeping:
    - When you start up the server, what does the 'Executing (default): SELECT 1+1 AS result' message mean? -->

<!-- Dependecies:
    - bcrypt 5.0.1- installed, not working properly
    - dotenv 8.2.0- installed, questions about .env file when repo being pushed and pulled
    - express 4.17.1- installed, working
    - express-handlebars 5.3.0 - installed, not initiated
    - mysql2 2.2.5 - installed, *handles promises differently than 'mysql'
    - nodemon - installed, cuts out development time bc you're not always stopping and starting server. run: nodemon server.js
    - sequelize 6.6.2 - installed, working so far
    - uniqid 5.3.0 - installed, *use to manage assigning unique ids if needed, uninstall if not-->

<!--
#1 - API /* pick up issue: {  } */
- how are we using the api?
- what data are we able to pull from google maps and how will we be able to manipulate it?
- can we seed location data with google maps api to prevent writing unnecessary seed information + save a ton of time?
- can we seed public restroom data with google maps api? (this would save a lot of time)
- is there just a public restrooms api or a different, better api we could use that'd be easier for us to work with?
- can we have this figured out and coded by saturday?? It will be hard to code the rest of the project without this data

SEED INFO
- this will also be time consuming if we can't figure out how to access the location or restroom data from a third party api
#2 - seed files need to be converted to js files and completed with information enough to present multiple locations and reviews /* pick up issue: {  } */
#3 - we need to figure out exactly what information we need from each model, why + how we're using it, where we need to send it, etc. /* pick up issue: {  } */
    - where is it all coming from and going to??
    - why??
* categories removed from MVP due to accessive api calls and time consuming logic

BCRYPT NOT WORKING
#4 - commented out in user.js to get server running - there is a bug /* pick up issue: {  } */
-

BACK END FINISHED AND WORKING BEFORE SAT CLASS IS THE NECESSARY GOAL
*if not, we will only have one class period to complete: handlebars, styling, front end js AND the presentation - this is not enough time.

*** AFTER BACK END, WE STILL HAVE :
#5, #6 - many many handlebars files (+ connect them to wherever they need to be connected to) /* pick up issue: {  } */ /* pick up issue: {  } */
- html and css /* pick up issue: {  } */
#7  - style main.handlebars
#8  - style other views - code class and id names to be resusable for all these pages to minimize work + time
#9  - style index.html
- PLUS:
#10 - forms /* pick up issue: {  } */
#11 - event listeners /* pick up issue: {  } */
#12 - big huge javascript functions to iterate through all of our api calls /* pick up issue: {  } */
        * api calls can only be up to 75 per hour or something like that ** )
- front end javascript (this will have to do a lot for us in terms of functionality, this will be a lot of work and take A LOT of time)
#13 - search bar funcitonality /* pick up issue: {  } */
#14 - main menu functionality /* pick up issue: {  } */
#16 - rating functionality /* pick up issue: {  } */
#17 - event listeners for each button /* pick up issue: {  } */
[#18, #19, #20]
    {- probably more stuff
    - assuming at least 3 problems that take forever to solve
    - slowing us down *fill in as they arise* }
#21 - favorites and trip boards/saved // save for last
#22 - deploy to Heroku /* pick up issue: { Kathryn } */
#23 - figure out how to access it from Heroku /* pick up issue: { Kathryn } */
#24 - present it /* pick up issue: {  } */
#25 - readme /* pick up issue: {  } */

- presentation /* pick up issue: {  } */
#26 - slides
#27 - timing
#28 - meet presentation requirements

**This alone will be tough to reach by due date - not including **
#29 - favorites + pinboards
#30 - user customization optiions like themes, light/dark switch, etc /* pick up issue: {  } */ -->

<!-- ** If we don't have the time to make this happen,
    we need to sit down and figure out what we can make happen
    and how we can present something we're proud of + will get us
    jobs with lots of money - we shouldn't wait till Sat to start figuring this out - we don't have time ** -->







<!-- TECHNOLOGIES
    - css framework - try materialize
    - mysql (sequelize(ORM), + professional appearing seed files)
    - express (handlebars.js)
    - node.js (dotenv, bcrypt)
    - heroku (deployement)
    - encryption/authentication for access (bcrypt, google*?)


    DESIRED FUNCTIONALITY
    - collaborative use between different users on project boards
    - third party api that gives us location and/or restroom data
    - search functionality
    - main menu functionality
    - rating functionality
    - review functionality
    - add new loo (includes location) functionality
    - save favorites funcitonality
    - log in functionality
    - search history or recent searches
    - professional appearance
    - responsive UI

    NEXT LEVEL EXTRAS
    - favorites + pinboards
    - user customization optiions ( themes, light/dark switch, etc )
    - weather api for homepage greeting/banner
    - automated scroll + transitions

    CHALLENGES + UNCHARTED TERRITORIES
    - third party api to provide location and/or restroom data
    - materialize css framework
    - handlebars framework
    - project scale



    TASK PRIORITY + ASSIGNMENTS
    *Please sign up + trade based on code speed strengths
    *If you have faster productivity, let slower coder have the task they can do fastest
    *If you're ahead of schedule, work ahead so we can kill this!

    - Tues: X
        - project idea { Janee' }
        - user story + wireframe { Kathryn }
        - file structure, repo set up, install dependencies { Kathryn }
    - Thurs: X
        - server + models { Janee' }
        - config/connection { Brandon }
        - server running { Kathryn }
    - Fri: 8
        - solidify needed data to be included in models + seeds {  }
        - solidify API { Brandon }
        - controllers/routes (create new loo, save, + review funcitonality (http methods)){ Kathryn }
        - models + seed structure {  }
        - create user logins, cookies, and properly encrypt information {  }
        - views, html, begin responsive styling {  }
        -
    - Sat: 7
        - configure search functionality (need restroom data {include location}) {  }
        - configure main menu functionality {  }
        - configure rating functionality {  }
    - Sun: 6
        - overflow day
        -
    - Mon: 5
        - configure save favorites + search history functionality {  }
        - heroku setup { Kathryn }
    - Tues: 4
        - complete MVP
        - assess where we're at and make a game plan for achieving desired final product
    - Thurs: 3
        - final touches
        - presentation plan { }
        - presentation runthrough
    - Fri: 2
        - commit final changes
    - Sat: 1
        - PRESENT






    -->
