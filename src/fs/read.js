import { readFile, stat } from 'node:fs/promises'

const read = async () => {
    try {
        const fileToRead = '../fs/files/fileToRead.txt';
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