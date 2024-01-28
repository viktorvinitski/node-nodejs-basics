import { access, rename as fsRename } from 'fs/promises'
import path from "path";

const rename = async () => {
    try {
        const fileToRename = path.resolve(path.dirname(new URL(import.meta.url).pathname), './files/wrongFilename.txt');
        const newFileName = path.resolve(path.dirname(new URL(import.meta.url).pathname), './files/properFilename.md');
        await access(fileToRename)

        try {
            await access(newFileName)
            console.error('FS operation failed')
        } catch {}

        await fsRename(fileToRename, newFileName)
    } catch (error) {
        console.error('FS operation failed')
    }
};

await rename();