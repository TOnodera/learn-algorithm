import Chain from './Chain';

class ChainHash<K extends Hashable, V> {
    private size: number;
    private talbe: Chain<K, V>[];
    constructor(size: number) {
        this.size = size;
        this.talbe = [];
    }

    hashValue(key: K): number {
        return key.hashCode() % this.size;
    }

    search(key: K): V | undefined {
        const hash: number = this.hashValue(key);
        let chain: Chain<K, V> | undefined = this.talbe[hash];

        while (chain != undefined) {
            if (chain.getKey() == key) {
                return chain.getValue();
            }
            chain = chain.getNext();
        }
        return undefined;
    }

    add(key: K, data: V): boolean {
        const hash: number = this.hashValue(key);
        let chain: Chain<K, V> | undefined = this.talbe[hash];

        while (chain != undefined) {
            if (chain.getKey() == key) {
                return false;
            }
            chain = chain.getNext();
        }
        const temp: Chain<K, V> = new Chain<K, V>(key, data, this.talbe[hash]);
        this.talbe[hash] = temp;
        return true;
    }

    remove(key: K): boolean {
        const hash: number = this.hashValue(key);
        const p: Chain<K, V> = this.talbe[hash];
        const pp: Chain<K, V> | undefined = undefined;

        while (p != undefined) {
            if (p.getKey() == key) {
                const next = p.getNext();
                if (pp == undefined && next) {
                    this.talbe[hash] = next;
                } else {
                    if (pp) {
                        pp.setNext(p.getNext());
                    }
                }
            }
        }
        return false;
    }
}

export default ChainHash;
