import { LinuxDialog, WindowsDialog } from "./creators";

describe("strategy | Simple | 01", () => {
    test("Create windows dialog", () => {
        const dialog = new WindowsDialog();
        expect(dialog.render()).toBe("Primary button rendered");
    });

    test("Create linux dialog", () => {
        const dialog = new LinuxDialog();
        expect(dialog.render()).toBe("Secondary button rendered");
    });
});
