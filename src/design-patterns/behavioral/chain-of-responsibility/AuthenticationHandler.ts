import { BaseHandler } from "./BaseHandler";
import { IHandler } from "./IHandler";

export class AuthenticationHandler extends BaseHandler {
    constructor(next?: IHandler) {
        super(next);
    }

    handle(request: string): string {
        if (request.includes("auth")) {
            return super.handle(request);
        }

        return "Not authenticated";
    }
}
