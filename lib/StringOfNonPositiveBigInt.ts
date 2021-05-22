/**
 * @since 1.1.0
 */

import * as t from 'io-ts'
import { NonPositiveBigInt } from './NonPositiveBigInt'
import { StringOfNegativeBigInt } from './StringOfNegativeBigInt'
import { StringOfZeroBigInt } from './StringOfZeroBigInt'
import { withEncode } from './withEncode'

/**
 * @since 1.1.0
 */
export const StringOfNonPositiveBigInt = withEncode(
    t.union([StringOfZeroBigInt, StringOfNegativeBigInt]),
    (a): NonPositiveBigInt => BigInt(a) as NonPositiveBigInt
)

/**
 * @since 1.1.0
 */
export type StringOfNonPositiveBigInt = t.TypeOf<
    typeof StringOfNonPositiveBigInt
>
