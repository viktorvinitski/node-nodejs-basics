import { unlink, stat } from 'fs/promises'
import path from "path";

const remove = async () => {
    try {
        const fileToRemove = path.resolve(path.dirname(new URL(import.meta.url).pathname), './files/fileToRemove.txt');

        await stat(fileToRemove);
        await unlink(fileToRemove)
    } catch (error) {
        if (error.code === 'ENOENT') {
            console.error(`FS operation failed`);
        } else {
            console.error(error);
        }
    }
};

await remove();