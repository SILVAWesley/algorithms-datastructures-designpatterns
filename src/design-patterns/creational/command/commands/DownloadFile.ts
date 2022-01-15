import { FileSystem } from "../receivers";
import { ICommand } from "./ICommand";

export class DownloadFile implements ICommand {
    name: string;
    fs: FileSystem;

    constructor(name: string) {
        this.name = name;
        this.fs = new FileSystem();
    }

    execute(): void {
        this.fs.downloadFile(this.name);
    }
}
