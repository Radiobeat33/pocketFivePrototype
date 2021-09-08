# Description

Staking web app to be integrated into pocketfives.com. It is utilizing Next.js.

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js` for example. The page auto-updates as you edit the file.

## Testing

Currently, there is a root level test file in the `src/tests` folder.
All other test files exist on a component by component basis. Each
componenet folder has its own test file.

Run tests:

```bash
npm run test
```

Set a watcher to monitor test file changes:

```bash
npm run test-watch
```

## Production

For production release:

```bash
npm run build
npm run start
```

## Docker

You can run a fully dockerized environment locally by running:

```bash
docker-compose up --build
```

Live reloading will work as expected while running in the docker container.

## Debugging

There is live debugging setup for VS Code.

It does not matter if you are running locally or through Docker Compose, once the app is running, you can use the VS Code debug configuration `Debug App Staking`

## Learn More about Next.js

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
