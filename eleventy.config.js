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
        return arr.reverse().slice(0, limit);
    });

};