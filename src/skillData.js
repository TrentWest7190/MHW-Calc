import { BigNumber } from 'bignumber.js';

export const attackBoost = {
    name: 'Attack Boost',
    data: Array.from({ length: 8 }, (x, i) => ({ level: i, attack: i * 3, affinity: i >= 4 ? .05 : 0}))
}

export const criticalEye = {
    name: 'Critical Eye',
    data: Array.from({ length: 8 }, (x, i) => ({ level: i, affinity: i <= 2 ? i * .03 : new BigNumber(i-1).multipliedBy(.05).toNumber()}))
}

export const weaknessExploit = {
    name: 'Weakness Exploit',
    data: Array.from({ length: 4 }, (x, i) => ({ level: i, affinity: i <= 2 ? i *.15 : .5}))
}

export const heroics = {
    name: 'Heroics',
    data: Array.from({ length: 6 }, (x, i) => ({ level: i, attackMulti: i <= 4 ? new BigNumber(i).multipliedBy(.05).toNumber() : .3}))
}