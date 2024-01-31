import { access, mkdir, readdir, copyFile } from 'fs/promises'
import path from "path";
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const copy = async () => {
    try {
        const sourceDirectory = path.join(__dirname + '/files');
        const destinationDirectory = path.join(__dirname + '/files_copy');

        try {
            await access(sourceDirectory)
        } catch (error) {
            if (error.code === 'ENOENT') {
                console.error('FS operation failed')
            }
        }

        try {
            await access(destinationDirectory)
            console.error('FS operation failed')
        } catch {}

        await mkdir(destinationDirectory)

        const items = await readdir(sourceDirectory)

        items.forEach(item => {
            const sourcePath = path.join(sourceDirectory, item);
            const destinationPath = path.join(destinationDirectory, item);
            copyFile(sourcePath, destinationPath);
        })
    } catch {}
};


await copy();
