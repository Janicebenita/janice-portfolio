import { existsSync, readFileSync } from 'node:fs'
import { resolve } from 'node:path'

const root = resolve(import.meta.dirname, '..')
const source = readFileSync(resolve(root, 'src/data/site.ts'), 'utf8')
const app = readFileSync(resolve(root, 'src/App.tsx'), 'utf8')
const requiredRoutes = ['/', '/work', '/work/:slug', '/research', '/about', '/resume', '*']
const forbidden = ['Link pending', 'Coming soon', 'Lorem ipsum']
const requiredAssets = ['public/resume/Janice_Benita_AI_ML_Software_Engineer_Resume.pdf','public/images/sentinelops-thumbnail.webp','public/images/endoxai-thumbnail.webp','public/images/quality-intelligence-thumbnail.webp','public/images/crack-detection-thumbnail.webp','public/sitemap.xml','public/robots.txt']

for (const route of requiredRoutes) if (!app.includes(`path="${route}"`)) throw new Error(`Missing route: ${route}`)
for (const text of forbidden) if (source.includes(text)) throw new Error(`Public content contains forbidden placeholder: ${text}`)
for (const asset of requiredAssets) if (!existsSync(resolve(root, asset))) throw new Error(`Missing asset: ${asset}`)
console.log(`Validated ${requiredRoutes.length} routes, ${requiredAssets.length} assets, and placeholder-free public content.`)
