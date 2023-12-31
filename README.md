# RoomPriceGenie React Developer Coding Challenge

![RoomPriceGenie](team.webp)

## Live Link:

- [https://sandpit-demo.web.app](https://sandpit-demo.web.app)

## Get Started

- `git clone git@github.com:david-potgieter/prg-react-developer-coding-challenge.git`
- `git checkout main`
- `npm install`
- `npm run dev`

## Workflow

- On `git commit ...`, I am using Husky to run script locally to ensure that the project is linted.
- On `git push` Husky again runs a script that will ensure all TS errors are fixed, and runs the tests currently added.
- When the PR is created, a Github Action will install run another script that will lint, TS check, test and comment the coverage to the PR. Firebase will deploy a preview for this version and also comment a link to the PR.
- Once the PR is merged, then Github actions will deploy this version to the production URL, and the solution is live.

## Tools Used

- [@tanstack/react-query](https://tanstack.com/query/latest)
- [date-fns](https://date-fns.org/)
- [jotai](https://jotai.org/)
- [Husky](https://typicode.github.io/husky/)
- [Firebase deploy via Github Actions](https://firebase.google.com/docs/hosting/github-integration)

## Additional Optimizations

- More tests: initial tests are just to show both component and functional tests
- Toggle to be able to show both table and card views
- Additional widgets and data representations
- Pagination for cards and tables

## Original Readme

### Overview

You have been asked to create a simple React application that allows users to browse a list of hotel rooms and add them to a cleaning table. A simple skeleton for the application was bootstrapped with Vite and should be built using React and TypeScript and should demonstrate your understanding of core React concepts such as hooks, context API, and reusable components, in addition to proficiency with data visualisation libraries like ReCharts. You can use additional libraries such as component libraries or other state management libraries to build the application, but TailwindCSS has been installed as that is the preferred choice of the team. The repository includes a small JSON file that contains the data that is required for this challenge and a function that generates random occupancy data for the chart. A selection of images are in the `./images` folder and the rooms.json references those. No backend service is required to store the data, all interactivity should take place in the UI. The coding challenge is designed so that it can be completed within 3-4 hours.

### Requirements

- The application should be built using React and TypeScript.
- The user should be able to view a list of hotel rooms, each with a number, image and category.
- The user should be able to add and remove a room to a cleaning table by clicking the "Needs cleaning" button.
- The user should be able to view the cleaning, which should display all the hotel rooms they have added.
- A graphical representation of room occupancy over a month using ReCharts should be provided.
  - It should show a line graph with days on the X-axis and room occupancy percentage on the Y-axis. Different categories of rooms should be represented by different lines on the graph. Provide a legend and tooltips for the chart to enhance user understanding.

### Getting Started

- Run `npm install` to install the dependencies.
- Run `npm run dev` to start the development server.
- Go to `http://localhost:5173` to view the application and the sample data.

### Instructions

- Open this repository to your local machine.
- Implement the requirements outlined above.
- Send your implementation by replying to the email with a download link.

### Evaluation Criteria

- Your submission will be evaluated based on the following criteria:
- Does the application meet the requirements outlined above?
- Is the application well-organized and easy to follow?
- Does the application demonstrate a good understanding of React concepts such as hooks, context API, and reusable components?
- Does the application display well on different screen sizes?
- Are the instructions for running the application clear and easy to follow?
- Bonus points:
  - Deploying the application to a free tier service of a hosting provider such as Netlify or Vercel.
  - Outlining any improvements you would make to the application if you had more time.
  - Implementing responsive design.

Good luck!
