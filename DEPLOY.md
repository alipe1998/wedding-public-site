# Wedding Public Site Deploy Notes

This is the plain static public site, not the React planner app.

Routine deploys should go through GitHub Actions. Manual SSH copy is the fallback path only.

## Source Files

- Main HTML: `index.html`
- Gallery HTML: `gallery/index.html`
- Gallery data: `gallery/gallery-data.js`
- Assets: `assets/`

## Target

- Public URL: `https://lipeclan.com/wedding/`
- Remote path: `/opt/simple-site/site/wedding/`
- Deployment trigger: push to `main`

## Workflow

The repo uses two GitHub Actions workflows:

- `.github/workflows/ci.yml`
  - runs on pull requests and pushes to `main`
  - verifies required site files exist
  - verifies the site still points at the expected `/wedding/...` public paths
- `.github/workflows/deploy.yml`
  - runs automatically on pushes to `main`
  - connects to the Hetzner server over SSH
  - syncs the repo contents to the server with `rsync --delete`
  - verifies the public URL with `curl -I`

`rsync --delete` is intentional. It removes files from the server that no longer exist in the repo so the deployed directory stays in sync with Git.

## GitHub Secrets

Set these repository secrets in the `wedding-public-site` GitHub repo:

- `SSH_PRIVATE_KEY`
  - private key GitHub Actions uses for SSH access to the server
- `DEPLOY_HOST`
  - server hostname or IP
- `DEPLOY_USER`
  - SSH username
- `DEPLOY_PORT`
  - SSH port, usually `22`
- `DEPLOY_PATH`
  - target directory, for this repo: `/opt/simple-site/site/wedding`

## Can We Reuse The Private Repo Secrets?

Yes, you can reuse the same SSH key material and the same host/user/port values if the public site deploy should connect to the same server account as the private site.

Important detail: GitHub secrets are scoped per repository. So you cannot automatically share the existing secrets from `wedding-planner-site`; you need to add the same values again in the `wedding-public-site` repo secrets.

The one value that should differ is usually:

- `DEPLOY_PATH=/opt/simple-site/site/wedding`

The private repo uses the planner path instead.

## Manual Fallback

Use this only if GitHub Actions is unavailable or broken.

```bash
ssh hetzner 'mkdir -p /opt/simple-site/site/wedding'
rsync -avz --delete \
  --exclude '.git/' \
  --exclude '.github/' \
  --exclude 'DEPLOY.md' \
  --exclude 'README.md' \
  ./ hetzner:/opt/simple-site/site/wedding/
```

## Verify

```bash
curl -I https://lipeclan.com/wedding/
ssh hetzner 'ls -lah /opt/simple-site/site/wedding/ && ls -lah /opt/simple-site/site/wedding/gallery/ && ls -lah /opt/simple-site/site/wedding/assets/'
```
