/**
 * @since 0.0.1
 */

import * as t from 'io-ts'

/**
 * @since 0.0.1
 */
export interface NonNegativeBigIntBrand {
    readonly NonNegativeBigInt: unique symbol
}

/**
 * @since 0.0.1
 */
export const NonNegativeBigInt = t.brand(
    t.bigint,
    (n): n is t.Branded<bigint, NonNegativeBigIntBrand> => BigInt(0) <= n,
    'NonNegativeBigInt'
)

/**
 * @since 0.0.1
 */
export type NonNegativeBigInt = t.TypeOf<typeof NonNegativeBigInt>
