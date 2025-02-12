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
- Create `.gitignore` file and generat content from here then copy the content and paste the content inside `.gitignore` file 
- ```javascript
  https://mrkandreev.name/snippets/gitignore-generator/#Node
  ```
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
  ```javascript
  
  ```
  
