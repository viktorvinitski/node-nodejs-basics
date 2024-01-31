import path from 'path'
import { release, version } from 'os'
import { createServer  } from 'http'
import './files/c.js';
import { readFile } from 'fs/promises'
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const importFile = async (filePath) => {
    const dirname = path.join(__dirname + filePath);
    const fileContent = await readFile(dirname, 'utf-8');
    return JSON.parse(fileContent);
};

(async () => {
    const random = Math.random();

    let unknownObject;

    const objectAPath = '/files/a.json';
    const objectBPath = '/files/b.json';

    unknownObject = random > 0.5
        ? await importFile(objectAPath)
        : await importFile(objectBPath)


    console.log(`Release ${release()}`);
    console.log(`Version ${version()}`);
    console.log(`Path segment separator is "${path.sep}"`);

    console.log(`Path to current file is ${import.meta.url}`);
    console.log(`Path to current directory is ${path.dirname(import.meta.url)}`);

    const myServer = createServer((_, res) => {
        res.end('Request accepted');
    });

    const PORT = 3000;

    console.log(unknownObject);

    myServer.listen(PORT, () => {
        console.log(`Server is listening on port ${PORT}`);
        console.log('To terminate it, use Ctrl+C combination');
    });

    return {
        unknownObject,
        myServer,
    };
})()

