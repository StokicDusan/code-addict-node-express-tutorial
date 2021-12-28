const {readFileSync,writeFileSync} = require('fs');

const first = readFileSync('./content/first.txt','utf-8')
const second = readFileSync('./content/second.txt','utf-8')

console.log(first,second);

writeFileSync(
    './content/result-sync.txt',                // path to the file, If it does't exist, it will be created
    `Here is the result : ${first}, ${second}`, // template string
    {flag: 'a'}                                 // append
)


