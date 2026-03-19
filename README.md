# TechNova Website

React + Vite marketing site configured for GitHub deployment.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

The production output is generated in `dist/`.

## GitHub Pages deployment

This repository is configured to deploy automatically with GitHub Actions.

1. Push the repository to GitHub.
2. In GitHub, open `Settings` -> `Pages`.
3. Under `Build and deployment`, set `Source` to `GitHub Actions`.
4. Push to the `main` branch.

The workflow in `.github/workflows/deploy.yml` will build the Vite app and publish it to GitHub Pages.

## Notes

- Routing uses `HashRouter`, which is compatible with GitHub Pages static hosting.
- Vite is configured with a relative base path, so the site works from a repository subpath.
