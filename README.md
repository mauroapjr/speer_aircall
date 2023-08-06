## Summary

The goal of this test is to make you code a small ReactJS app. We have prepared a skeleton app for you, but please change whatever you want (CSS files, HTML structure, JS structure, etc).

The app will have the following features:
- **Activity Feed** - simple list of calls
- **Activity Detail** - detail of a call
- **Archive** - the final user should be able to archive (and unarchive) a call. Archived calls will no longer be displayed on the Activity Feed and should have a separate Archived Tab.
- A button to archive all calls in the activity feed
- A button to unarchive all calls in the archived calls tab

Show us what you can do in 48 hours. You will be assessed on the following parameters: 
- Focus on design (Pay attention to the UI/UX and transitions)
- Best React Practices
- Code Readability and Maintainability

## Submission
After you're done with the assignment, please submit a link to the **GitHub/Bitbucket repository** (make sure it's public) with your code **AND** a deployment link where our recruiters can interact with the live version. You can use freely available tools like **Netlify, Vercel, Heroku, etc** to deploy your React application.

**Note:** Submissions without a valid repository and deployment link will be removed from any further consideration.

To give you an idea, here's what our app looks like:


![app](https://user-images.githubusercontent.com/630714/29357034-763d7216-8276-11e7-8bcb-e77d9645dfcc.png)

## Installation

We're using [yarn](https://yarnpkg.com) here (but you can use npm):

```
yarn install
yarn start
```

## API documentation

### Routes

Here is the API address: https://cerulean-marlin-wig.cyclic.app/ <br>
If you run into a CORS error, please prepend the base URL with this CORS Anywhere server URL: https://charming-bat-singlet.cyclic.app/ <br>
The prepended base URL will look like this https://charming-bat-singlet.cyclic.app/https://cerulean-marlin-wig.cyclic.app/

The API is hosted on a free server, which is why the first time you call the API, it will throw an error. The server goes to sleep if there hasn't been any activity for a while, but after 30-60 seconds of the first call, it should work as expected. Please reach out to us in case it doesn't.

- **GET** - BASE_URL/activities: get calls to display in the Activity Feed
- **GET** - BASE_URL/activities/<call_id> retrieve a specific call details
- **PATCH** - BASE_URL/activities/<call_id> update a call. The only field updatable is `is_archived (bool)`. You'll need to send a JSON in the request body:
```
{
  is_archived: true
}
```
- **PATCH** - BASE_URL/reset: Reset all calls to initial state (usefull if you archived all calls).

### Call object

- **id** - unique ID of call
- **created_at** - creation date
- **direction** - `inbound` or `outbound` call
- **from** - caller's number
- **to** - callee's number
- **via** - Aircall number used for the call
- **duration** - duration of a call (in seconds)
- **is_archived** - call is archived or not
- **call_type** - can be a `missed`, `answered` or `voicemail` call.




# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
