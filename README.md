***Important note***:

This assessment is meant to be completed within **a maximum of 2 hours**.

Just attempt this assessment, and submit your code before **2 hours** is up, regardless of whether it is fully completed.

You may provide **additional documentation** on how you would continue with this assessment if you were given more time.

# Overview

You are required to build a simple fullstack web application that displays a list of movies and movie details.

Within this Glitch project is an existing application boilerplate (Vue + Express), but you are free to modify it or use any other application boilerplate.

Any other frameworks can also be used as long your solution is fully Typescript/Javascript based.

Feel free to also download the project and work on it in localhost if you prefer so.

# Steps

1. Within Glitch, click on `Remix to Edit` to start own forked version of the code
2. Start editing code within Glitch to complete this assessment

# Details

* The backend server should load data from the movies data file found in `movies_metadata.json`.
* The backend server should expose APIs to the frontend to achieve the following:
  * List movies
  * Get single movie by ID
* The frontend web application should display 2 different screens:
  * List movies page (shown initially)
    * Display the following fields (`title`, `tagline` and `vote_average` [calculated out of 10]) with **responsive web design** (e.g. show 4 columns on a desktop but show only 1 column on a mobile device)
  * Display single movie page upon clicking movie in list page
    * Display every field (`release_date` should be localized based on browser settings. `runtime` is calculated in minutes)
    * Display a button/link to return to list movies page

**Additional**

* **Bonus points** will be given out for additional features such as:
  * Using Typescript instead of Javascript
  * Implementing a css framework such as Tailwind, etc
  * Implementing the use of a database (possibly with a free service such as Firebase Cloud Firestore) and consume data from the database instead of the movies data file
  * Implementing a CI pipeline (GitHub Actions / GitLab CI/CD / Bitbucket Pipelines) that can successfully run publicly in an open-source GitHub/GitLab/Bitbucket public git repository
* **Responsive web design** is explained here: [https://www.w3schools.com/html/html_responsive.asp](https://www.w3schools.com/html/html_responsive.asp)

# Code Submission

1. Within Glitch, go to `Tools` > `Import and Export` > `Download Project`
2. If you are not using Glitch, compress your project into a zip file without the `node_modules` folder
3. Submit the project zip file with the submission form provided in the email

# Further Project Details (Optional)

## Vue | Express Template

On the front-end,
- edit `src/main.js` and `public/index.html`
- drag in `assets`, like images or music, to add them to your project

On the back-end,
- your app starts at `server.js`
- add frameworks and packages in `package.json`
- safely store app secrets in `.env` (nobody can see this but you and people you invite)
