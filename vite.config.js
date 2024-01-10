// PRIMARY WORKING DIRECTORY //

// COMMANDS
// `npm install`
// `git status` -- not going to create a repo
// `git init` -- create additional files in the modules
// `git add .`
// `git commit -m "initial commit"`
// create a new repository in git hub
// `copy github link to "react-orientation"`
// `npm run dev` -- "vite" (package.json) is now our server and hosting all components and files together


// COMPONENTS ELEMENTS
// `header`
// `form input and button`
// `list -- list item 1, list item 2`
// `footer`

// STAGE
// 

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
