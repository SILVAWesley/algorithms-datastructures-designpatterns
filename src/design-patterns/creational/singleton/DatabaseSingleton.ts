export class DatabaseSingleton {
    private static instance: DatabaseSingleton | null = null;

    private user = "Loius";

    /* eslint-disable */
    private constructor() {}

    static getInstance(): DatabaseSingleton {
        if (!DatabaseSingleton.instance) {
            DatabaseSingleton.instance = new DatabaseSingleton();
        }

        return DatabaseSingleton.instance;
    }

    getDatabaseUser(): string {
        return "The data base user is: " + this.user;
    }
}
