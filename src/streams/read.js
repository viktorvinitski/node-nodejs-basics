import { createReadStream } from 'fs'
import path from "path";

const read = async () => {
    const filePath = path.resolve(path.dirname(new URL(import.meta.url).pathname), './files/fileToRead.txt');
    const stream = createReadStream(filePath, { encoding: 'utf-8' });

    stream.on('data', (data) => {
        process.stdout.write(data)
    })

    stream.on('end', () => {
        process.stdout.write('');
    });
};

await read();