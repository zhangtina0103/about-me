import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// For GitHub Pages project sites, set VITE_BASE_PATH=/<repo-name>/ in CI.
// For a user site (username.github.io repo), leave unset or use '/'.
const base = process.env.VITE_BASE_PATH || '/';

export default defineConfig({
  base,
  plugins: [react()],
});
