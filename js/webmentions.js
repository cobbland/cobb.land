const webmentionsDiv = document.querySelector("#webmentions");
const webmentions = await getWebmentions(window.location.pathname);

async function getWebmentions(postUrl) {
    const domain = postUrl;
    const url = `https://webmention.io/api/mentions.jf2?target=https://cobb.land${domain}`;
    try {
        const response = await fetch(url);
        if (response.ok) {
            const feed = await response.json();
            const children = await feed.children;
            const newUl = document.createElement('ul');
            for (const reply of children) {
                if (reply.author.name != "Cobb") {
                    let author = reply.author.name;
                    let authorUrl = reply.author.url;
                    const property = reply["wm-property"];
                    const replyTargetUrl = reply["wm-target"];
                    const replyUrl = reply.url;
                    const received = new Date(reply["wm-received"]).toDateString();
                    if (!author) {
                        let urlObject = new URL(replyUrl);
                        author = authorUrl;
                        if (!authorUrl) {
                            let urlObject = new URL(replyUrl);
                            authorUrl = urlObject.origin;
                            author = urlObject.hostname;
                        }
                    }
                    const newLi = document.createElement('li');
                    newLi.classList.add('note');
                    newLi.innerHTML = ` 
                    <a href="${replyUrl}">${property}</a> by 
                    <a href="${authorUrl}">${author}</a> on
                    ${received}
                    `;
                    newUl.insertBefore(newLi, newUl.firstChild);
                }
            }
            return newUl;
        }
    } catch (err) {
        console.log(err);
        return `error: ${err}`;
    }
};

if (webmentions.childElementCount) {
    const newHeading = document.createElement('h2');
    newHeading.textContent = "Mentions";
    newHeading.id = 'webmentions-heading';
    webmentionsDiv.appendChild(newHeading);
    webmentionsDiv.appendChild(webmentions);
}
