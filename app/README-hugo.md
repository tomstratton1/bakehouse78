# Hugo Conversion for Bakehouse 78

This directory now contains a Hugo site version of the Bakehouse 78 app.

## Build and preview

1. Install Hugo: https://gohugo.io/getting-started/installing/
2. Run from the project root:

```bash
hugo server -D
```

3. Open `http://localhost:1313`

## Run in Docker

From the repository root, start the Hugo service:

```bash
docker compose up hugo
```

Then open `http://localhost:1313`.

## Structure

- `config.toml` — site configuration and menu
- `content/` — page content
- `layouts/` — Hugo templates
- `data/` — menu items and sweet bakes
- `static/css/styles.css` — page styling

## Notes

- The Hugo site uses the existing image assets from `public/` via static symlinks.
- The contact page is static and points to the configured email address in `config.toml`.
