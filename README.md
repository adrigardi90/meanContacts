<p align="center">
  <img src="https://github.com/adrigardi90/meanContacts/blob/master/client/images/mean.jpg" alt="Mean Contacts Calendar" width="500" height="300"/>
</p>

# meanContacts
> My contacts calendar. MEAN Application ([MongoDB](https://www.mongodb.com/es), [Exppres](http://expressjs.com/es/), [AngularJS](https://angularjs.org/) &amp; [Node.js]((https://nodejs.org/es/))) with login authentication and session control.

## Quick start
First of all, you need to install MongoDB in your PC.

```bash
# clone the repo
git clone https://github.com/adrigardi90/meanContacts.git

# change into the repo directory
cd meanContacts

# install
npm install

# execute the server and the client of MongoDB in bin folder of the instalation
mongod.exe
mongo.exe

# run
nodemon index.js | node index.js
```

Then visit [http://localhost:3030](http://localhost:3030) in your browser

## Notes
If you want to exit the application, it recommended logout throught the logout button inside the web in order to clean the token session correctly  
