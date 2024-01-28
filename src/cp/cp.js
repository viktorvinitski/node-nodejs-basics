import { spawn } from 'child_process'
import path from "path";

const spawnChildProcess = async (args) => {
    const scriptPath = path.resolve(path.dirname(new URL(import.meta.url).pathname), './files/script.js');
    const childProcess = spawn('node', [scriptPath, ...args], {
        stdio: ['pipe', 'pipe', 'inherit']
    });

    process.stdin.pipe(childProcess.stdin);

    childProcess.stdout.pipe(process.stdout);

    childProcess.on('exit', () => {
        process.exit();
    });
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['arg1', 'arg2', 'arg3']);
