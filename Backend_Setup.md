# Set up backend project
---
- initialize project name and description...
  - ```javascript
    npm init
    ```
- connect github
- change branch
  - ```javascript
    git branch -M main
    ```
- set remote
  - ```javascript
     git remote add origin https://github.com/xyz
    ```
- set upstream
  - ```javascript
    git push -u origin main
    ```
---
# File Structure
- Create `public` folder
- Create `.gitignore` file and generat content from here. 
  - ```javascript
    https://mrkandreev.name/snippets/gitignore-generator/#Node
    ```
- then copy the content and paste the content inside `.gitignore` file 
- Create `.env` file
- Create `.env.semple` file
- Create `src` folder
  - ```javascript
    mkdir src
    ```
- Create all file inside the src folder
  - ```javascript
    cd src
    foreach ($file in "app.js", "constants.js", "index.js") { New-Item $file -ItemType File }
    ```
- install nodemon
  - ```javascript
    npm i -D nodemon
    ```
- Edit `package.json` file
- Create all folder inside the src folder
  - ```javascript
    mkdir controllers db middlewares models routes utils
    ```
- install prettier
  - ```javascript
    npm i -D prettier
    ```
- Create `.prettierrc` file
  - ```json
    {
      "singleQuote": false,
      "bracketSpacing": true,
      "tabWidth": 2,
      "trailingComma": "es5",
      "semi": true
    }
    ```
- Create `.prettierignore` file
  - ```
    /.vscode
    /node_modules
    ./dist
  
    *.env
    .env
    .env.*
    ```
  ---
# Connect MongoDB Database
- Set env variable
  - ```env
      PORT=XXXX
      MONGODB_URI=mongodb+srv://<Replace_with_your_MongoDB_userName>:<Replace_with_your_MongoDB_password>@cluster0.6jbwe.mongodb.net
      ```
- set database name inside `constants.js`
  - ```javascript
    export const DB_NAME = "database007";  
    ```
- install dependency 
  - mongoose 
  - express 
  - dotenv 
  - ```javascript
    npm i mongoose express dotenv
    ```
- Create `index.js` file inside `src/db` folder
  -  ```javascript 
     New-Item  src\db\index.js  
     ```
- then go to inside the `src\db\index.js` file and write this code:
  - ```javascript 
    import mongoose from "mongoose";
    import { DB_NAME } from '../constants.js';
    
    const connectDB = async () => {
        try {
            const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
            console.log(`\n MongoDB connected !! DB HOST : ${connectionInstance.connection.host}`);
        } catch (error) {
            console.log(`MONGODB connection error : ${error}`);
            process.exit(1);
        }
    }
    
    export default connectDB;

     ```
- Go to the `src/index.js` file and import the `connectDB` from `src/db/index.js` or write this code
  - ```javascript
    //? require('dotenv').config({path:'./env'});
    import dotenv from "dotenv";
    import connectDB from "./db/index.js";
    dotenv.config({
        path : './env'
    });
    connectDB()
  ```
- Edit `script` from `package.json` file
  - ```json
    "scripts": {
    "dev": "nodemon -r dotenv/config --experimental-json-modules src/index.js"
    }  
    ```








  ```javascript
  
  ```
  
