/**
 * @since 0.0.1
 */

import { NonNegativeBigInt } from './NonNegativeBigInt'
import { BigIntFromString } from './BigIntFromString'

/**
 * @since 0.0.1
 */
export const NonNegativeBigIntFromString = BigIntFromString.pipe(
    NonNegativeBigInt,
    'NonNegativeBigIntFromString'
)
