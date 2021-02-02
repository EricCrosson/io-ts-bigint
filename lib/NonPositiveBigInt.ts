/**
 * @since 0.0.1
 */

import * as t from 'io-ts'

/**
 * @since 0.0.1
 */
export interface NonPositiveBigIntBrand {
    readonly NonPositiveBigInt: unique symbol
}

/**
 * @since 0.0.1
 */
export const NonPositiveBigInt = t.brand(
    t.bigint,
    (n): n is t.Branded<bigint, NonPositiveBigIntBrand> => n <= BigInt(0),
    'NonPositiveBigInt'
)

/**
 * @since 0.0.1
 */
export type NonPositiveBigInt = t.TypeOf<typeof NonPositiveBigInt>
