import { createWriteStream } from "fs";
import path from "path";
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const write = async () => {
    const filePath = path.join(__dirname + '/files/fileToWrite.txt');
    const stream = createWriteStream(filePath, { encoding: 'utf-8' });

     process.stdin.on('data', (data) => {
        stream.write(data)
    })

    process.stdin.on('end', () => {
        stream.end();
    });
};

await write();