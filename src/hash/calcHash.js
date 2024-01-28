import path from "path";
import { createReadStream } from 'fs'
import { createHash } from 'crypto'

const calculateHash = async () => {
    const fileToRead = path.resolve(path.dirname(new URL(import.meta.url).pathname), './files/fileToCalculateHashFor.txt');
    try {
        const hash = createHash('sha256');
        const stream = createReadStream(fileToRead);

        stream.on('data', (data) => {
            hash.update(data)
        });

        stream.on('end', () => {
            const hashResult = hash.digest('hex');
            console.log(hashResult)
        });
    } catch {}
};


await calculateHash();