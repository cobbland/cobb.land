// _data/recentGames.js
import https from "https";
import 'dotenv/config';

// Change these to your RA username and API key
const RA_USERNAME = "cobbland";
const RA_API_KEY = process.env.RA_API_KEY;

function fetchJson(url) {
  return new Promise((resolve, reject) => {
    https.get(url, res => {
      let data = "";
      res.on("data", d => data += d);
      res.on("end", () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          reject(e);
        }
      });
    }).on("error", reject);
  });
}

export default async function() {
  const url = `https://retroachievements.org/API/API_GetUserRecentlyPlayedGames.php?u=${encodeURIComponent(RA_USERNAME)}&y=${encodeURIComponent(RA_API_KEY)}&c=3`;
  const recent = await fetchJson(url);
  return recent;
}