# Example SPA with nginx conf

### Prerequisites

1. nginx (can use https://formulae.brew.sh/formula/nginx for mac)
2. node with `yarn`

### Build client

```
cd src/client
yarn
yarn build
```

### Run server 

```
cd src/server
npm in
node server.js
```

### Run nginx 

Update `nginx.conf` in this repo to include a path to your
build react app (line 24) 

Replace your `nginx.conf` with the one from this repo 
(if you installed via Homebrew it should be here `/usr/local/etc/nginx/nginx.conf`)

Start nginx (if you installed via Homebrew then `brew services restart nginx`)

### ????

Open http://localhost:8080/

1. Your /api/ calls will be routed to Express server
2. All other pages like http://localhost:8080/test or http://localhost:8080/pewpew 
will be routed to your React app so you can use React router later to render different pages

