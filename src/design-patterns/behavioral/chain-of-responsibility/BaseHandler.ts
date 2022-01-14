import { IHandler } from "./IHandler";

export class BaseHandler implements IHandler {
    protected next: IHandler | undefined;

    constructor(next?: IHandler) {
        this.next = next;
    }

    setNext(h: IHandler): void {
        this.next = h;
    }

    handle(request: string): string {
        if (this.next) {
            return this.next.handle(request);
        }

        return "Response ended without return";
    }
}
