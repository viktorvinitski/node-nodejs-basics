import { readdir, stat } from 'fs/promises'
import path from "path";
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const list = async () => {
    const folder = path.join(__dirname + '/files');

    try {
        await stat(folder)
        const files = await readdir(folder)
        console.log(files)
    } catch (error) {
        if (error.code === 'ENOENT') {
            console.error('FS operation failed')
        } else {
            console.error(error)
        }
    }
};

await list();