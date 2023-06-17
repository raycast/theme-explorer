<!-- TEXT_SECTION:header:START -->
<p align="center">
  <a href="https://themes.ray.so" target="_blank" rel="noopener noreferrer">
    <img width="1024" src="https://themes.ray.so/default-og-image.png" alt="Theme Explorer">
  </a> 
</p>
<h1 align="center">
  Theme Explorer
</h1>
<h3 align="center">
  themes.ray.so
</h3>
<p align="center">
  A tool to easily share, browse and import Raycast Themes.
</p>

<!-- TEXT_SECTION:header:END -->

---

## Contributing

This is a [Next.js 13](https://nextjs.org/) app. If you're unfamiliar with it, check out the [Next.js Documentation](https://nextjs.org/docs).

Download the repo and run the development server:

```bash
npm run dev
```

### Adding Themes

We welcome contribition to the Themes data. Here's how you can contribute:

### 1. Copy the theme JSON from Raycast

- Open Theme Studio in Raycast
- Right click on your Theme and select "Copy as JSON"

### 2. Add the theme to repo

- In `/themes`, create a folder with your Raycast username, ie: `peduarte`
- In that folder, create a file with the theme name, ie: `red.json`
- In that file, paste the theme JSON you copied from Raycast's Theme Studio

### 3. Generate the theme OG image

- Make sure your local server running (`npm run dev`)
- Open a new terminal session and run `npm run generate-og-images`
  - To regenerate a specific slug, run `npm run generate-og-images -- --slug=peduarte/red`
  - To regenerate all, run `npm run generate-og-images -- --force`

### 4. Commit and push your changes

- Create a Pull Request 🚀
