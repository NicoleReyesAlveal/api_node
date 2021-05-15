
First install NodeJS:  
`$ brew install node`


After cloning the repository,  install these dependencies
```
  "dependencies": {
    "body-parser": "^1.19.0",
    "express": "^4.17.1",
    "mongodb": "^3.6.6",
    "mongoose": "^5.12.8"
  }
  ```
running the following command:  
`$ npm install <dependency_name>`


To run the server:  
`$ node app.js`

Once the server is running, you should see this message:  
`Connected to Mongodb Atlas.`  
`Listening at http://localhost:3000`  

Finally, use the endpoints with Postman or Insomnia, they're in the router file.
