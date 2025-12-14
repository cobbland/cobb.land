var woodPaneledTag = document.getElementById(woodPaneledRingID);

thisWoodPaneledSite = window.location.href;
thisWoodPaneledIndex = null;

for (i = 0; i < woodPaneledSites.length; i++) {
  if (thisWoodPaneledSite.startsWith(woodPaneledSites[i].url)) {
    thisWoodPaneledIndex = i;
    break;
  }
}

function randomWoodPaneledSite() {
  otherWoodPaneledSites = woodPaneledSites.slice();
  otherWoodPaneledSites.splice(thisWoodPaneledIndex, 1);
  randomIndex = Math.floor(Math.random() * otherWoodPaneledSites.length);
  location.href = otherWoodPaneledSites[randomIndex].url;
}

if (thisWoodPaneledIndex == null) {
  woodPaneledTag.insertAdjacentHTML('afterbegin', `
<div class='content'>
  <div class='webring'>
    <div class='item webring-error'>
      <p>This site isn't part of ${woodPaneledRingName} yet. You should talk to the <a href= "mailto: webmaster@woodpaneled.org"> 
      webmaster</a> to have your site added to the list!</p>
    </div>
  </div>
</div>
  `);
}
else {
  previousWoodPaneledIndex = (thisWoodPaneledIndex - 1 < 0) ? woodPaneledSites.length - 1 : thisWoodPaneledIndex - 1;
  nextWoodPaneledIndex = (thisWoodPaneledIndex + 1 >= woodPaneledSites.length) ? 0 : thisWoodPaneledIndex + 1;

  indexWoodPaneledText = ""
  if (useWoodpaneledIndex) {
    indexWoodPaneledText = `<a href='${woodPaneledIndexPage}'>Index</a> | `;
  }

  randomWoodPaneledText = ""
  if (useWoodPaneledRandom) {
    randomWoodPaneledText = `<a href='javascript:void(0)' onclick='randomWoodPaneledSite()'>Random</a> | `;
  }

  woodPaneledTag.insertAdjacentHTML('afterbegin', `
    <div class='content'>
      <div class='webring'>
        <div class='item webring-prev'>
          <p>← <a href='${woodPaneledSites[previousWoodPaneledIndex].url}'>Previous</a></p>
        </div>
        <div class='item webring-info'>
          <p>This site is part of ${woodPaneledRingName}.</p>
          <p><span class='webring-links'>${randomWoodPaneledText} ${indexWoodPaneledText} <a href='${woodPaneledIndexPage}' target='_blank'>What Is This?</a></span></p>
        </div>
        <div class='item webring-next'>
          <p><a href='${woodPaneledSites[nextWoodPaneledIndex].url}'>Next</a> →</p>
        </div>
      </div>
    </div>
  `);

}
