import fs from 'fs';
import { fileURLToPath } from 'url';
import * as path from 'path';
import semver from 'semver';
import promptSync from 'prompt-sync';

const prompt = promptSync({sigint: true});

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function writeReleaseMD(JSONfile, releaseFile, type, descriptionArr) {
    const formJSON = JSON.parse(fs.readFileSync(JSONfile));
    var version;

    if (type == '1') {
        version = semver.inc(formJSON.version, 'patch');
    }
    else if (type == '2') {
        version = semver.inc(formJSON.version, 'minor');
    }
    else {
        version = semver.inc(formJSON.version, 'major');
    }

    var formattedMessage = "### v" + version;
    for (var line of descriptionArr) {
        formattedMessage += "\n- " + line;
    }
    formattedMessage += "\n\n";

    //write file
    var oldRelease = fs.readFileSync(releaseFile);
    var fd = fs.openSync(releaseFile, 'w+');

    fs.writeSync(fd, formattedMessage, 0, formattedMessage.length, 0);
    fs.writeSync(fd, oldRelease, 0, oldRelease.length, formattedMessage.length);
    fs.close(fd);
}

function main() {
    console.log("Astro Reactive PR Release Updater (ctrl-c to exit)");

    console.log(`What package is changed? 
    1. Common
    2. Form 
    3. Validator`);
    const noChanged = prompt(": ");

    console.log(`What is the type of PR? 
    1. Fix
    2. Minor Release/Feat
    3. Major Release/Feat`);
    const type = prompt(": ");

    console.log("Description of changes (q to finish): ");
    var descriptionArr = [];
    var description;

    do {
        description = prompt(": ");
        if (description != "q") {
            descriptionArr.push(description);
        }
    } while (description != "q");

    switch (noChanged) {
        case '1':
            var JSONfile = path.resolve(__dirname, './common/package.json');
            var releaseFile = path.resolve(__dirname, './common/RELEASE.md');
            writeReleaseMD(JSONfile, releaseFile, type, descriptionArr);
            break;   
        case '2':
            var JSONfile = path.resolve(__dirname, './form/package.json');
            var releaseFile = path.resolve(__dirname, './form/RELEASE.md');
            writeReleaseMD(JSONfile, releaseFile, type, descriptionArr);
            break;
        case '3':
            var JSONfile = path.resolve(__dirname, './validator/package.json');
            var releaseFile = path.resolve(__dirname, './validator/RELEASE.md');
            writeReleaseMD(JSONfile, releaseFile, type, descriptionArr);
            break;
        default:
            console.log("Invalid package specified.");
    }
}

var continueScript;

do {
    main();
    console.log("Do you want to update another package release? (Y to continue)");
    continueScript = prompt(": ");
} while (continueScript == 'Y' || continueScript == 'y');