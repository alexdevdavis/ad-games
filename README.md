# AD Games App

Welcome to the AD Games app.

Link to the [deployed version](https://sensational-youtiao-ad9d0b.netlify.app/)

## Description

Built with React, AD Games is an interface developed to interact with the [AD Games back-end API](https://github.com/alexdevdavis/ad-games) built in Node.j, and serves to demonstrate simple CRUD project functionality.

## To run the AD Games app locally (requires Node version 17 or later),

1. Clone this repo


```
git clone https://github.com/alexdevdavis/ad-games
```

2. Change directory to the new folder

```

cd <Folder path>
```

3. Ensure that the required dependencies have been installed locally

```
npm i
```

4. In the command line, run the project with Node:

```
npm start
```

## How to use AD Games
### View All Reviews
The landing page shows all game reviews avilable on the server. Use the drop-down menu at the top of the reviews panel to sort results by date created, number of comments, or the numbr of votes, while the in <descending/ascending> order select option allows you to alternate according to your preference.

### View and filter by category
The categories link in the navbar enables you to access the name and description of all the available categories, and clicking any one of these will filter your search results by the given category.

### To view a review
Click on the review preview card to load a single review. There are a number of interactions you can make with a single review in addition to reading the content.

1. Upvote!Show your appreciation for the review by clicking the upvote button in the head of each review.
2. Scrolling down the page, beneath the comment count, click the 'View' button to reveal any comments associated with a review. 
3. If you want to post a comment of your own, simply type your comment in the 'write a comment' box at the bottom of the single review and use the 'post comment' button. to ***post*** a comment -- note that you are required to ***login*** to post comments
4. Logging in involves accessing the 'select user bar in the top-right of the page. Simply click the login button once you have decided upon your login user credentials. This will enable you to post comments on reviews.
5. Note that if the comment is associated with your username, a delete button appears at the bottom of each comment card. This will permanently remove your comment from the list. The page is optimistically rendered here, so users receive instant feedbck from the interaction.

#### Logging out
Once your appetite for game reviews is satisfied, use the 'log out' button in the top right of the app display to disconnect your user from the app.

#### Viewports
The AD Games app is developed according to mobile-first principles, but will behave responsively for viewport widths of 600px or greater.


Thank you for taking the time to check out the AD Games app, and for consulting this README document. Suggested improvements are gratefully received; simply raise a pull request in the ad-games repo on GitHub.
