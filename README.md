# Hugo + Tailwind CSS Starter

This project is how I setup a Hugo project to use Tailwind CSS. There are many starters like it, but this one is mine.

Uses inspiration from https://www.unsungnovelty.org/posts/03/2022/how-to-add-tailwind-css-3-to-a-hugo-website-in-2022/.

## Usage

* Clone this repo
* Change README

For development:

Watch for theme changes:

```
cd themes/tailwindcss/
npx tailwindcss -i ./assets/main.css -o ./assets/style.css --watch
```

Watch for hugo changes:

```
hugo server --disableFastRender
```

## How I created this repo

```
# Use hugo to create a new directory, initialize w empty commit + initial code
hugo new site hugo-tailwindcss-starter
cd hugo-tailwindcss-starter/
git init
git commit -m 'Initial commit' --allow-empty
git add .
git commit -m 'hugo new site hugo-tailwindcss-starter'

# Generate a theme
hugo new theme tailwindcss
git add .
git commit -m 'hugo new theme tailwindcss'
# Modify config.toml to use tailwindcss theme

# Add tailwindcss to the theme
cd themes/tailwindcss/
npm i --save-dev tailwindcss @tailwindcss/aspect-ratio @tailwindcss/forms @tailwindcss/typography
npx tailwindcss init
# Modify tailwind.config.js to read hugo paths and use plugins
mkdir assets/
touch assets/main.css
# Modify assets/main.css to include tailwind
touch assets/style.css
# Modify layouts/partials/head.html to include the stylesheet
# Add a .gitignore here to ignore node_modules/
git add .
git commit -m 'Populate tailwindcss theme and wire it up'
cd ../../

# Modify tailwindcss to actually show content
# In the dir themes/tailwindcss/layouts/_default/: change baseof.html, list.html, and single.html to render a main block, print the .Content, and the head, header, and footer partials
# Modify themes/tailwindcss/layouts/index.html to have just `{{ .Content }}`
# Create a content/_index.md file as the home page
git add .
git commit -m 'Get tailwindcss theme to show stuff'

# Generate the site
# Change the base URL to localhost port 3000 by editing config.toml: baseURL = 'http://localhost:3000/'
# Add a .gitignore in the root of the repo to ignore .hugo_build.lock
git add .
git commit -m 'Ignore .hugo_build.lock'
# First, build the theme:
cd themes/tailwindcss/
npx tailwindcss -i ./assets/main.css -o ./assets/style.css
cd ../../
# Next, build the site:
hugo
# Notice the site's files are now in public/
git add .
git commit -m 'Generate site'

# View the site
# Note: you can just do `hugo server --disableFastRender` but for a "pure" experience you can do:
cd public/
npx browser-sync start --server --no-reload-on-restart --no-open --no-snippet --port=3000
```

