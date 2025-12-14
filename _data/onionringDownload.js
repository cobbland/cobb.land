// Change https to http if the files below are hosted at an insecure domain
import https from 'https';
import fs from 'fs';

// Set ringVars to the address of your webring's onionring-variables.js file.
const ringVars = 'https://woodpaneled.org/scripts/onionring-variables.js';
// Set ringWidget to the address of your webring's onionring-widget.js file.
const ringWidget = 'https://woodpaneled.org/scripts/onionring-widget.js';
// Set ringVarsFile to the location and filename where you want to save the above.
const ringVarsFile = fs.createWriteStream('data/onionring-variables.js');
// Set ringVarsFile to the location and filename where you want to save the above.
const ringWidgetFile = fs.createWriteStream('data/onionring-widget.js');

let gotRingVars = false;
let gotRingWidget = false;

const ringVarsRequest = https.get(ringVars, ((res) => {
    res.pipe(ringVarsFile);
    if (res.statusCode === 200) {
        ringVarsFile.on('finish', () => {
            ringVarsFile.close();
            gotRingVars = true;
            console.log("Downloaded: onionring-variables.js");
            fs.appendFileSync('data/onionring-variables.js', '\nexport {woodPaneledSites};');
            console.log('Appended export statement!');
        });
    } else {
        ringVarsFile.close();
        console.error('Something is not right. Double check ringVars');
    }
}));

const ringWidgetRequest = https.get(ringWidget, ((res) => {
    res.pipe(ringWidgetFile);
    if (res.statusCode === 200) {
        ringWidgetFile.on('finish', () => {
            ringWidgetFile.close();
            gotRingWidget = true;
            console.log("Downloaded: onionring-widget.js");
        });
    } else {
        ringWidgetFile.close();
        console.error('Something is not right. Double check ringWidget');
    }
}));
