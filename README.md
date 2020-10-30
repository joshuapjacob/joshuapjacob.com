<div align="center" style="background-color: black">
  <img alt="Logo" src="https://raw.githubusercontent.com/joshuapjacob/joshuapjacob.com/master/src/assets/logo.png" width="100" />
</div>
<h1 align="center">
<a href="https://joshuapjacob.com" target="_blank">joshuapjacob.com</a>
</h1>
<p align="center">
  Built with <a href="https://vuejs.org/" target="_blank">Vue.js</a> and hosted on <a href="https://m.do.co/c/d1712c8dc6f3" target="_blank">DigitalOcean</a>
</p>

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


## Continuous Delivery

Once changes to the master branch on the GitHub repository have been pushed/merged, [Docker Hub](https://hub.docker.com/) builds the image and stores it on a private repository. Every five minutes, the [Watchtower](https://containrrr.dev/watchtower) container on my [DigitalOcean](https://m.do.co/c/d1712c8dc6f3) web server droplet checks for a new image of my website container and updates it if available.

See [joshuapjacob.com-webserver](https://github.com/joshuapjacob/joshuapjacob.com-webserver) for more info.

## SSL/TLS Certificates

For HTTPS, certificates are generated/renewed through the [Certbot](https://hub.docker.com/r/certbot/certbot/) container and [Let's Encrypt](https://letsencrypt.org/). [Nginx](https://www.nginx.com/) on this repository is configured to route [ACME](https://tools.ietf.org/html/rfc8555) challenges to a volume shared with the [Certbot](https://hub.docker.com/r/certbot/certbot/) container.

See [joshuapjacob.com-webserver](https://github.com/joshuapjacob/joshuapjacob.com-webserver) for more info.

*I just wanted that fancy lock so my website looks legit.*

## Credits
- https://github.com/akella/webgl-mouseover-effects/blob/master/js/scene.js (the cool landing section)