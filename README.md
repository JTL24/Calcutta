
# March Madness Calcutta (currently getting moved to a React Native App) 

This is a creation by me and @pt-07 for a website that will handle all functions of Calcutta (not the city), but the auction and league frequently used for March Madness. 

This is meant to be a platform that will handle all of the Calcutta workings (auctions, leagues, and eventually payments)  

The tech stack is React.js, Node.js, and MongoDB. 

## Instructions 

Delete the package-lock.json file, if it is in there (depends if I remember to not add it to a push).
 
```
cd my-app 
npm install
npm run start 
```

This will get the react app started 

``` 
cd server
nodemon server
``` 

Right now, there is no cluster on the cloud.

So, you will have to create your own MongoDB cluster and replace the uri strings in db.js and server.js 

## In Development 
- Getting the database into MongoDB Atlas to prepare for global deployment 
- Fix up front end gimixs
- Nest Users and Bids collections in the backend  
