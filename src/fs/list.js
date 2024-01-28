import { readdir, stat } from 'fs/promises'
import path from "path";

const list = async () => {
    const folder = path.resolve(path.dirname(new URL(import.meta.url).pathname), './files');

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