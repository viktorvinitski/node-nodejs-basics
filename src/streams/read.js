import { createReadStream } from 'fs'
import path from "path";
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
    const filePath = path.join(__dirname + '/files/fileToRead.txt');
    const stream = createReadStream(filePath, { encoding: 'utf-8' });

    stream.on('data', (data) => {
        process.stdout.write(data)
    })

    stream.on('end', () => {
        process.stdout.write('');
    });
};

await read();