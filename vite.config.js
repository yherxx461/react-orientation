// PRIMARY WORKING DIRECTORY //

// COMMANDS
`npm install`
`git status` -- // not going to create a repo
`git init` -- // create additional files in the modules
`git add .`
`git commit -m "initial commit"`
// create a new repository in git hub
`copy github link to "react-orientation"`
`npm run dev`


// COMPONENTS
`header`
`form input and button`
`list -- list item 1, list item 2`
``

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
