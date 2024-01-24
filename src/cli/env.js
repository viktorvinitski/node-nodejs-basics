process.env.RSS_name1 = 'value1'
process.env.RSS_name2 = 'value2'

const parseEnv = () => {
    for (const env in process.env) {
        if (env.startsWith('RSS_')){
            const name = env.slice(4)
            const value = process.env[env]

            console.log(`RSS_${name}=${value}`)
        }
    }
};

parseEnv();