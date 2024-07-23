# [joshuapjacob.com](https://joshuapjacob.com/)

Joshua P. Jacob's personal website. Built with [SvelteKit](https://kit.svelte.dev/).

## Project Setup

```bash
npm install
```

## Development

```bash
npm run dev
```

## Staging

```bash
docker build . -t personal-website
docker run -p 3000:3000 -it personal-website
```

## Production

```bash
bash deploy.sh
```
