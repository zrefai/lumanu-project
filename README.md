# Github Repository Tracker

A github repository tracker that gives you detailed information about the latest release of a repository

# Deployed website

You can go the the prod version of this app at https://git-tracker-lumanu.web.app/

## Available Scripts

In the project directory, you can run:

### `yarn install`

Runs the installer.\
Installs all of the necessary packages that the app needs to run.

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## How it works

### SearchBar

You can search for repositories or users in the search bar. The the first five results will appear in a suggestions list under the search bar.

Example Searches:

- `microsoft`, where one is looking for repositories under the microsoft user name
- `microsoft/vscode`, where one is search for repositories under microsoft with the name vscode

The search bar uses the Github Search API to get the suggestions listed in the suggestions list.

### SuggestionsList

These are the list of "suggestions" after you query the Search API. The top 5 results will show up in this list. If you are looking for a specific repository and it did not show up in the `SuggestionsList`, the query is either incorrect, or it needs to be more specific.

The `SuggestionList` displays a list of `Suggestions`. Each `Suggestion` links to the `RepoList` through redux. You can add a suggestion to the `RepoList` by hitting the plus button to the left of a `Suggestion`.

### RepoList

The `RepoList` presents the list of user tracked repositories. After adding a `Suggestion` from the `SuggestionList`, the `RepoList` will re-render with the newly added repository. This is because the `RepoList` subscribes to `repos` in the redux state, and will re-render everytime there is a change in `repos` state.

`RepoList` renders a list of `RepoCard`s. A card can be removed from the list by hitting the remove button at the top left of the card. It will no longer be tracked, and will be removed from the cache

### RepoCard

The `RepoCard` does a couple of things at the same time:

- It carries some of the information about a tracked repository
- Subscribes to `repos` state in redux so that it can be updated when a new release comes in
- It is marked as new by the green color around its border. After it is clicked on, it changes that color to grey (which signifies that the user looked at it).
- After a new release comes in, it will change itself back to the green "new" color.
- Uses a release revalidate hook to update the cache with any new release information

The release revalidate hook is the most important thing that this component contains. After rendering, it will check to see if any new updates should be made to the release section of a particular repository. If a new release is identified the `repos` state is updated in redux, which causes the `RepoCard` to re-render with the new release information; it will also mark that card as not "seen." This alerts the user of any new updates to the repository after a reload of the page.

### RepoDetails

`RepoDetails` gets passed the repository id so that it can find it in the `repos` state. It will display all of the information of the current release and some meta info about the repository.

`RepoDetails` also uses a markdown reader to display the release markdown in a nice formatt.

### Caching

Redux handles the general state management in the app while redux persist handles the caching to localStorage
