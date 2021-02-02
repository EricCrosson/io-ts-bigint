# io-ts-bigint
[![License][]](https://opensource.org/licenses/ISC)
[![NPM Package][]](https://npmjs.org/package/io-ts-bigint)
[![Build status][]](https://travis-ci.org/EricCrosson/io-ts-bigint)
[![Code Coverage][]](https://codecov.io/gh/EricCrosson/io-ts-bigint)

[License]: https://img.shields.io/badge/License-ISC-blue.svg
[NPM Package]: https://img.shields.io/npm/v/io-ts-bigint.svg
[Build status]: https://travis-ci.org/EricCrosson/io-ts-bigint.svg?branch=master
[Code Coverage]: https://codecov.io/gh/EricCrosson/io-ts-bigint/branch/master/graph/badge.svg

> io-ts library for bigints

## Install

``` shell
npm install io-ts-bigint
```

## Definitions

![numbers](https://github.com/ericcrosson/io-ts-bigint/blob/master/img/numbers.png)

> open circle = exclusive, closed circle = inclusive

This diagram denotes the sets of numbers included in some of the
codecs. Note that zero is neither positive nor negative.

Here we can see that the set of Positive numbers contains all reals
greater than zero. The set of NonPositive numbers contains the
remaining reals (including zero). The union of the set of Positive and
NonPositive numbers contains all real numbers.

This relationship is mirrored in the Negative and NonNegative sets,
and the Zero and NonZero sets.

## Related

- [io-ts-numbers](https://github.com/EricCrosson/io-ts-numbers)

## Acknowledgments

- [io-ts](https://github.com/gcanti/io-ts)
