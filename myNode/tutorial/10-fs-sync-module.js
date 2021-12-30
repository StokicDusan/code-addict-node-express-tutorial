// synchronous -> blocking
const {readFileSync,writeFileSync} = require('fs');
console.log('start')

const first = readFileSync('./content/first.txt','utf-8')
const second = readFileSync('./content/second.txt','utf-8')

console.log(first,second);

writeFileSync(
    './content/result-sync.txt',                // path to the file, If it does't exist, it will be created
    `Here is the result : ${first}, ${second}`, // template string
    {flag: 'a'}                                 // append
)

console.log('done with this task')
console.log('starting the next task')

//if one user takes very long time, node wouldn't be able to serve other users!!!