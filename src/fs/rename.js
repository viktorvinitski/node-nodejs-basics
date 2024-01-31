import { access, rename as fsRename } from 'fs/promises'
import path from "path";
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rename = async () => {
    try {
        const fileToRename = path.join(__dirname + '/files/wrongFilename.txt');
        const newFileName = path.join(__dirname + '/files/properFilename.md');
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