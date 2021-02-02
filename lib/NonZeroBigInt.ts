/**
 * @since 0.0.1
 */

import * as t from 'io-ts'

/**
 * @since 0.0.1
 */
export interface NonZeroBigIntBrand {
    readonly NonZeroBigInt: unique symbol
}

/**
 * @since 0.0.1
 */
export const NonZeroBigInt = t.brand(
    t.bigint,
    (n): n is t.Branded<bigint, NonZeroBigIntBrand> => BigInt(0) !== n,
    'NonZeroBigInt'
)

/**
 * @since 0.0.1
 */
export type NonZeroBigInt = t.TypeOf<typeof NonZeroBigInt>
