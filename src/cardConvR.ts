/**
 *
 */
class CardConvR {
    private dchar = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
    /**
     * xをr進数に変換する
     * @param x
     * @param r
     * @returns
     */
    translate(x: number, r: number): string {
        if (r > 16) {
            throw new Error('変換できるのは１６進数までです。');
        }
        const result: string[] = [];
        do {
            const key: number = x % r;
            result.push(this.dchar[key]);
            x = Math.floor(x / r);
        } while (x != 0);
        return result.reverse().join('');
    }
}
export default CardConvR;
