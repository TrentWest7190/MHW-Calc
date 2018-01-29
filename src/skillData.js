import { BigNumber } from 'bignumber.js';

export const attackBoost = Array.from({ length: 8}, (x, i) => ({ level: i, attack: i * 3, affinity: i >= 4 ? .05 : 0}))

export const criticalEye = Array.from({ length: 8}, (x, i) => ({ level: i, affinity: i <= 2 ? i * .03 : new BigNumber(i-1).multipliedBy(.05).toNumber()}))