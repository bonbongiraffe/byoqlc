# BYOQLC: Build Your Own Quarter Life Crisis
A tool for navigating your quarter life crisis with close to one-hundred activities and eleven cities to choose from. The travel recommendation website nobody asked for!

## User Experience:
Create your own profile with your name, profile picture url, and selected quarter life crisis level. Select activities with a provided budget from eleven different cities across the USA. View your current quarter life crisis activities in a cart page. View your summary when finished and other users' quarter life crisis. 

## Quick-Start Guide:
1. clone repository onto your local machine
2. cd into directory on your terminal
3. run `json-server --watch db.json` 
4. run `npm start` to view the website

## Features:
1. Components:
    - App
        - Activities
            - Search
            - ActivityCard
        - Cart 
            - (CartCard)
        - Login
        - Finish
            - FinishCard
        - Nav
2. Client-Side Routes:
    1. Login
    2. Activities
    3. Cart
    4. Finish
3. API made-from-scratch with resources:
    - Activities divided by Location
    - User data 
4. All user input and activity is **fully persisting**!
    - Refresh from any route and continue where you left off

## Challenges:
- creative work 
- CSS and styling
- routing and persisting

## Next-Steps:
- pie-chart graphic showing percentage of activites spent in what cities
- detailed description on activity cards (shown on back?)
- hover box showing current wallet (maybe whole nav should be floating?)
- still images on activities card show 10 second gif on hover
- activity images stored locally, not from external urls
- background images on activity screen based on location
- game design improvements:
    - activities in cities change upon subsequent visits
    - achievements based on activity selection on finish (i.e. went to all bar activities)
    - adding time metric
    - profile picture selection
    - variable cost activities
- fix routing to prevent breaking if user manually changes route on brower url

### Thank You For Viewing Our Project

--Jessica Giraldo</br>
--Megan Harrison</br>
--Francesco Wai