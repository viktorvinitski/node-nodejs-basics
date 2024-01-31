import path from "path";
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
import { createReadStream, createWriteStream } from 'fs'
import { unlink } from 'fs/promises'
import { createGzip } from 'zlib'
import { pipeline } from 'stream'

const compress = async () => {
    const readFilePath = path.join(__dirname + '/files/fileToCompress.txt');
    const writeFilePath = path.join(__dirname + '/files/archive.gz');

    const readStream = createReadStream(readFilePath, { encoding: 'utf-8' });
    const writeStream = createWriteStream(writeFilePath);
    const gzip = createGzip();

    pipeline(readStream, gzip, writeStream, async (error) => {
        if (error) {
            console.log(error);
        } else {
            try {
                await unlink(readFilePath);
            } catch {}
        }
    });
};

await compress();