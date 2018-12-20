const fs = require('fs');

const ROOT_DIR = "../example_files";

// M:Love.FileSystem.Mount(System.Byte[],System.Byte[],System.Boolean)
//   => M-Love.FileSystem.Mount.cs
// T:Love.FileSystem
//   => T-Love.FileSystem.cs
function dueExampleFile(name) {
    name = name.replace(':', '-');
    if (name.indexOf('(') !== -1){
        name = name.substr(0, name.indexOf('('))
    }

    name += ".cs";

    const files = fs.readdirSync(ROOT_DIR);
    const fileName = files.find(item => {
        const stat = fs.lstatSync(ROOT_DIR + "/" + item)
        return stat.isFile() && item === name
    })

    if (fileName) {
        return fs.readFileSync(`${ROOT_DIR}/${fileName}`, "utf8");
    }
}

const res = dueExampleFile("M:Love.Graphics.Arc(Love.DrawMode,System.Single,System.Single,System.Single,System.Single,System.Single)")
console.log(res);

module.exports = {
    dueExampleFile
}