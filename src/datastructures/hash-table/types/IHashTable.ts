export interface IHashTable<T> {
    map: { key: string; value: T }[][];
    hash(key: string): number;
    get(key: string): T | undefined;
    set(key: string, value: T): void;
    delete(key: string): T | undefined;
    keys(): string[];
    values(): T[];
}
