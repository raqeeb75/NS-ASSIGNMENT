// 1. reading environment values

const appName = process.env.APP_NAME;
const appMode = process.env.APP_MODE;

console.log("App Name:", appName);
console.log("App Mode:", appMode);


// 2. file organizer made in a simple way


const fs = require("fs");
const path = require("path");

const folder = "./files";

fs.readdir(folder, (err, files) => {
    if (err) return;

    files.forEach(file => {
        const ext = path.extname(file).slice(1);
        if (!ext) return;

        const extFolder = `${folder}/${ext}`;

        if (!fs.existsSync(extFolder)) {
            fs.mkdirSync(extFolder);
        }

        fs.rename(
            `${folder}/${file}`,
            `${extFolder}/${file}`,
            () => console.log(`${file} moved`)
        );
    });
});

