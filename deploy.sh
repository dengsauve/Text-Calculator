# Build it
npm run build

cd dist

# Commit it
git init
git remote add origin https://github.com/dengsauve/Text-Calculator.git
git checkout -b gh-pages
git add -A
git commit -m 'deployment'

# Ship it
git push -f origin gh-pages

cd -