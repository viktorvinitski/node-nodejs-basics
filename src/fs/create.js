import { writeFile, access } from 'fs/promises'
import path from "path";

const create = async () => {
    const newDocumentText = 'I am fresh and young'
    const newFilePath = path.resolve(path.dirname(new URL(import.meta.url).pathname), './files/fresh.txt');
    try {
        await access(newFilePath);
        console.error(`FS operation failed`);
    } catch (error) {
        if (error.code === 'ENOENT') {
            await writeFile(newFilePath, newDocumentText)
        } else {
            console.error(error)
        }
    }
};

await create();