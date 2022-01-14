export interface IHandler {
    setNext(h: IHandler): void;
    handle(request: string): string;
}
