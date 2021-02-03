const fs = require("fs");
const path = require("path");

const readDir = (path) => {
  try {
    const arrayOfFiles = fs.readdirSync(path);
    console.log(arrayOfFiles);
  } catch (e) {
    console.log(e);
  }
};

const getAllFiles = function (dirPath, arrayOfFiles) {
  files = fs.readdirSync(dirPath);

  arrayOfFiles = arrayOfFiles || [];

  files.forEach(function (file) {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
    } else {
      arrayOfFiles.push(path.join(__dirname, dirPath, "/", file));
    }
  });
  return arrayOfFiles;
};
// readDir("./test");
const allPaths = getAllFiles("./api");
console.log(allPaths);
