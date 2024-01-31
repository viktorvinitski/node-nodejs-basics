import path from "path";
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
import { createReadStream } from 'fs'
import { createHash } from 'crypto'

const calculateHash = async () => {
    const fileToRead = path.join(__dirname + '/files/fileToCalculateHashFor.txt');
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