import { join } from 'path'
import base from '../rollup.base'

const entry = join(__dirname, 'ragnar.js')
const dest = join(__dirname, 'dist/ragnar.js')

export default Object.assign({}, base, {entry, dest})
