/**
 * @since 1.1.0
 */

import * as t from 'io-ts'
import { NegativeBigInt } from './NegativeBigInt'
import { withEncode } from './withEncode'

export interface StringOfNegativeBigIntBrand {
    readonly StringOfNegativeBigInt: unique symbol
}

export const StringOfNegativeBigInt = withEncode(
    t.brand(
        t.string,
        (a): a is t.Branded<string, StringOfNegativeBigIntBrand> => {
            try {
                return BigInt(a) < BigInt(0)
            } catch (error) {
                return false
            }
        },
        'StringOfNegativeBigInt'
    ),
    (a): NegativeBigInt => BigInt(a) as NegativeBigInt
)

export type StringOfNegativeBigInt = t.TypeOf<typeof StringOfNegativeBigInt>
