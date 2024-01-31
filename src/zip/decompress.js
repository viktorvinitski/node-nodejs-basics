import path from "path";
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
import { createReadStream, createWriteStream } from "fs";
import { unlink } from "fs/promises";
import { createGunzip } from "zlib";
import { pipeline } from "stream";

const decompress = async () => {
    const readFilePath = path.join(__dirname + '/files/archive.gz');
    const writeFilePath = path.join(__dirname + '/files/fileToCompress.txt');

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