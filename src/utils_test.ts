import { assert } from '../test_deps.ts'
import * as utils from './utils.ts'

Deno.test("test_utils_getScreenResolution", async function () {
    let res = await utils.getScreenResolution();
    assert( 'width' in res )
})

Deno.test("test_utils_getChromium", async function () {
    let res = await utils.getChromium();
    assert( res.length > 2);
})

