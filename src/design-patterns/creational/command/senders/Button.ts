import { ICommand } from "../commands/ICommand";

export class Button {
    private clickHandler: ICommand;

    constructor(onClick: ICommand) {
        this.clickHandler = onClick;
    }

    render(): string {
        return "This is a button. onClick:" + this.clickHandler;
    }

    onClick(): void {
        this.clickHandler.execute();
    }
}
