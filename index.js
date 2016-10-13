'use strict';

var execFile = require('child_process').execFile;
var binPath = require('webp-bin').path;

module.exports = function(content, file, conf) {
    if (file._isImage) {
        try {
            var quality = file.parser.quality || 80;
            // console.log(file);
            // console.log(file.parser.quality);
            execFile(binPath, (file.realpath + ' -q ' + quality + ' -o ' + file.realpathNoExt + '.webp').split(/\s+/), function(err, stdout, stderr) {
                if (err) {
                    console.log(err);
                } else {
                    // console.log('success');
                }
            });
        } catch (err) {
            console.log(err);
        }
    }
    return content;
};