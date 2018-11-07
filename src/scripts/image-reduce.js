const sharp = require('sharp');
const glob = require('glob');
const path = require('path');
const async = require('async');
const mkdirp = require('mkdirp');

process.chdir(__dirname);

const input = '../assets/images/**/*.{jpg,JPG,jpeg,JPEG,png,svg,gif}';
const output = '../assets/thumbnail/images';
mkdirp(output);

glob(input, {}, function (err, files) {
    if (err) return;
    console.log('files', files);
    async.eachLimit(files, 8, file => {
        console.log('file', file);
        const outputFile = path.resolve(output, path.basename(file));
        sharp(file)
            .resize(320, 240)
            .toFile(outputFile);
    });

});
