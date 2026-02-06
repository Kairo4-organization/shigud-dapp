import { writeFileSync, mkdirSync } from 'node:fs'
import { openApiSpec } from '../src/openapi/spec.js'

mkdirSync('dist', { recursive: true })
writeFileSync('dist/openapi.json', JSON.stringify(openApiSpec, null, 2))
console.log('Exported OpenAPI spec to dist/openapi.json')
