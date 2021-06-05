class Chain<K extends Hashable, V> {
    private key: K;
    private value: V;
    private next: Chain<K, V> | undefined;
    constructor(key: K, value: V, next?: Chain<K, V>) {
        this.key = key;
        this.value = value;
        this.next = next;
    }

    getKey(): K {
        return this.key;
    }

    getValue(): V {
        return this.value;
    }

    hashCode(): number {
        return this.key.hashCode();
    }

    getNext(): Chain<K, V> | undefined {
        return this.next;
    }

    setNext(next: Chain<K, V>): void {
        this.next = next;
    }
}
export default Chain;
