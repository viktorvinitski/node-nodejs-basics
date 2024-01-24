import { readdir, stat } from 'node:fs/promises'

const list = async () => {
    const folder = '../fs/files';

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