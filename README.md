# Personal webpage

Source for [edanbro.github.io/personal-webpage](https://edanbro.github.io/personal-webpage/), a single-page portfolio built with Angular 19 and Tailwind CSS.

## Updating the content

- **CV content** (jobs, projects, skills, contact details) lives in [`src/app/data/profile.ts`](src/app/data/profile.ts).
- **Prose** (the hero intro and the About paragraphs) is in [`src/app/pages/home/home.component.html`](src/app/pages/home/home.component.html) and [`src/app/sections/about/about.component.html`](src/app/sections/about/about.component.html).
- **The downloadable CV** is [`src/assets/Eduard_Broasca_CV.pdf`](src/assets/Eduard_Broasca_CV.pdf); replace the file to update it.
- **The accent colour** is set once as `brand` in [`tailwind.config.js`](tailwind.config.js).

## Running locally

```bash
npm ci
npm start
```

Then open http://localhost:4200/.

## Building and deploying

`npm run build` writes the production build to `dist/`. Every push to `main` builds the site and publishes it to the `gh-pages` branch through [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

## Tests

```bash
npx ng test --watch=false --browsers=ChromeHeadless
```
