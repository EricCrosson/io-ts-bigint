/**
 * @since 0.0.1
 */

import { NonPositiveBigInt } from './NonPositiveBigInt'
import { BigIntFromString } from './BigIntFromString'

/**
 * @since 0.0.1
 */
export const NonPositiveBigIntFromString = BigIntFromString.pipe(
    NonPositiveBigInt,
    'NonPositiveBigIntFromString'
)
