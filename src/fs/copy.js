import * as path from 'path';
import { access, mkdir, readdir, copyFile } from 'fs/promises'

const copy = async () => {
    try {
        const sourceDirectory = path.resolve(path.dirname(new URL(import.meta.url).pathname), './files');
        const destinationDirectory = path.resolve(path.dirname(new URL(import.meta.url).pathname), './files_copy');

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
