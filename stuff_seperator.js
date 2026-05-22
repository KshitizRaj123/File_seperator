const fs = require('fs');
const fsPromises = require('fs').promises;
const path = require('path');

async function getFiles() {
    const basePath = __dirname;

    const imagesPath = path.join(basePath, 'Images');
    const pdfPath = path.join(basePath, 'PDF Files');
    const otherPath = path.join(basePath, 'Other Files');

    // safer folder creation (no existsSync needed)
    await fsPromises.mkdir(imagesPath, { recursive: true });
    await fsPromises.mkdir(pdfPath, { recursive: true });
    await fsPromises.mkdir(otherPath, { recursive: true });

    const data = await fsPromises.readdir(basePath);

    for (let item of data) {

        const fullPath = path.join(basePath, item);

        //tells if it is a file or folder
        const stats = await fsPromises.stat(fullPath);

        // skip directories (VERY IMPORTANT)
        if (stats.isDirectory()) continue;

        const ext = path.extname(item).toLowerCase();

        if (ext === '.png' || ext === '.jpg' || ext === '.jpeg') {
            await fsPromises.rename(fullPath, path.join(imagesPath, item));
        } 
        else if (ext === '.pdf') {
            await fsPromises.rename(fullPath, path.join(pdfPath, item));
        } 
        else if (ext === '.js') {
            console.log(`Skipping JavaScript file: ${item}`);
        }
        else {
            await fsPromises.rename(fullPath, path.join(otherPath, item));
        }
    }
}

getFiles();