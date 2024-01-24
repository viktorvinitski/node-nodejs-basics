import { writeFile, access } from 'node:fs/promises'

const create = async () => {
    const newDocumentText = 'I am fresh and young'
    const filePath = '../fs/files/fresh.txt';
    try {
        await access(filePath);
        console.error(`FS operation failed`);
    } catch (error) {
        if (error.code === 'ENOENT') {
            await writeFile(filePath, newDocumentText)
        } else {
            console.error(error)
        }
    }
};

await create();