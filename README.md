[GitHub Deployed Page](https://rancidtomatillo.herokuapp.com/)

---
# Rancid Tomatillos
###### A simple, yet bold, site to view movies and their ratings


---
## Table of Contents
* [Introduction](#introduction)
* [Features](#features)
* [Resources](#resources)
* [Contributors](#contributors)

## Introduction

![Welcome to Rancid Tomatillos](https://media.giphy.com/media/0aJoS84OErWv5MlCmw/giphy.gif)

The Rancid Tomatillos website is based on project criteria laid out [here](https://frontend.turing.io/projects/module-3/rancid-tomatillos-v3.html) for Turing Front End students in weeks 1-3 of Mod 3. The project promotes students to gain competency with React fundamentals by creating a multi-page UX using Router as well as learning how to test React components & asynchronous JavaScript.

The project emphasises proper interactions between components, thusly pushing students to think carefully and critically about their logic to maintain the "data down, actions up" principles. The project also increases the scope of employing software developing skills to the planning stages - encouraging students to use project management tools and utilize wireframing and mind-mapping.

The site presents the user an assortment of movies with their corresponding information and gives the user the ability to sort movies based on their ratings.


## Features
---
* [General Site Features](#general-site-features)
* [Responsive Design](#responsive-design)
* [Test Driven Development](#test-driven-development)
* [Roadmap](#roadmap)
---

#### General Site Features
Upon visiting the app, all movies are automatically displayed. When a user clicks on a movie and the details page is rendered, the URL updates to reflect that movie’s unique ID. Once a user has clicked on a movie card, that selected movie’s details are rendered and displayed, while simultaneous removing any other movie's data from view. Here, a user may either click the "RANCID TOMATILLO" navigation bar or the browser forward & back arrows to navigate back to the main view for all movies. In main view, a user can click the "Filter by Rating" button to display movies with only that selected rating.


###### Selecting A Movie
 When a user clicks on a movie, that selected movie’s details are rendered and displayed. Details for each movie include a title, tagline, overview, release date,  rating, genre(s), bugdget, revenue, and duration. There are a few instances where a movie does not have data representing one of these eight fields. In this case, that specific stat is automatically filled in with "N/A".
 
![selecting a movie](https://media.giphy.com/media/e3TdPxtxaxzMGs3UnR/giphy.gif)


###### Returning To Main View
Users have the ability to return back to main by  either clicking the "RANCID TOMATILLO" navigation bar or the browser forward & back arrows.

![Returning To Main View](https://media.giphy.com/media/DihScxmIsNtHmvvi72/giphy.gif)

###### Filter By Rating
When a user clicks the "Filter by Rating" button, they are presented with a series of ratings to choose from. Upon clicking one of these ratings, the page will render and display movies with only that chosen rating.

![Filter By Rating](https://media.giphy.com/media/ZT9YdkzuGeH7RU6UIx/giphy.gif)

###### No Movies Available For Filtered Rating
In the event that a user may choose a rating that has no movies for it (in our case, that would be "1 Star" or "2 Star"), a message will appear reading "No movies with that rating".

![No Ratings](https://media.giphy.com/media/8wjLQMinu0g1UegG6T/giphy.gif)

#### Responsive Design
There was a considerable amount of attention paid to building out the architecture for this app. This was met with the intended goal of making this site as responsive as possible. 

![Responsive design gif](https://media.giphy.com/media/Hh82hdVzlLLwmf4Wry/giphy.gif)


#### Test Driven Development

- Unit & integration tests are passing.
- Tests have been updated to accommodate Router
- Asynchronous testing is completed
- Router testing is completed

To run the testing suite for TDD, enter `npm test` in terminal. Any questions please contact the team through github!

#### Roadmap

In future iterations, additions to the Rancid Tomatillos site include:
- Sorting movies by genre
- Tightening up styling 
- Improving resposnive design for selected movies
- A user login + local and server-side storage
- Cleaner logic
- More considerations for accessibility

#### Resources

React Bootstrap:
- Drop Down (for Filter by Ratings button): https://react-bootstrap.github.io/components/dropdowns/
- Cards: https://react-bootstrap.github.io/components/cards/
- Carousel (for Featured Movies): https://react-bootstrap.github.io/components/carousel/
- Nav Bar: https://react-bootstrap.github.io/components/navbar/

Testing:
- https://testing-library.com/docs/react-testing-library/cheatsheet/
- https://testing-library.com/docs/dom-testing-library/api-queries/
- https://testing-library.com/docs/dom-testing-library/api-async

## Contributors
<img src="https://avatars2.githubusercontent.com/u/36242106?s=460&u=67cc9f62e495cec196581afa73f9110959c562cd&v=4" alt="Coding Dingus"
 width="150" height="auto" style="float: left" />\
**Caleb Cyphers**

[GitHub Profile](https://github.com/CalebCyphers)

<img src="https://avatars2.githubusercontent.com/u/62954974?s=400&u=b246587c21877b7fe4a4972e89ec98677d5c29d6&v=4" alt="Coding Dangus"
 width="150" height="auto" style="float: left" />\
**Demaceo Vincent Howard**

[GitHub Profile](https://github.com/demaceo)
