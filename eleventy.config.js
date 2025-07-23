export default async function(eleventyConfig) {
	eleventyConfig.addPassthroughCopy("images");
    eleventyConfig.addPassthroughCopy("css");
};