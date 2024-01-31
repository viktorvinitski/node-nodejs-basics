const parseArgs = () => {
    const args = process.argv.slice(2)

    args.forEach((arg, index) => {
        if(index === 0 || index % 2 === 0 ) {
            const argName = arg.replace('--', '')
            const value = args[index + 1]

            console.log(`${argName} is ${value}`)
        }
    })
};

parseArgs();