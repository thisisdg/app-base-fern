# DOCUMENTATION

## Setup:
1.  `npx create-react-app client`
2.  Create server.js in the parent folder of `client` directory
3.  `npm init` in the parent folder of `client` directory
4.  `npm install express --save` in the parent folder of `client` directory
5.  Create proxy, to let the Webpack Development Server know that our React app is running too, to proxy our API Requests from client to API Server. It will eventually be on 8080 port.
    Add:
		`"proxy": "http://localhost:8080/"`
    to `package.json` file in client directory
6.  We will setup how to call React from Node later
7.  Now lets tweak the architecture of client folder's React structure.
8.  In react, keep the related items as close as possible, so move the items to their respective folders. Similarly `App` and its sibling components will move to `components` folder.
    **With this change, now the entry files are directly under src**
9.  Add `Barrel` to the `/client /src /components` directory
10. 

## Dependencies:
| Dependency | Version |
| ---------- | ------- |
| Dependency 1 | version 1 |
| Dependency 2 | version 2 |
~~| Dependency 3 | version 3 |~~

## Folder names and their usage:
1.  `/client` - Contains the react app
2.  `/client /public` - Contains files like manifest.js, robots.txt, favicons etc.
3.  `/client /src` - Contains the entry files for the react app
4.  `/client /src /components` - Contains barrel and components as sibling directory with their related code
5.  `/client /src /components /app` - Contains the App component and its related code
6.  `/client /src /components /custom-component` - Contains the custom-component and their related code
7.  `/client /src /helpers` - Contains helpers and libraries which can be used directly into the code to avoid repetition of the code
8.  `/client /src /images` - Contains images for the UI
9.  `/client /src /open-source` - Contains open-source libraries and modules
10. `/client /src /packages` - Can contain packages that are decoupled code
11. `/client /src /utils` - Can be used to export utilties
12. `/client /src /node_modules` - Modules which will be used by our React App
13. `/node_modules` - Contains node modules which are used by the Node and Express for our backend.

## Check List:
- [ ] Use Eslint coding conventions
- [ ] Update release editions in the `README.md` file
- [ ] Dont add irrelevant libraries as they just increase the size. Try to find those packages/libraries that solves maximum issues or use and existing one.

## Issues & Questions:
- [ ] Compilation is successfull but InputField component HTML is never returned in the DOM
- [ ] What is the meaning of getElementById in component js?
- [x] Firebase setup
- [x] How should we send the data to Firebase?
- [ ] Filtering data, getting it back to the app