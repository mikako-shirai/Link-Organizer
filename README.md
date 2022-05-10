# cc26 Solo MVP Project - Link Organizer
  
**PostKit** is a web application designed to help you organize your experience with browsers.  
You can organize and group URLs as you like, and share it with people.   
No more going back-and-forth between your browser and slack channels, guaranteed.  
  
  
## Built with  
This project is built using the following frameworks/services  
- React  
- Express.js  
- MongoDB  
- Heroku  
- ~~Google Chrome Extension~~ (work in progress)  
  

## Getting Started  
All _front-end_ files are under the `./client` folder and all _back-end_ files are under the `./server` folder.  
  
1. clone this repository  
```
$ git clone https://github.com/mikako-shirai/Link-Organizer.git
```  
2. move to the root `Link-Organizer` directory  
```
$ cd Link-Organizer
```  
3. install dependencies for _backend_  
```
$ npm install
```  
4. open separate terminal and move to _client_ directory  
```
$ cd client
```  
5. install dependencies for _frontend_  
```
$ npm install
```  
&ensp;&ensp;*please keep both terminal open separately  
  
  
## Setting Up Database  
Please sign up for [MongoDB](https://www.mongodb.com/) if you haven't created an account.  
Once you’ve logged in successfully, create a new cluster. Refer to [this](https://medium.com/featurepreneur/working-mongodb-5ae6a9d53462) article if you are not familiar with MongoDB.    
  
1. create `.env` file in the root directory (`./`)  
2. provide your credentials there in the provided format (key=value)
```
MONGODB_URL=[your-mongodb-uri-here]
```  
  
  
## Runs the App  
5. run React in _frontend_ terminal (`./client`)  
```
$ npm start
```  
6. run the server in _backend_ terminal (`./`)  
```
$ npm run server
```  
7. open [http://localhost:3000](http://localhost:3000) to view the app in your browser
  
8. organize your browser experience using **PostKit**!  
  
  
## Issues  
Current Issues to Fix:  
- [ ] (work in progress)
  
  
## Backlog  
Future features to implement:  
- [ ] Log-in and sign-up feature.
- [ ] User authentication.
- [ ] Page preview for each link.
- [ ] Options for folder privacy (public/private).
- [ ] Adding tags to both folders and links.
- [ ] Filter by tags.
- [ ] Sorting oprtions for folders and links.
- [ ] Create a Google Chrome Extension and make it easier to add links to a folder.
