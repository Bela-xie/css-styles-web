// @ts-nocheck
import { baseParse } from '@vue/compiler-core'
import fs from 'fs'

export default function vueDemoPlugin() {
    return {
        name: 'loader-code',
        transform(code, id) {
            if (!/src\/components\/CssLoaders/.test(id)) {
                return
            }
            if (/type=style/.test(id)) {
                return
            }
            console.log("----------");
            const file = fs.readFileSync(id.split("?")[0]).toString()
            // return ""
            return `export default Comp => {
                Comp.i18n = ""
              }`
        }
    }

} 