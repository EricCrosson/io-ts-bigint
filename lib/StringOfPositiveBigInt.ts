/**
 * @since 1.1.0
 */

import * as t from 'io-ts'
import { PositiveBigInt } from './PositiveBigInt'
import { withEncode } from './withEncode'

export interface StringOfPositiveBigIntBrand {
    readonly StringOfPositiveBigInt: unique symbol
}

export const StringOfPositiveBigInt = withEncode(
    t.brand(
        t.string,
        (a): a is t.Branded<string, StringOfPositiveBigIntBrand> => {
            try {
                return BigInt(0) < BigInt(a)
            } catch (error) {
                return false
            }
        },
        'StringOfPositiveBigInt'
    ),
    (a): PositiveBigInt => BigInt(a) as PositiveBigInt
)

export type StringOfPositiveBigInt = t.TypeOf<typeof StringOfPositiveBigInt>
