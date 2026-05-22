import { execSync } from 'child_process'
import { buildSync } from 'esbuild'

const sha = execSync('git rev-parse HEAD').toString().trim()
const env = process.env.ENVIRONMENT ?? 'development'

buildSync({
  entryPoints: ['src/docs/docs.ts'],
  bundle: true,
  minify: true,
  outfile: 'src/docs/docs.js',
  define: {
    COMMIT_SHA: JSON.stringify(sha),
    ENVIRONMENT: JSON.stringify(env)
  }
})
