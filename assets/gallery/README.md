Gallery assets live here.

Recommended structure:

- `originals/` for full-resolution source images
- `web/` for site-ready images served by the gallery page

To add a photo to the site:

1. Put the original in `assets/gallery/originals/`
2. Export a web-sized copy into `assets/gallery/web/`
3. Add the image metadata entry in `gallery/gallery-data.js`

Suggested export targets:

- Long edge around `1800px` to `2600px`
- Clean `jpg` or `webp`
- Avoid screenshots, text-message copies, and social-media downloads
