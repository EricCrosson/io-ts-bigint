/**
 * @since 1.1.0
 */

import * as t from 'io-ts'
import { withEncode } from './withEncode'

export interface StringOfBigIntBrand {
    readonly StringOfBigInt: unique symbol
}

export const StringOfBigInt = withEncode(
    t.brand(
        t.string,
        (a): a is t.Branded<string, StringOfBigIntBrand> => {
            try {
                BigInt(a)
                return true
            } catch (error) {
                return false
            }
        },
        'StringOfBigInt'
    ),
    (a): BigInt => BigInt(a)
)

export type StringOfBigInt = t.TypeOf<typeof StringOfBigInt>
