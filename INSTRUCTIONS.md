# React-Redux with Redux-Sagas

This week you have two separate parts to work on:

1. Adding features to an existing Movie App with React-Redux and Redux-Sagas
2. Practicing SQL

Be sure to do both parts!

---

## Add the Detail View to our Movie App

For this weekend challenge you'll be expanding on a movie management application! We're already able to see movies that exist in our DB. We'll need to be able to see detailed view for each individual movie, including all genres associated with that movie. This is a very common pattern, to go from a list to showing more information about a single item. 

## Database Setup

1. [x] Create a database named `saga_movies_weekend`
2. [x] Run the queries from `database.sql` on the `saga_movies_weekend` database

## Install Dependencies

1. [x] `npm install`
2. [x] `npm run server`
3. [x] `npm run client`

- [x] TODO: When a movie poster is clicked, a user should be brought to the `/details` view for that movie.
- [x] TODO: The details page should have a `Back to List` button, which should bring the user to the Home/List Page

### General Considerations


- [ ] Invest some time in styling it up!
    - [ ] Research cards for your movie posters on the list page
    - [ ] Research grids for your movie posters on the Movie List page
- [ ] Commit your code frequently! You should have at 15+ commits on a project of this size. Use branches to help break down your features.
- [ ] Comment your code.
- [ ] Update this README to include a description of the project in your own words.

---

### Other Ideas

- [x] Display the current values in the input (title) and textarea (description) on the Edit Page
- [ ] Display all genres on movie list page. Research JSON_AGG to make this possible.
- [ ] Move sagas and reducers out of your `index.js` and into separate files (ideally in `src/redux/reducers` and `src/redux/sagas` folders).
- [x] Allow the user to refresh the details or edit page. The url for the details page would be something like `/details/1` for movie with id of `1`. Research [react router params](https://reacttraining.com/react-router/web/example/url-params).
- [ ] Allow the user to add a genre to a movie.
- [ ] Allow the user to remove a genre from a movie.
- [ ] Only display the top 10 movies, and allow the user to search for movie titles with a search bar on the home page (you can do this on the client side or the server side, server side is a bigger stretch, but good practice).

