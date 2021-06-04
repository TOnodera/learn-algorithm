import BinSearch from '../BinSearch';

describe('BinSearch', () => {
    it('run()', () => {
        const numArray: number[] = [];
        for (let i = 0; i < 100; i++) {
            numArray.push(Math.floor(Math.random() * 100));
        }
        const pickUp = numArray[Math.floor(Math.random() * 50)];
        const sortedArray = numArray.sort();

        expect(pickUp).toBe(sortedArray[BinSearch.run(sortedArray, 100, pickUp)]);
    });
});
