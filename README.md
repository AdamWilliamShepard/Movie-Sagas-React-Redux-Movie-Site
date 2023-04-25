# Movie Saga w/ React, Redux and Sagas

![Screenshot 2023-04-11 at 2 07 53 PM](https://user-images.githubusercontent.com/117591917/234154101-576b78b9-b1a5-49b8-87d6-a2c02035c88c.png)


## Description

Prime Movie saga is a multi-functional website that utilizes all the aspects of CRUD, including Redux and Sagas to  display a selection of movies.
<br /><br />

## Part 1: Movie List page.
Initial landing on the page  and all subsequent pages display a collapsable nav-bar on the left side of the screen that allows the user to directly navigate back home or to the 'Add Movie' page at any time.

Additionally the initial landing page displays to the user a list of movies that have been uploaded into the database. Each movie appears as a card on the page, and takes advantage of Material UI to display an on-hover effect for each card that the user can select. Clicking on a card takes the user to the movie detail page.
<br /><br />

## Part 2: Movie Detail page.

Clicking on a movie card will take you to a page dedicated to that specific movie- with details such as the movie title, movie poster url, genres and description dynamically generated from multiple tables in our database, which remaind persistant through reload. There is are two options on this page, one to return to home, and another to edit the movie details.
<br /><br />

## Part 3: Edit Movie page.

Upon selecting the edit button, the user is taken to a form by which the user could edit the title and description of the film. Pressing 'Save' will save the changes to the database and take the user back to the home view. Pressing cancel will merely take them to the home view.
<br /><br />

## Part 4: Add Movie page.

The final page is a form by which the user can add a film, complete with a movie title, poster url, movie description, and a genre that they can attach to the movie. Pressing 'Save' adds this movie to the database and returns the user to the home page. Pressing cancel takes the user home.
<br /><br />

### The Following Technologies Were Used


<a href="https://developer.mozilla.org/en-US/docs/Web/CSS"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" height="40px" width="40px" /></a><a href="https://developer.mozilla.org/en-US/docs/Web/HTML"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" height="40px" width="40px" /></a><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" height="40px" width="40px" /></a><a href="https://material-ui.com/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/materialui/materialui-original.svg" height="40px" width="40px" /></a><a href="https://nodejs.org/en/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" height="40px" width="40px" /></a><a href="https://www.postgresql.org/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg" height="40px" width="40px" /></a><a href="https://reactjs.org/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" height="40px" width="40px" /></a><a href="https://redux.js.org/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" height="40px" width="40px" /></a>

<br />

### Setting Up This Repo
- Create a database using the information provided in the data.sql file.
- Install npm.
```
npm install
```
- Start the server.
```
npm run server
```
- Start the client.
```
npm run client
```

<br />

### Things To Add In the Future

- Allow input validation for individual input fields.
- Modify image and card scalability for different browser displays.
- Correct an issue where the browser scroll bar does not reset on page change.
- Modify the size of the Movie Details page to maintain better consistancy throughout the project.
- Allow pre-filled input fields on the Edit Movie page to maintain their text through reload.


Additional README details can be found [here](https://github.com/PrimeAcademy/readme-template/blob/master/README.md).
