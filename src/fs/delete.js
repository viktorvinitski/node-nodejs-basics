import { unlink, stat } from 'fs/promises'
import path from "path";
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const remove = async () => {
    try {
        const fileToRemove = path.join(__dirname + '/files/fileToRemove.txt');

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