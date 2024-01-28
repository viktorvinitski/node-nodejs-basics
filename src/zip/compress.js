import path from "path";
import { createReadStream, createWriteStream } from 'fs'
import { unlink } from 'fs/promises'
import { createGzip } from 'zlib'
import { pipeline } from 'stream'

const compress = async () => {
    const readFilePath = path.resolve(path.dirname(new URL(import.meta.url).pathname), './files/fileToCompress.txt');
    const writeFilePath = path.resolve(path.dirname(new URL(import.meta.url).pathname), './files/archive.gz');

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