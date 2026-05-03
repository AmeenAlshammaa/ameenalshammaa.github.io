import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

/**
 * GitHub Pages serves project sites at https://<user>.github.io/<repo>/.
 * Relative `./assets/...` URLs break when someone opens /<repo> without a trailing slash
 * (the browser resolves scripts against the wrong path → blank page).
 *
 * On GitHub Actions, `GITHUB_REPOSITORY` is `owner/repo`. Use `/<repo>/` as base.
 * Repos named `*.github.io` are user/org sites at domain root → base `/`.
 *
 * Locally, `GITHUB_REPOSITORY` is unset → `/` so `npm run dev` works at localhost root.
 */
function githubPagesBase(): string {
  const full = process.env.GITHUB_REPOSITORY
  if (!full) return '/'

  const repo = full.split('/')[1] ?? ''
  if (!repo) return '/'
  if (repo.endsWith('.github.io')) return '/'

  return `/${repo}/`
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: githubPagesBase(),
})
