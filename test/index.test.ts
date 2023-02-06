import { test, expect, describe } from 'vitest';
import isValidIdentifyName from '../src';

describe('index module', () => {
    test('simple', () => {
        expect(isValidIdentifyName('a')).toBe(true);
    })
    test('$', () => {
        expect(isValidIdentifyName('$s')).toBe(true);
    })
    test('&', () => {
        expect(isValidIdentifyName('&s')).toBe(false);
    })
    test('kwd', () => {
        expect(isValidIdentifyName('await')).toBe(false);
    })
});
