// GLOBALS - NO WINDOW!!!!

// __dirname - path to current directory  -Note:It's two underscores
// __filename - filename
// require - function to user modules(commonJS)
// module - Info about current module (file)
// process - info about environment where the program is being executed

console.log(__dirname);
setInterval(() => {
  console.log("hello world");
}, 1000);
