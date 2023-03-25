import fs from "fs";
import { fileURLToPath } from "url";
import * as path from "path";
import promptSync from "prompt-sync";

const prompt = promptSync({ sigint: true });

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function writeReleaseMD(releaseFile, featuresArr, fixesArr) {
  var formattedMessage = "";

  if (featuresArr.length != 0) {
    formattedMessage += "Features";
    for (var line of featuresArr) {
      formattedMessage += "\n\t- " + line;
    }
    formattedMessage += "\n\n";
  }

  if (fixesArr.length != 0) {
    formattedMessage += "Fixes";
    for (var line of fixesArr) {
      formattedMessage += "\n\t- " + line;
    }
    formattedMessage += "\n\n";
  }

  //write file
  var oldRelease = fs.readFileSync(releaseFile);
  var fd = fs.openSync(releaseFile, "w+");

  fs.writeSync(fd, formattedMessage, 0, formattedMessage.length, 0);
  fs.writeSync(fd, oldRelease, 0, oldRelease.length, formattedMessage.length);
  fs.close(fd);
}

function main() {
  console.log("Astro Reactive PR Release Updater (ctrl-c to exit)");

  var noChanged, feature, fix, breakExisting;
  var featuresArr = [];
  var fixesArr = [];

  do {
    console.log(`What package is changed? 
    1. Common
    2. Form 
    3. Validator`);
    noChanged = prompt(": ");
  } while (
    isNaN(noChanged) ||
    parseInt(noChanged) < 1 ||
    parseInt(noChanged) > 3
  );

  do {
    console.log("Description of feature (q to finish): ");
    feature = prompt(": ");

    if (feature != "q") {
      console.log(
        "Will this code change break existing examples and/or demo applications? Y/N"
      );
      breakExisting = prompt(": ");
      if (breakExisting == "Y" || breakExisting == "y") {
        feature += " (BREAKING CHANGE)";
      }
      featuresArr.push(feature);
    }
  } while (feature != "q");

  do {
    console.log("Description of fix (q to finish): ");
    fix = prompt(": ");

    if (fix != "q") {
      console.log(
        "Will this code change break existing examples and/or demo applications? Y/N"
      );
      breakExisting = prompt(": ");
      if (breakExisting == "Y" || breakExisting == "y") {
        fix += " (BREAKING CHANGE)";
      }
      fixesArr.push(fix);
    }
  } while (fix != "q");

  switch (noChanged) {
    case "1":
      var releaseFile = path.resolve(__dirname, "./common/CHANGELOG.md");
      writeReleaseMD(releaseFile, featuresArr, fixesArr);
      break;
    case "2":
      var releaseFile = path.resolve(__dirname, "./form/CHANGELOG.md");
      writeReleaseMD(releaseFile, featuresArr, fixesArr);
      break;
    case "3":
      var releaseFile = path.resolve(__dirname, "./validator/CHANGELOG.md");
      writeReleaseMD(releaseFile, featuresArr, fixesArr);
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
} while (continueScript == "Y" || continueScript == "y");
