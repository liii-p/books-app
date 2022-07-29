# Google Books API App

## MVP

Create a page that allows users to search for books
Page should include the following:

- Header section introducing the page
- Form containing a text input and a submit / search button
- A grid of books

### Instructions:

- When the submit button is clicked you need the request books from the Google books API using the input value as your query string.

- The books that you receive should be rendered in the books grid.

- Each book in the grid should have an image, author, title and description.

- The grid should be responsive on different screen sizes.

- You should use async / await for your request code, NOT .then

### Styling (required):

- This application should look good, take some time to pick a palette and plan out your design. You can use tools like Figma or wireframe pro to plan what your application is going to look like.

- Styling must use BEM, and each block should have its own SCSS file

- Your palette should use variables
  Application Design (required):

- You should separate DOM functions and non-DOM functions in different modules Example: https://github.com/nology-tech/kiribati-resources/tree/main/js/modules

- Write as many non-DOM functions as you can

- Functions should do 1 thing, and should be as pure and reusable as possible

- Always use iterators over loops

- Always parametrize and abstract large pieces of duplicate code.

Bonus (optional, but highly recommended):

- Give feedback to the user when no book results can be found for the query.

- When a user clicks a book in the grid, a modal should appear with more book information, think about release, publish date, country, languages, etc.

## Design Process

Drafts and Ideas:
<img src="Images\Draft_1.png">

Second Idea/Draft:
<img src="Images\draft_2_home.png">
<img src="Images\draft_2_results.png">

Final Product:
<img src="Images\final-product.png">
<img src="Images\final-product2.png">

Originally, I was going to go with a purple-ish colour scheme but as I experimented with the css, I found that I preferred the look of a minimalistic pink colour scheme.

## Bugs & Fixes

As I tested my app, I came across the need to fix a number of edge cases that would occur. The first edge case/error I came across was the absence of certain information from the Google Books API, especially the thumbnail. If a book did not have a thumbnail, it would cause an error which stopped the whole app. To overcome this, I decided I needed to create an if statement to catch this error. I decided to use ternary statements as they are shorter, although they may reduce readability. If the thumbnail doesn't exist, the app instead returns an alternative image which says "image unavailable". Similar issues occurred where the author, publisher, etc. were unavailable so I used the same ternary method to allow the console to either output the relevant information or "N/A" where information was unavailable.

### Future Additions

- Return a result on the screen that says "No results found" when response from API is no results.
- Pagination to allow more results to be viewed
- Modal to allow user to click to read more information rather than have massive chunks of description already on display
