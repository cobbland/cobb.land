import https from 'https';
import fs from 'fs';

const ringVarsUrl = 'https://woodpaneled.org/scripts/onionring-variables.js';
const ringVarsFile = 'data/onionring-variables.js';

https.get(ringVarsUrl, (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
        if (res.statusCode === 200) {
            fs.writeFileSync(ringVarsFile, data + '\nexport {woodPaneledSites};');
            console.log('Downloaded, wrote, and appended onionring-variables.js');
        } else {
            console.error('Failed to download onionring-variables.js');
        }
    });
});

