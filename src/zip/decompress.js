import path from "path";
import { createReadStream, createWriteStream } from "fs";
import { unlink } from "fs/promises";
import { createGunzip } from "zlib";
import { pipeline } from "stream";

const decompress = async () => {
    const readFilePath = path.resolve(path.dirname(new URL(import.meta.url).pathname), './files/archive.gz');
    const writeFilePath = path.resolve(path.dirname(new URL(import.meta.url).pathname), './files/fileToCompress.txt');

    const readStream = createReadStream(readFilePath);
    const writeStream = createWriteStream(writeFilePath, { encoding: 'utf-8' });
    const gunzip = createGunzip();

    pipeline(readStream, gunzip, writeStream, async (error) => {
        if (error) {
            console.log(error);
        } else {
            try {
                await unlink(readFilePath);
            } catch {}
        }
    });
};

await decompress();