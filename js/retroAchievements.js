import {
  buildAuthorization,
  getUserRecentlyPlayedGames,
} from "@retroachievements/api";

// First, build your authorization object.
const webApiKey = env("DATABASE_URL");
const username = "cobbland";

const authorization = buildAuthorization({ username, webApiKey });

// Then, make the API call.
const userRecentlyPlayedGames = await getUserRecentlyPlayedGames(
  authorization,
  {
    username: "cobbland",
  },
);

console.log(userRecentlyPlayedGames);