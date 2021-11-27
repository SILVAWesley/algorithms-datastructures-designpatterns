import { timeStamp } from "console";
import { IHashTable } from "./types";

export class HashTable<T> implements IHashTable<T> {
    map: { key: string; value: T }[][];

    constructor(size?: number) {
        this.map = new Array(size || 53);
    }

    hash(key: string): number {
        const PRIME = 31;

        let total = 0;

        for (let i = 0; i < Math.min(key.length, 100); i++) {
            const value = key.charCodeAt(i) - 96;
            total = (total * PRIME + value) % this.map.length;
        }

        return total;
    }

    get(key: string): T | undefined {
        const index = this.hash(key);

        if (this.map[index]) {
            for (const keyValuePair of this.map[index]) {
                if (keyValuePair.key === key) {
                    return keyValuePair.value;
                }
            }
        }

        return undefined;
    }

    set(key: string, value: T): void {
        const index = this.hash(key);

        if (!this.map[index]) {
            this.map[index] = [];
        }

        for (let i = 0; i < this.map[index].length; i++) {
            if (this.map[index][i].key === key) {
                this.map[index][i].value = value;
                return;
            }
        }

        this.map[index].push({ key, value });
    }

    delete(key: string): T | undefined {
        const index = this.hash(key);

        if (this.map[index]) {
            for (let i = 0; i < this.map[index].length; i++) {
                if (this.map[index][i].key === key) {
                    const value = this.map[index][i].value;
                    this.map[index].splice(i, 1);
                    return value;
                }
            }
        }

        return undefined;
    }

    keys(): string[] {
        const result = [];

        for (let i = 0; i < this.map.length; i++) {
            if (this.map[i]) {
                for (let j = 0; j < this.map[i].length; j++) {
                    result.push(this.map[i][j].key);
                }
            }
        }

        return result;
    }

    values(): T[] {
        const result = [];

        for (let i = 0; i < this.map.length; i++) {
            if (this.map[i]) {
                for (let j = 0; j < this.map[i].length; j++) {
                    result.push(this.map[i][j].value);
                }
            }
        }

        return result;
    }
}
