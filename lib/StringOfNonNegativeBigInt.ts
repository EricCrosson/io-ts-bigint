/**
 * @since 1.1.0
 */

import * as t from 'io-ts'
import { NonNegativeBigInt } from './NonNegativeBigInt'
import { PositiveBigIntFromString } from './PositiveBigIntFromString'
import { withEncode } from './withEncode'
import { ZeroBigIntFromString } from './ZeroBigIntFromString'

/**
 * @since 1.1.0
 */
export const StringOfNonNegativeBigInt = withEncode(
    t.union([ZeroBigIntFromString, PositiveBigIntFromString]),
    (a): NonNegativeBigInt => BigInt(a) as NonNegativeBigInt
)

/**
 * @since 1.1.0
 */
export type StringOfNonNegativeBigInt = t.TypeOf<
    typeof StringOfNonNegativeBigInt
>
