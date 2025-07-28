import { feedPlugin } from "@11ty/eleventy-plugin-rss";

export default async function(eleventyConfig) {
	eleventyConfig.addPassthroughCopy("images");
    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPassthroughCopy("robots.txt");
    eleventyConfig.addPassthroughCopy("hello@cobb.land-0x58E8E614B1589522-pub.asc");

    eleventyConfig.addPlugin(feedPlugin, {
        type: "atom", // or "rss", "json"
        outputPath: "/feed.xml",
        collection: {
            name: "post", // iterate over `collections.post`
            limit: 0,     // 0 means no limit
        },
        metadata: {
            language: "en",
            title: "cobb.land",
            subtitle: "A blog, mostly.",
            base: "https://cobb.land/",
            author: {
                name: "Cobb",
                email: "", // Optional
            }
        }
    });

    eleventyConfig.addFilter("limit", function (arr, limit) {
        const newArr = arr;
        return newArr.slice(0, limit);
    });

    eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

    // first (failed) attempt at showing webmentions
    eleventyConfig.addShortcode("webmentions", async function(postUrl) {
        const domain = postUrl;
        const url = `https://webmention.io/api/mentions.jf2?target=https://cobb.land${domain}`;
        try {
            const response = await fetch(url);
            if (response.ok) {
                const feed = await response.json();
                const children = await feed.children;
                let responses = [];
                let replies = 0;
                let reposts = 0;
                let bookmarks = 0;
                let mentions = 0;
                let rsvps = 0;
                let likes = 0;
                let other = 0;
                for (const reply of children) {
                    responses.push(reply["wm-property"])
                    switch (reply["wm-property"]){
                        case 'in-reply-to':
                            replies++;
                            break;
                        case 'like-of':
                            likes++;
                            break;
                        case 'repost-of':
                            reposts++;
                            break;
                        case 'bookmark-of':
                            bookmarks++;
                            break;
                        case 'mention-of':
                            mentions++;
                            break;
                        case 'rsvp':
                            rsvps++;
                            break;
                        default:
                            other++;
                            break;
                    }
                }
                // return JSON.stringify(replies);
                // return url;
                return [replies, reposts, bookmarks, mentions, rsvps, likes, other];
            }
        } catch (err) {
            console.log(err);
            return `error: ${err}`;
        }
    });

};