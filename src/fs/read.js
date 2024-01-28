import { readFile, stat } from 'fs/promises'
import path from "path";

const read = async () => {
    const fileToRead = path.resolve(path.dirname(new URL(import.meta.url).pathname), './files/fileToRead.txt')
    try {
        await stat(fileToRead)
        const text = await readFile(fileToRead, 'utf-8')
        console.log(text)
    } catch (error) {
        if (error.code === 'ENOENT') {
            console.error('FS operation failed')
        } else {
            console.error(error)
        }
    }
};

await read();