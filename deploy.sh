# Build it
npm run build

cd dist

# Commit it
git add -A
git commit -m 'deployment'

# Ship it
git push -u origin gh-pages

cd -