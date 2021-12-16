for production:

"scripts": {
    "build": "babel index.js -w --out-dir prd",
    "start": "npm run build && nodemon prd/index.js",
    "server": "node prd/index.js"
}

for development:

"scripts": {
    "start": "babel index.js -w --out-dir prd",
    "start": "nodemon prd/index.js"
}