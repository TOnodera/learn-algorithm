import CardConvR from '../cardConvR';

describe('CardConvR', () => {
    it('run()', () => {
        const conv = new CardConvR();
        expect(conv.translate(10, 16)).toBe('A');
        expect(conv.translate(11, 16)).toBe('B');
        expect(conv.translate(32, 16)).toBe('20');

        expect(() => conv.translate(23, 17)).toThrow(new Error('変換できるのは１６進数までです。'));
    });
});
