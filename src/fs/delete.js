import { unlink, stat } from 'node:fs/promises'

const remove = async () => {
    try {
        const fileToRemove = '../fs/files/fileToRemove.txt';

        await stat(fileToRemove);
        await unlink(fileToRemove)
    } catch (error) {
        if (error.code === 'ENOENT') {
            console.error(`FS operation failed`);
        } else {
            console.error(error);
        }
    }
};

await remove();