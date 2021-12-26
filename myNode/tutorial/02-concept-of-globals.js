// GLOBALS  - NO WINDOW !!!!
// no window object, no document.querySelector

// many many objects
// __dirname  - path to current directory
// __filename - file name
// require    - function to use modules (CommonJS)
// module     - info about current module (file)
// process    - info about env where the program is being executed (very very usefull)


console.log(__dirname);
console.log(__filename);
setInterval(()=>{
    console.log('hello world');
}, 1000)
