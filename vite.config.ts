import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const isGitHubPages = process.env.NODE_ENV === 'production';
const base = isGitHubPages ? '/two-brothers/' : '/';

// fixed?
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base : '/two-brothers/',
});
