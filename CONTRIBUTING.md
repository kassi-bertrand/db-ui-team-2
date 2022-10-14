# Contributing

As the best always come from team efforts, contributions are welcomed ❤️ ! The following guide describes guidelines and processes explained by TA [Hayden Center](https://github.com/HaydenCenter) to follow throughout the semester when interacting with this codebase, for consistency-purposes. The following document is also meant to serve as a reference for team, moving forward.

# How to start 🚀

Before making your contributions, whether for the frontend or the backend, you need to have this repository stored in your computer.

- Navigate to your prefered directory, run the following command:

```sh
git clone https://github.com/kassi-bertrand/db-ui-team-2.git
```

## Frontend

If you're on the UI part of the team:

1. Get into the repository's directory:

```sh
cd db-ui-team-2
```

2. Run the following command, to download the required packages on your local machine:

```sh
npm install
```

3. Lastly, run the following command to launch the application in your browser:

```sh
npm run start
```

## Backend

[Work In Progress]

## Implementing Issues

As you know, the project is spread over the course of four(4) sprints. Each sprint has a target number of user stories to implement. For clarity purposes, _each sprint have its own **dedicated** branch_. For instance, the Sprint 1 branch is named `sprint_1`, and Sprint 2 will be named `sprint_2`, etc...

So, to implement an issue (i.e. user story), on your local machine, please make sure:

1. **To be on the correct branch**, using the following command:

```sh
git switch branch_name
```

_Note: If the branch does not exit yet, please create one on GitHub, following this format: `sprint_n` ... where `n` is the sprint number, then run the following command in your terminal `git pull`_

2. **Create new feature branch off of the sprint branch you 're currently on**. On this branch you'll implement the user story (i.e. user story) you chose.

# Submitting pull requests

> What happens when you're done implementing a feature?

1. **Merge the sprint branch into your feature branch**, with:

```sh
git merge sprint_n
```

This will make sure you have the latest changes, if any. If you have no merge conflicts, move to `step 2`. If so, solve them before moving on.

2. **Create a pull request** to signal the team that you are ready to merge your new feature into the sprint branch.

3. **Merge your changes into the sprint branch**. Congratulations, you just implemented a new feature! 🌱

**Note**: Never ❌ merge buggy, or unfinished features into the sprint branch.
