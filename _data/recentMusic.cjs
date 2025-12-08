// _data/recentMusic.js
const fs = require("fs");

function safeDecode(s) {
    try { s = decodeURIComponent(s); } catch (_) {}
    try { s = decodeURIComponent(s); } catch (_) {}
    return s.replace(/\+/g, " ");
}

function parseArtistAlbum(url) {
    const artistPart = url.split("/artist/")[1];
    if (!artistPart) return null;

    const artistSlug = artistPart.split("/")[0];
    const albumSlug = artistPart.split("/album/")[1].split("/track/")[0];

    return {
        artist: safeDecode(artistSlug),
        album: safeDecode(albumSlug),
        url: url // keep the track URL to link to
    };
}

function parseRecentAlbums(html, count = 5) {
    const trackUrlRegex =
        /<a\s+href="([^"]+\/artist\/[^/]+\/album\/[^"]+\/track\/[^"]+)"/g;

    let urls = [];
    let match;

    while ((match = trackUrlRegex.exec(html)) !== null) {
        urls.push(match[1]);
    }

    const results = [];
    const seen = new Set();

    for (const url of urls) {
        const parsed = parseArtistAlbum(url);
        if (!parsed) continue;

        const key = parsed.artist + "___" + parsed.album;
        if (!seen.has(key)) {
            seen.add(key);
            results.push(parsed);
            if (results.length === count) break;
        }
    }

    return results;
}

module.exports = function () {
    // Load your libre.fm page snapshot
    const html = fs.readFileSync("html/libre.fm.html", "utf8");

    // Return data that Eleventy will expose as `recentMusic`
    return parseRecentAlbums(html, 5).map(item => ({
        artist: item.artist,
        album: item.album,
        albumUrl: item.url,   // link to the album/track page
        artistUrl: `https://libre.fm/artist/${encodeURIComponent(item.artist)}` // optional: local artist page
    }));
};
