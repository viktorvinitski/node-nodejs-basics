import { writeFile, access } from 'fs/promises'
import path from "path";
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const create = async () => {
    const newDocumentText = 'I am fresh and young'
    const newFilePath = path.join(__dirname + '/files/fresh.txt');
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