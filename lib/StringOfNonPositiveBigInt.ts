/**
 * @since 1.1.0
 */

import * as t from 'io-ts'
import { NegativeBigIntFromString } from './NegativeBigIntFromString'
import { NonPositiveBigInt } from './NonPositiveBigInt'
import { withEncode } from './withEncode'
import { ZeroBigIntFromString } from './ZeroBigIntFromString'

/**
 * @since 1.1.0
 */
export const StringOfNonPositiveBigInt = withEncode(
    t.union([ZeroBigIntFromString, NegativeBigIntFromString]),
    (a): NonPositiveBigInt => BigInt(a) as NonPositiveBigInt
)

/**
 * @since 1.1.0
 */
export type StringOfNonPositiveBigInt = t.TypeOf<
    typeof StringOfNonPositiveBigInt
>
