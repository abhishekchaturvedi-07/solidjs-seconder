## Usage

Those templates dependencies are maintained via [pnpm](https://pnpm.io) via `pnpm up -Lri`.

This is the reason you see a `pnpm-lock.yaml`. That being said, any package manager will work. This file can be safely be removed once you clone a template.

```bash
$ npm install # or pnpm install or yarn install
```

### Learn more on the [Solid Website](https://solidjs.com) and come chat with us on our [Discord](https://discord.com/invite/solidjs)

## Available Scripts

In the project directory, you can run:

### `npm dev` or `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>

### `npm run build`

Builds the app for production to the `dist` folder.<br>
It correctly bundles Solid in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

## Deployment

You can deploy the `dist` folder to any static host provider (netlify, surge, now, etc.)


**************************************************************************************************************




## Commit 1 : Base Setup

*1* Install PNPM -> `Fast, disk space efficient package manager` -> `npm install -g pnpm`

*2* Install Degit -> `npm install -g degit`
    **degit makes copies of git repositories. When you run degit some-user/some-repo , it will find the latest commit on https://github.com/some-user/some-repo and download the associated tar file to ~/. degit/some-user/some-repo/commithash. tar. gz if it doesn't already exist locally.**
    
*3* Visit Solid.js -> `https://github.com/solidjs/templates` and install solidJs project as you want. In this project I am using TS.
    `# Typescript template`
    `$ npx degit solidjs/templates/ts my-solid-project`
    `$ cd my-solid-project`
    `$ npm install # or pnpm install or yarn install`



    **************************************************************************************************************



## Commit 2 : Add Index and App files

*1* Remove all the js and css files under src

*2* Add index.tsx to render the jsx in html

*3* Add App.tsx to render the jsx from App
    

    **************************************************************************************************************



## Commit 3 : Tailwind install and run

*1* Install Tailwind from : https://tailwindcss.com/docs/guides/solidjs

*2* `npm install -D tailwindcss postcss autoprefixer`

*3* `npx tailwindcss init -p`
    
*4* Add in tailwind  config file :
    `module.exports = {`
    `content: [`
        `"./src/**/*.{js,jsx,ts,tsx}",`
    `],`
    `theme: {`
        `extend: {},`
    `},`
    `plugins: [],`
    `}`

*5* Add index.css and paste the utilities which we  can use to style
    `@tailwind base;`
    `@tailwind components;`
    `@tailwind utilities;`

*6* Import index.css in index.tsx AND add tailwind pre-defined classes in elements and check if working fine!


    **************************************************************************************************************


 ## Commit 4 : Layout Changes

*1* New HTML & CSS Changes in App.tsx and index.css | Also modify the tailwind.config.css

*2* Install Tailwind Forms `pnpm install -D @tailwindcss/forms`

*3* Install solid icons `pnpm install solid-icons`