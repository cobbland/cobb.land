import { feedPlugin } from "@11ty/eleventy-plugin-rss";

export default async function(eleventyConfig) {
	eleventyConfig.addPassthroughCopy("images");
    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPassthroughCopy("js");
    eleventyConfig.addPassthroughCopy("robots.txt");
    eleventyConfig.addPassthroughCopy("hello@cobb.land-0x58E8E614B1589522-pub.asc");
    eleventyConfig.addPassthroughCopy("_redirects");
    eleventyConfig.addPassthroughCopy("netlify.toml");
    eleventyConfig.addPassthroughCopy("posts/photos/images");
    eleventyConfig.addPassthroughCopy("fonts");
    eleventyConfig.addPassthroughCopy("5e_artisanal_database");

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
            subtitle: "A blog, mostly",
            base: "https://cobb.land/",
            author: {
                name: "Cobb",
                email: "", // Optional
            }
        }
    });

    eleventyConfig.addPlugin(feedPlugin, {
        type: "atom", // or "rss", "json"
        outputPath: "/feed-articles.xml",
        collection: {
            name: "article", // iterate over `collections.article`
            limit: 0,     // 0 means no limit
        },
        metadata: {
            language: "en",
            title: "cobb.land | Articles",
            subtitle: "A blog, mostly",
            base: "https://cobb.land/",
            author: {
                name: "Cobb",
                email: "", // Optional
            }
        }
    });

    eleventyConfig.addPlugin(feedPlugin, {
        type: "atom", // or "rss", "json"
        outputPath: "/feed-notes.xml",
        collection: {
            name: "note", // iterate over `collections.note`
            limit: 0,     // 0 means no limit
        },
        metadata: {
            language: "en",
            title: "cobb.land | Notes",
            subtitle: "A blog, mostly",
            base: "https://cobb.land/",
            author: {
                name: "Cobb",
                email: "", // Optional
            }
        }
    });

    eleventyConfig.addPlugin(feedPlugin, {
        type: "atom", // or "rss", "json"
        outputPath: "/feed-photos.xml",
        collection: {
            name: "photo", // iterate over `collections.photo`
            limit: 0,     // 0 means no limit
        },
        metadata: {
            language: "en",
            title: "cobb.land | Photos",
            subtitle: "A blog, mostly",
            base: "https://cobb.land/",
            author: {
                name: "Cobb",
                email: "", // Optional
            }
        }
    });

    eleventyConfig.addPlugin(feedPlugin, {
        type: "atom", // or "rss", "json"
        outputPath: "/feed-reviews.xml",
        collection: {
            name: "review", // iterate over `collections.review`
            limit: 0,     // 0 means no limit
        },
        metadata: {
            language: "en",
            title: "cobb.land | Reviews",
            subtitle: "A blog, mostly",
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

    eleventyConfig.addShortcode("uri", function(text) { return `${encodeURIComponent(text)}` });

};