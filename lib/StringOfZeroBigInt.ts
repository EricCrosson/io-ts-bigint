/**
 * @since 1.1.0
 */

import * as t from 'io-ts'
import { withEncode } from './withEncode'
import { ZeroBigInt } from './ZeroBigInt'

export interface StringOfZeroBigIntBrand {
    readonly StringOfZeroBigInt: unique symbol
}

export const StringOfZeroBigInt = withEncode(
    t.brand(
        t.string,
        (a): a is t.Branded<string, StringOfZeroBigIntBrand> => {
            try {
                return BigInt(0) === BigInt(a)
            } catch (error) {
                return false
            }
        },
        'StringOfZeroBigInt'
    ),
    (a): ZeroBigInt => BigInt(a) as ZeroBigInt
)

export type StringOfZeroBigInt = t.TypeOf<typeof StringOfZeroBigInt>
