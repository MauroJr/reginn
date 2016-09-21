import { join } from 'path'
import base from '../rollup.base'

const entry = join(__dirname, 'command.js')
const dest = join(__dirname, 'dist/ragnar-command.js')

export default Object.assign({}, base, {entry, dest})