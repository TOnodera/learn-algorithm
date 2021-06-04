class BinSearch {
    static run(a: number[], n: number, key: number): number {
        let pl = 0; //先頭インデックス
        let pr = n - 1; //末尾インデックス

        do {
            const pc = Math.floor((pl + pr) / 2); //中央値要素のインデックス
            if (a[pc] == key) {
                return pc;
            }
            if (a[pc] < key) {
                pl = pc + 1;
            } else {
                pr = pc - 1;
            }
        } while (pl <= pr);

        return -1;
    }
}
export default BinSearch;
