# VRAD! -Vacation Rentals Around Denver-

This application was built with `create-react-app`. It's a simple vaction rental application that allows users to browse vacation listings by neighborhood in Denver! Users can get to know different areas around the city to find their perfect rental!

### Set Up
In your terminal: 

Clone down this repo

`Run npm install`

`Run npm start`

(Your browser should open for you to see and interact with the application);

## UI
When a user arrives at the Login page, they are greeted with a sign-in form. A username, email, and reason for visit are all required fields. 

Once the user signs in, they are greeted with options to explore each listed neighborhood. They are also shown a brief description of each area. 

When the user selects a neighborhood, they are taken to a page that will display all of the available listings for that area. 

If one particular listing looks appealing, they can click on the "See Listing" button to see more detailed information and pictures for that listing. 

While navigating listings, a user may also "Favorite" a listing, which will save that listing for later. 

If a user wishes to see their "Favorited" listings, they can do so by clicking the "Favorites" button in the top left corner of the application.

Finally, when a user is finished navigating the site, they can sign-out from any page. 


## Additional Info
This project was created using a mixture of class-based and functional Components in React. Browser Router was used for routing/navigation, and all data is being retrieved using asynchronous fetch calls within our Components. 

We also implemented Unit and/or Integration tests for all of our components, so feel free to dive into our testing suite to feel your way around the codebase!

## Challenges 
This project was challenging for us on a few different levels. This was our first project using Browser Router, and while challenging at first, we were able to successfully implement the tool into our project. Another 'road-block' was writing asynchronous network requests, and then subsequently testing those succesfully by mocking out the requests. 

