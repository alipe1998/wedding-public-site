# Wedding Public Site Deploy Notes

This is the plain static public site, not the React planner app.

## Source Files

- Main HTML: `index.html`
- Assets: `assets/`

## Server Target

- Server alias: `hetzner`
- Remote path: `/opt/simple-site/site/wedding/`

## Deploy Commands

```bash
scp index.html hetzner:/opt/simple-site/site/wedding/index.html
scp assets/hero-1.jpg assets/hero-2.jpg assets/hero-3.jpg assets/hero-main.jpg assets/wedding-bg-final.jpg assets/wedding-bg-reference.jpg assets/wedding-side-rotated.jpg hetzner:/opt/simple-site/site/wedding/assets/
```

## Verify

```bash
ssh hetzner 'grep -n "grid-template-columns: var(--banner-col) minmax(0, 1fr) var(--banner-col);" /opt/simple-site/site/wedding/index.html'
curl -I https://lipeclan.com/wedding/
```
