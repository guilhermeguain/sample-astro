# Astro.js Blog Project with Strapi Integration

This project demonstrates a basic implementation of an Astro.js site that consumes data from Strapi, a headless CMS, to display a blog of posts. The site fetches blog posts stored in Strapi and dynamically generates pages to showcase each post.

## 🔑 Key Features

- Astro.js: A modern static site generator that allows you to build fast, content-focused websites with ease.
- Strapi: An open-source headless CMS that provides a user-friendly interface for managing content and a powerful API for fetching that content.
- Dynamic Content: Blog posts are fetched from Strapi and rendered on the site, allowing for easy content updates through Strapi's interface.

## 📃 How it works

1. Setup Strapi: Ensure Strapi is running and accessible. Configure your content types for the blog posts (e.g., title, content, image, etc.).
2. Fetch Data: Astro.js fetches data from Strapi using REST API or GraphQL during the build process.
3. Generate Pages: Astro.js generates static HTML pages for each blog post, ensuring fast load times and SEO-friendly URLs.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
