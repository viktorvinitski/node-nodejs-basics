import { readFile, stat } from 'fs/promises'
import path from "path";
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
    const fileToRead = path.join(__dirname + '/files/fileToRead.txt');
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