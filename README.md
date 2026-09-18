# Docker Node API

Express API demo with Docker, Compose, health checks, and tests.

## Endpoints
- `GET /` service info
- `GET /health` health payload
- `GET /api/info` runtime details

## Local run
```bash
npm install
npm start
```

## Tests
```bash
npm test
```

## Docker
```bash
docker compose up --build
```

Then open `http://localhost:3000/health`.

## Why this project
Shows container basics, a health endpoint, and a clean API shape useful for cloud and DevOps learning.
