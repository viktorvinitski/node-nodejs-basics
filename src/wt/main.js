import os from 'os'
import { Worker } from 'worker_threads'
import path from "path";
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const performCalculations = async () => {
    const workerPath = path.join(__dirname + '/worker.js');
    const numCPUs = os.cpus().length;
    const results = [];

    const createWorker = (data) => {
        return new Promise((resolve, reject) => {
            const worker = new Worker(workerPath, { workerData: data });

            worker.on('message', (result) => {
                results.push(result);
                resolve();
            });

            worker.on('error', (error) => {
                results.push({ status: 'error', data: null });
                reject(error);
            });

            worker.on('exit', (code) => {
                if (code !== 0) {
                    results.push({ status: 'error', data: null });
                    reject(new Error(`Worker stopped with exit code ${code}`));
                }
            });
        });
    };

    const workers = [];
    for (let i = 0; i < numCPUs; i++) {
        workers.push(createWorker(10 + i));
    }

    await Promise.all(workers);
    console.log(results);
};

await performCalculations();