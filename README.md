# Personal website

An Astro + Tailwind personal site with Markdown content collections for projects and writing.

## Local development

```sh
npm install
npm run dev
```

## Editing content

- Update personal copy and links in `src/layouts/Layout.astro` and `src/pages/index.astro`.
- Add projects to `src/content/projects/` using the frontmatter fields in `src/content.config.ts`.
- Add posts to `src/content/posts/` with `title`, `description`, and `pubDate`.
- Replace the placeholder CV/about content in `src/pages/cv.astro` and `src/pages/about.astro`.

## GitHub Pages

The included workflow deploys on pushes to `main`. It sets the project-site base path from the repository name. For a user site repository named `yourusername.github.io`, change the workflow's `BASE_PATH` value to `/`.

In repository settings, enable **Pages → Source: GitHub Actions**.
