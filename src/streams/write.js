import path from "path";
import { createWriteStream } from "fs";

const write = async () => {
    const filePath = path.resolve(path.dirname(new URL(import.meta.url).pathname), './files/fileToWrite.txt');
    const stream = createWriteStream(filePath, { encoding: 'utf-8' });

     process.stdin.on('data', (data) => {
        stream.write(data)
    })

    process.stdin.on('end', () => {
        stream.end();
    });
};

await write();