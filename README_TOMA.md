# Project setup

## 1. Set up the create-react-app Boilerplate
https://github.com/facebook/create-react-app

1. `cd your local path`
2. `mkdir my-project`
3. `cd my-project`
4. `sudo chown -R user . && chgrp -R user .`
5. `npx create-react-app .`
6. Do the flow and react-router mentioned in the doc
7. yarn add redux react-redux https://medium.com/@notrab/getting-started-with-create-react-app-redux-react-router-redux-thunk-d6a19259f71f

## 2. Set up Eslint, Airbnb and Prettier with
source : https://georgespake.com/blog/eslint/

7. `yarn add eslint --dev && yarn add babel-eslint --dev`
8. `./node_modules/.bin/eslint --init` (follow the instruction)
9. `yarn`
10. add a script under `scripts` in package.json : `"lint" : "eslint ."`
11. Fix variable unknown and file extension (recongnize syntax) by configuring `.eslintrc.json`
```
{
    "parser": "babel-eslint",
    "extends": "airbnb",
    "env": {
        "browser": true,
        "jasmine": true
    },
    "rules": {
        "max-len": [
            1,
            120
        ],
        "react/jsx-filename-extension": [
            1,
            {
                "extensions": [
                    ".js"
                ]
            }
        ]
    }
}```

12. ignore file linting. in `.eslintignore` put src/registerServiceWorker.js
13. Follow the instruction in create-react-app regarding prettier


# Resource for setting up vs code
https://hackernoon.com/configure-eslint-prettier-and-flow-in-vs-code-for-react-development-c9d95db07213