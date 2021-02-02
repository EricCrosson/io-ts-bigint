import test from 'ava'
import { includes, excludes } from '../assert'

/**
 * Unit under test
 */
import { ZeroBigInt } from '../../lib/ZeroBigInt'

test('includes zero', includes, ZeroBigInt, BigInt(0))
test('excludes one', excludes, ZeroBigInt, BigInt(1))
test('excludes negative one', excludes, ZeroBigInt, BigInt(-1))
