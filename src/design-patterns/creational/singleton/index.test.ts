import { DatabaseSingleton } from "./DatabaseSingleton";

describe("singleton | Simple | 01", () => {
    test("Access singleton", () => {
        expect(DatabaseSingleton.getInstance().getDatabaseUser()).toBe(
            "The data base user is: Loius",
        );
    });
});
