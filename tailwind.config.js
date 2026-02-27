/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}


/* 
//firstly intalling react and tailwind css
in terminal npm create vite@latest client react js+swc no yes cd client npm i npm install, npm install -D, 
npx tailwindcss init -package, npm run dev */
//delete App.css  because we are using tailwind css., delete vite.svg, react .jsv, 
//github repositary - git init, git add ., git .commit -m, git commit -m "install react js and tailwindcss and create the first template", 
//git remote add origin gitlink, git branch -m main, git push -u origin main