/**
 * @since 1.1.0
 */

import * as t from 'io-ts'
import { NonNegativeBigInt } from './NonNegativeBigInt'
import { StringOfPositiveBigInt } from './StringOfPositiveBigInt'
import { StringOfZeroBigInt } from './StringOfZeroBigInt'
import { withEncode } from './withEncode'

/**
 * @since 1.1.0
 */
export const StringOfNonNegativeBigInt = withEncode(
    t.union([StringOfZeroBigInt, StringOfPositiveBigInt]),
    (a): NonNegativeBigInt => BigInt(a) as NonNegativeBigInt
)

/**
 * @since 1.1.0
 */
export type StringOfNonNegativeBigInt = t.TypeOf<
    typeof StringOfNonNegativeBigInt
>
