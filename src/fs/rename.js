import { access, rename as fsRename } from 'node:fs/promises'

const rename = async () => {
    try {
        const fileToRename = '../fs/files/wrongFilename.txt';
        const newFileName = '../fs/files/properFilename.md';
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