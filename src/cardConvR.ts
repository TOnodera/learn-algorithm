class CardConvR {
    private dchar = '01234567ABCDEF';
    cardConv(x: number, r: number): number {
        let result = '';
        do {
            result += this.dchar.charAt(x % r);
            x /= r;
        } while (x != 0);
        return Number(result);
    }
}
